import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import {BiRun} from 'react-icons/bi'
import {AiFillHome } from 'react-icons/ai'
import {BsTelephoneFill } from 'react-icons/bs'
import {FiLogIn } from 'react-icons/fi'
import {MdFactory } from 'react-icons/md'
import {RiLogoutBoxLine } from 'react-icons/ri'


function Navbar() {
  const nav=useNavigate();

  return (
    <div >
        <nav className="navbar navbar-expand-lg  bg">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand text-primary" ><MdFactory style={{marginBottom:'0.4rem',marginRight:'0.2rem'}}/>Code Factory</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/' className="nav-link active hover" aria-current="page" ><AiFillHome style={{marginBottom:'0.3rem'}}/>Home</Link>
        <button style={{display:'flex',justifyContent:'flex-start'}}  className="nav-link hover" onClick={()=>{
          const test=localStorage.getItem('email')
          if(test === null){
            
            nav('/register')
            alert('You need to Sign up first..')
          }
          else{
            nav('/explore')
          }
        }} ><BiRun style={{marginTop:'0.3rem'}}/>Explore</button>
        <Link to='contact' className="nav-link hover" ><BsTelephoneFill/>Contact Us</Link>
        <Link to='register' className="nav-link hover" ><FiLogIn/>Register</Link>
        <button style={{display:'flex',justifyContent:'flex-start'}} className="nav-link hover" onClick={()=>{
          localStorage.removeItem('email')
          nav('/')
          alert('You have been logen out Successfully!')
        }} ><RiLogoutBoxLine style={{marginTop:'0.3rem'}}/>Log Out</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar