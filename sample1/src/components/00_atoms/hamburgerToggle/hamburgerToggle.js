import React from 'react';
import './hamburgerToggle.scss'

const HamburgerToggle = (props) => {
  return (
    <div className='hamburgerToggle-wrapper' onClick={props.onClick}>
      <span className={'ham-lines' + (props.isOpen ? ' clicked' : '')}/>
    </div>
  )
}

export default HamburgerToggle
