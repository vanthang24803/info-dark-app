import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import "./project.css"
const Project = () => {
  return (
    <div>
      <h1 className='title-project'>Project 📦️</h1>

      <div className="element">
        <div className="box">
          <h3 className="title-box">NPM packages</h3>
          <span className="box-desc">My published NPM packages</span>
        </div>

        <div className="box-items">
          <ul className="list-items">
            <li className="item">
              <a href="" className="item-link">meta-fetcher <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">A simple Node based metadata scrapper to fetch metadata from various websites and return it in JSON format.</span>
            </li>

            <li className="item">
              <a href="" className="item-link">spotify-mini <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Tiny Spotify client for node.js exposing some useful methods to get your latest Spotify status</span>
            </li>

            <li className="item">
              <a href="" className="item-link">sportify-rtoken-cli <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Generate Spotify refresh token right from terminal</span>
            </li>

            <li className="item">
              <a href="" className="item-link">page-scrapper <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Node.js bassed scrapper that pulls out all links and images of a given site.</span>
            </li>

            <li className="item">
              <a href="" className="item-link">read-git-user <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Reads the username and email from `.gitconfig` and returns it as json object</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="element">
        <div className="box">
          <h3 className="title-box">APIs</h3>
          <span className="box-desc">APIs I have built and maintain</span>
        </div>

        <div className="box-items">
          <ul className="list-items">
            <li className="item">
              <a href="" className="item-link">Animechan quotes API <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">A rest API for fetching anime quotes</span>
            </li>
          </ul>
        </div>
      </div>


      <div className="element">
        <div className="box">
          <h3 className="title-box">Web apps</h3>
          <span className="box-desc">Web apps I have built or currently working on</span>
        </div>

        <div className="box-items">
          <ul className="list-items">
            <li className="item">
              <a href="" className="item-link">HN Redesign <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">A minimal hackernews client with a clean design</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="element">
        <div className="box">
          <h3 className="title-box">Open source contributions</h3>
          <span className="box-desc">Open source projects I have contributed to so far</span>
        </div>

        <div className="box-items">
          <ul className="list-items">
            <li className="item">
              <a href="" className="item-link">meta-fetcher <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">A simple Node based metadata scrapper to fetch metadata from various websites and return it in JSON format.</span>
            </li>

            <li className="item">
              <a href="" className="item-link">spotify-mini <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Tiny Spotify client for node.js exposing some useful methods to get your latest Spotify status</span>
            </li>

            <li className="item">
              <a href="" className="item-link">sportify-rtoken-cli <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Generate Spotify refresh token right from terminal</span>
            </li>

            <li className="item">
              <a href="" className="item-link">page-scrapper <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Node.js bassed scrapper that pulls out all links and images of a given site.</span>
            </li>

            <li className="item">
              <a href="" className="item-link">read-git-user <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Reads the username and email from `.gitconfig` and returns it as json object</span>
            </li>

            <li className="item">
              <a href="" className="item-link">read-git-user <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px", fontSize: "12px", marginBottom: '1px', color: "#6b7280" }} /></a>
              <span className="item-desc">Reads the username and email from `.gitconfig` and returns it as json object</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
