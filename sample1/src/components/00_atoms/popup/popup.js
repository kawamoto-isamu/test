import React from 'react';
import './popup.scss'


const Popup = (props) => {

  return (
    <div
      className={'popup-back' + (props.isShown ? ' show' : '')}
      onClick={props.popupHandler}
      id='popup-back'
    >
      <div
        className='popup-wrapper'
        onClick={props.popupHandler}
        id='popup-wrapper'
      >
      {props.children}
      </div>

    </div>
  )
}


export default Popup;
