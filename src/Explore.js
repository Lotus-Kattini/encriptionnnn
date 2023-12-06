import {BiRun} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {TbSquareNumber1,TbSquareNumber2,TbSquareNumber3} from 'react-icons/tb'
import {MdOutlineCallMissedOutgoing} from 'react-icons/md'
import encrip from './images/encryption.jpg'
import pass from './images/password.jpg'
import wheater from './images/weather-app.jpg'
import { Link } from 'react-router-dom'

function Explore() {
  return (
    <div className='coloring'>

    <div className="container ">
  <div className="row">
    <p className='h4 mt-3'><TbSquareNumber1 className='text-primary' style={{marginRight:'0.2rem',marginBottom:'0.3rem'}}/>Our First app:</p>
    <div className="col-12 mt-3">
    <div className="card cardstyle" >
        <img src={wheater} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Weather App</h5>
          <p className="card-text">This is an idea of one of our subscripers and it has been done using React and APIs..
          type the name of the country and it shows you the temperature and humadidty and the wind speed!..</p>
          <div className='d-flex justify-content-around'>
          <a  className="btn btn-primary" target='_blank' href='https://github.com/Lotus-Kattini/weather-app-react'>GitHub<AiFillGithub style={{marginLeft:'0.2rem',marginBottom:'0.2rem'}}/></a>
          <a  className="btn btn-primary" target='_blank' href='https://my-weather-app-lk.netlify.app/'>Demo<BiRun/></a>
          </div>
        </div>
    </div>
    </div>
    <p className='h4 mt-3 mb-3'><TbSquareNumber2 className='text-primary' style={{marginRight:'0.2rem',marginBottom:'0.3rem'}}/>Our First enchription app:</p>
    <div className="col-12">
    <div className="card cardstyleX" >
        <img src={encrip} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Text Encryption</h5>
          <p className="card-text">This is another idea of one of our subscripers..
          the user enter the text he needs to encrypted it and it will be encrypted py cesar siefer algorithem..</p>
          <Link to='/encription' className="btn btn-primary">Try Now!<MdOutlineCallMissedOutgoing/></Link>
        </div>
    </div>
    </div>
    <p className='h4  mb-3'><TbSquareNumber3 className='text-primary' style={{marginRight:'0.2rem',marginBottom:'0.3rem'}}/>Our Second enchription app:</p>
    <div className="col-12">
    <div className="card  cardstyle" >
        <img src={pass} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Password Encryption and Generation</h5>
          <p className="card-text">it Generates password and it will be encrypted py cesar siefer algorithem..</p>
          <Link to='/generate' className="btn btn-primary">Try Now!<MdOutlineCallMissedOutgoing/></Link>
        </div>
    </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Explore