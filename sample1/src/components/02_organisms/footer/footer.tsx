import React, {useState} from 'react'
import ITwi  from 'static/img/iTwi'
import IInst from 'static/img/iInst'
import './footer.scss'

const Footer = () => {
  return (
    <footer className={'footer-wrapper'}>
      <div className='SNS'>
        <a href="https://twitter.com/u__more"><ITwi/></a>
        <a href="https://www.instagram.com/closm.jp/"><IInst/></a>
      </div>
      <small>&copy; CLOSM</small>
    </footer>
  )
}

export default Footer
