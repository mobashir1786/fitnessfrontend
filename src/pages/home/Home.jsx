import React from 'react';
import "./home.css"
import { Link} from 'react-router-dom'

function Home() {
  return (
    <div className='homepage'>
      <div className="homenav">
        <div className="homenavtitle">My Fitness</div>
        <Link to="login"><div className="homenavbutton">Login</div></Link>
      </div>
      <hr />
      <div className="homecontent">
        <div className="homecontentleft">
          <div className="homecontentleftTitle">Good health starts with what you eat.</div>
          <div className="homecontentsubtitle">Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitnessPal.</div>
          <Link className='btnhomelink' to="/signup"><button className="homecontentBtn">Start For Free</button></Link>
        </div>
        <div className="homecontentright"><img src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" alt="Loading..." /></div>
      </div>
    </div>
  )
}

export default Home