import React from 'react'
// import Himg from './images/imgHeader.jpg'
import encrip from './images/encryption.jpg'
import {BsCodeSlash} from 'react-icons/bs'
import {BiRun} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {FaSitemap} from 'react-icons/fa'
import {BsQuestionLg} from 'react-icons/bs'


function Home() {
  const nav=useNavigate();

  return (
    <div className='coloring height' >
    <div className="d-flex justify-content-around display">
        <div className='Header' >
        <p className="h1 text-primary">WELCOME to our code factory<BsCodeSlash/></p>
        <p className="h3 text-gray">Our job is make your idea an actuall WebApplication..</p>
        <p className="h6 text-secondary">Click the button bellow to see our latest webapplication from your ideas!</p>
        <button type="button" className="btn btn-outline-primary" onClick={()=>{
          const test=localStorage.getItem('email')
          if(test === null){
            
            nav('/register')
            alert('You need to Sign up first..')

          }
          else{
            nav('/explore')
          }
        }}>Exoplore<BiRun/></button>
        </div>

        {/* <img src={Himg} className="img-fluid Himg" alt="..."></img> */}
        <div className='img-fluid Himg'></div>
    </div>
    <div >
    <p className="h2 custm" ><FaSitemap className='text-success'/>This is an example..</p>
      <div className="card Cstyle " >
        <img src={encrip} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Text Encryption</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-success" onClick={()=>{
            const test=localStorage.getItem('email')
            if(test === null){
              
              nav('/register')
            alert('You need to Sign up first..')

            }
            else{
              nav('/explore')
            }
          }}>Exoplore<BiRun/></a>
        </div>
    </div>
    </div>
    <p className="h2 custm"><BsQuestionLg className='text-primary'/>Most common questions..</p>
    <div className="accordion container Cacoord" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How Can We Share Our Ideas?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Click on contact us and fill the information and we will recieve your email and response as soon as possible</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Do I Get Paid?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>If your idea is uniqe and we accept it so you get a persentage of the profits of the website</strong> 
      </div>
    </div>
  </div>
  
</div>
  </div>
  )
}

export default Home