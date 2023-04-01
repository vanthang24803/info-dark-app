import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import "./about.css"


const About = () => {
  return (
    <div>
      <div className="about-info">
        <img src="https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/338811183_744515227275476_4602096052407324602_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zd9UgzeQMQsAX_HxARY&_nc_ht=scontent.fhph1-3.fna&oh=00_AfDKQaY_bjf3RNPDbiVSJMYRJC-DORtHrw3aMT9oCm1dzw&oe=642AC247" alt="" className="about-img" />
      </div>

      <h3 className="about-name">May Nguyen</h3>

      <ul className="about-social">
        <li className="about-item">
          <a href="" className="about-link">Github</a>
        </li>

        <li className="about-item">
          <a href="" className="about-link">LINKEDIN</a>
        </li>

        <li className="about-item">
          <a href="" className="about-link">Facebook</a>
        </li>

        <li className="about-item">
          <a href="" className="about-link">Instagram</a>
        </li>
      </ul>


      <div className="about-tool">
        <h3 className="tool-title">Tool belt:</h3>
        <div className="tools">
          <ul className="list-tools">
            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Javascript</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"> <FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Redux</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Next.js</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Bash</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Python</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Node.js</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Git</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />Express</span>
            </li>

            <li className="tool-item">
              <span className="tool-name"><FontAwesomeIcon icon={faPlay} style={{ margin: "0px 8px 2px 0", fontSize: "8px", opacity: "0.8" }} />React</span>
            </li>
          </ul>
        </div>
      </div>


      <div className="exp">
        <h3 className="exp-title">Experience:</h3>
        <div className="exp-box">
          <ul className="exp-list">
            <li className="exp-item">
              <span className="exp-desc">Fullstack Engineer - Codingal</span>
              <span className="exp-time">July 2021 - Current</span>
            </li>

            <li className="exp-item">
              <span className="exp-desc">Frontend/UI Engineer (intern) - Listiee</span>
              <span className="exp-time">Jan 2020 - June 2020</span>
            </li>


            <li className="exp-item">
              <span className="exp-desc">Fullstack Engineer (intern) - Maytree</span>
              <span className="exp-time">Oct 2019 - December 2019</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
