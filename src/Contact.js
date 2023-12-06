import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  function SendEmail(e){
    

      
    e.preventDefault();
    emailjs.sendForm('service_otaxrkh', 'template_bfxxt8b', form.current, 'KCf151hCYWuTrnY20')
      .then((result) => {
          console.log(result.text);
          document.getElementById('name').value='';
          document.getElementById('email').value='';
          document.getElementById('message').value='';
          alert('Your Message Sent Sucsesfully!'+ result.status)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className='coloring' style={{height:'100vh'}}>
    <div className='Cdiv '>
      <form className='formC' ref={form}>
          <input 
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            required
            className='contactinput'
          />
          <input type="email" name="email" id="email" placeholder="Email" className='contactinput' required />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Idea"
            required
            className='contactinput'
          ></textarea>
          </form>
          <button className='btn btn-primary Cbtn' style={{background:'#86b7fe'}} type='submit' onClick={SendEmail}>
  Send it!
</button>        </div>
        </div>
  )
}

export default Contact