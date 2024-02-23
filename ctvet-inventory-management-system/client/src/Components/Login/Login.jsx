import React from 'react'
import './Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'

//import our Assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.jpg'

const Login = () => {
    return (
        <div className='loginPage flex'>
        <div className="container flex">

            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                   <h2 className='title'>Create Ad Extraordinary Products </h2>
                   <p>Adopt the peace of nature!</p>
                </div>

                <div className="footerDiv flex">
                 <span className="text">Don't Have an account?</span>
                 <Link to= {'/register'}>
                 <button className='btn'>Sign Up</button>
                 </Link>
                </div>
            </div>
 
             <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt =" Logo Image"/>
                    <h3>Welcom Back!</h3>
                </div>
                 
                <form action="" className='form grid'> 
                   <span>Login Status will go here</span>
                   <div className="inputDiv">
                    
                   </div>
                </form>
             </div>

        </div>
        </div>
    )
}

export default Login