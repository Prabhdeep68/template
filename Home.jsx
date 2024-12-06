import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <><div className='home'>
        <div className="home1">
    <h1>Get Paid Easily <br/>Without Hassle</h1>
    <p>Far far away, behind the word mountains, far from the<br/> countries Vokalia and Consonantia, there live the blind <br/>texts. Separated they live.</p>
    <form action="#">
                    <div className="Inputs">
                        <input type="email" placeholder="Enter Your Email Here" name="email" id="inp"/>
                        <button class="sub">Submit</button>
                    </div>
                </form></div>
                <div className="home2">
                    <img src='https://preview.colorlib.com/theme/easy/images/hero_img.png'/>
                </div>
             
                </div>
              
    </>
  )
}

export default Home;