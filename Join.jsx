import React from 'react'
import "./join.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Join = () => {
  return (
    <div className="join">
        <div className="join1">
            <strong>JOIN NOW</strong>
           <h3> Join More Than<br/> 90,000+ Amazing<br/> People Loves Our<br/> Product</h3>
           <p> far away, behind the word<br/> mountains, far from the countries<br/> Vokalia and Consonantia, there live<br/> the blind texts.

</p>
           <button>Product Tour</button>
        </div>
        <div className="join2">
            <div className="container1">
              <div className="contents">
              <img src='https://preview.colorlib.com/theme/easy/images/person_4.jpg'/>
              <h4>Kalia Woodland<br/><span>
              Owner Greenland ,Inc.</span></h4>
              </div>
              <div className="cont">
              <p>"far-Far away,behind the word mountains,Far from the countries,<br/> Vokalia and Constantia,there live the blind texts.seprated <br/>they live."</p></div>
              <div className="icon">
                <div className="icon1">
                  <button>
                <FontAwesomeIcon icon={faArrowRight} size="2x" color="black" /></button>
                </div>
                <div className="icon2">
                  <button>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" color="black" /></button>
                </div>
              </div>

            </div>
        </div>

    </div>

  )
}

export default Join;