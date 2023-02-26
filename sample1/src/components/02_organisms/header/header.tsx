import React, {useState} from 'react'
import ITwi            from 'static/img/iTwi'
import IInst           from 'static/img/iInst'
import HamburgerToggle from 'components/00_atoms/hamburgerToggle/hamburgerToggle'
import HeaderPopup     from './headerPopup/headerPopup'
import './header.scss'

const Header = () => {
  const [isDisp, setIsDisp]   = useState(true)
  const [isShown, setIsShown] = useState(false)

  const popupHandler = (e : React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    let id = e.currentTarget.id

    if(id === 'popup-back' || id === 'header-item') {
      setIsShown(false)
    } else {
      setIsShown(true)
    }
  }

  return (
    <header className={'header-wrapper'}>
      <a href='/' className='icon'>
        <h1 className='icon'>経理代行サービス</h1>
        <p>Accounting Agency Service</p>
      </a>
      <div className='sub'>
        <div className='SNS'>
          <a 
            // href="https://twitter.com"
            href="#"
            ><ITwi/></a>
          <a
            // href="https://www.instagram.com"
            href="#"
            ><IInst/></a>
        </div>
        <HamburgerToggle
          onClick = {popupHandler}
          isOpen  = {isShown}
        />
        <HeaderPopup
          isShown      = {isShown}
          popupHandler = {popupHandler}
        />
        {
          // <a href="/about">ABOUT</a>
          // <a href="/works">WORKS</a>
          // <a href="/floatUpTest">floatUpTest</a>
        }
      </div>
    </header>
  )
}

export default Header
