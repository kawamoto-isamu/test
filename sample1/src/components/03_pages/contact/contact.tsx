import React from 'react';
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-header'>
        <h1>CONTACT</h1>
        <p>お問い合わせ</p>
      </div>
      <div className='contact-contents'>
        <form action="">
          <input type="text" placeholder="Name" name="name" required/>
          <input type="email" placeholder="Email" name="email" required/>
          <textarea placeholder="Message" name="message" required></textarea>          
          <input type="submit" value={'send'} />
        </form>
      </div>
    </div>
  )
}

export default Contact
