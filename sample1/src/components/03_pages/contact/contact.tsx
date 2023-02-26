import React, { FormEvent, useState, useEffect } from 'react';
import { init, send } from 'emailjs-com';
import './contact.scss'

const Contact = () => {
  const [params, setParams] = useState({
    from_name: 'test',
    from_email: 'test@test',
    message: 'test',
  })

  const onSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
     alert('pushed subimit button')
    try {
      await send(
        'service_l7rgxvn', 
        'template_i7ts2se', 
        params, 
        'LVHASNx_B3Wg6Jkv2'
      )
      console.log('stop')
      alert('sended message!!!')
      setParams({
        from_name: '',
        from_email: '',
        message: '',
      })
    } catch (error) {
      alert(error)
    }
  }

  const handleChange = (
    e : React.ChangeEvent<HTMLInputElement> |
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value,
    })
  }


  useEffect(() => {
    init("YOUR_PUBLIC_KEY")
  },[])

  return (
    <div className='contact-wrapper'>
      <div className='contact-header'>
        <h1>CONTACT</h1>
        <p>お問い合わせ</p>
      </div>
      <div className='contact-contents'>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text" 
            placeholder="Name" 
            name="from_name"
            onChange={handleChange}
            value={params.from_name}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="from_email"
            onChange={handleChange}
            value={params.from_email}
            required
          />
          <textarea 
            placeholder="Message" 
            name="message"
            onChange={handleChange}
            value={params.message}
            required
          ></textarea>          
          <input type="submit" value={'send'} />
        </form>
      </div>
    </div>
  )
}

export default Contact
