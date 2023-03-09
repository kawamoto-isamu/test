import React, { useEffect, useState, useRef, ReactNode, PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any>{
  className : string,
  children : ReactNode,  
  scrollRatio? : number,
  fontSizeRatio? : number,
  fontSizeMin? : number,
}

const ScrollColor = ({
  className,
  children,  
  scrollRatio = 3,
  fontSizeRatio = 1.2,
  fontSizeMin = 16,
} : Props) => {
  const wpRef = useRef<HTMLDivElement>(null!)
  const [color, setColor] = useState("black");
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      console.log('scrollTop : ' + scrollTop)
      console.log('scrollHeight : ' + scrollHeight)
      console.log('clientHeight : ' + clientHeight)
      console.log('wpRef.current.offsetTop : ' + wpRef.current.offsetTop)

      // wpRef.current.offsetTop
      // const scSrt = scrollText?.offsetTop
      // const scEnd = scrollText?.offsetHeight - clientHeight
      const scSrt = wpRef.current.offsetTop
      const scEnd = wpRef.current.offsetHeight + scSrt - clientHeight

      console.log('scSrt : ' + scSrt)
      console.log('scEnd : ' + scEnd)

      // Calculate the scroll percentage
      let spTmp = scrollTop / (scrollHeight - clientHeight);
      if (scrollTop < scSrt) {
        spTmp = 0
      } else if ( scSrt <= scrollTop && scrollTop < scEnd ){
        spTmp = (scrollTop - scSrt) / (scEnd - scSrt)
      } else if (scEnd <= scrollTop) {
        spTmp = 1
      }

      // Calculate the color based on the scroll percentage
      const red = Math.floor(255 * (1 - spTmp));
      const green = Math.floor(255 * (1 - spTmp));
      const blue = Math.floor(255 * (1 - spTmp));
      setColor(`rgb(${red}, ${green}, ${blue})`);
      setScrollPercent(spTmp)
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      className={className} 
      ref={wpRef}
      style={{
        'display': 'flex',
        'justifyContent': 'center',
        'width': '100%',
        'height': scrollRatio * 100 + 'vh',
      }}
    >
      <div 
        className="inner" 
        style={{
          position: "sticky", 
          top: 0, 
          left: 0, 
          color,
          'display': 'flex',
          'flexDirection': 'column',
          'justifyContent': 'center',
          'alignItems': 'center',
          'fontSize': fontSizeMin +  scrollPercent * fontSizeRatio * (30 - fontSizeMin),
          'height': '100vh',
          'verticalAlign': 'middle',
        }}
      >
        {children}
      </div>
    </div>
  );
};


export default ScrollColor;
