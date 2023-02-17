import React, {useState} from 'react'
import I from 'static/img/i'
import HamburgerToggle from 'components/00_atoms/hamburgerToggle/hamburgerToggle'
import HeaderPopup from './headerPopup/headerPopup'
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
        <I/><h1 className='icon'>CLOSM</h1>
      </a>
      <div className='sub'>
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
