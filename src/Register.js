import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[passwordR,setpasswordR]=useState('')
  const[accept,setaccept]=useState(false)
  const [emailError,setemailError]=useState('')

  const nav=useNavigate();

  function Submit(e){
    e.preventDefault();
    if(password !== passwordR || password.length < 8 || name ===''){
      setaccept(true)
    }
    

    }

    const styleRegister={
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40px",
    }
  
    const styleForm={
      boxShadow: "0 2px 15px #c4c1c1",
      width:'400px'
    }
  
    const buttonstyle={
      width:'100%',
      marginTop:'1rem'
    }
  return (
    <div className='coloring' style={{ height: '100vh' }}>
  <div className='container'>
    <div className='row justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='col-lg-6 col-md-8 col-sm-12'>
        <div className='register' style={styleRegister}>
          <form onSubmit={Submit} style={styleForm}>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              type='text'
              className='form-control'
              placeholder='Enter Your Name'
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            {name === '' && accept && <p className='error'>Username is required</p>}
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              className='form-control'
              placeholder='Enter Your Email'
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            {emailError === 422 && accept && <p className='error'>This email is already taken</p>}
            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              type='password'
              className='form-control'
              placeholder='Password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {password.length < 8 && accept ? <p className='error'>Password must be at least 8 characters</p> : ''}
            <label htmlFor='repeate'>Repeat Password:</label>
            <input
              id='repeate'
              type='password'
              className='form-control'
              placeholder='Repeat Password'
              value={passwordR}
              onChange={(e) => setpasswordR(e.target.value)}
            />
            {password !== passwordR && accept ? <p className='error'>Passwords do not match</p> : ''}
            <div style={{ textAlign: 'center' }}>
              <button
                type='submit'
                className='btn btn-primary'
                style={buttonstyle}
                onClick={() => {
                  if (password === passwordR && password.length >= 8 && name !== '') {
                    window.localStorage.setItem('email', email);
                    nav('/explore');
                  }
                }}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register