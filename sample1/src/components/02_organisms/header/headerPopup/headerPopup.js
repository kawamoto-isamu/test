import React from 'react';
import {Link} from 'react-router-dom';
import Popup from 'components/00_atoms/popup/popup';
import './headerPopup.scss'

const HeaderPopup = (props) => {
  return (
    <Popup
      isShown      = {props.isShown}
      popupHandler = {props.popupHandler}
    >
      <div className={'headerPopup-wrapper'}>
        <a href="/">TOP</a>
        <a href="/plans">PLANS</a>
        <a href="/contact">CONTACT</a>
      </div>
    </Popup>

  )
}

export default HeaderPopup;
