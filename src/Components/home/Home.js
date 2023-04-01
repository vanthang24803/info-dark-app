import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import "./home.css"


const Header = () => {

    return (
        <section className='home'>
            <div className="home-info">
                <div className="img-home">
                    <img src="https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/338811183_744515227275476_4602096052407324602_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zd9UgzeQMQsAX_HxARY&_nc_ht=scontent.fhph1-3.fna&oh=00_AfDKQaY_bjf3RNPDbiVSJMYRJC-DORtHrw3aMT9oCm1dzw&oe=642AC247" alt="" />
                </div>
                <div className="info">
                    <h3 className="name">May Nguyen</h3>
                    <ul className="social">
                        <li className='social-item'>
                            <a href="" className='link'>Github<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px" , fontSize : "12px" , marginBottom: '1px'} } /></a>
                        </li>
                        <li className='social-item'>
                            <a href="" className='link'>Linked<FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: "6px" , fontSize : "12px" , marginBottom: '1px'}} /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="home-desc">
                <p className="desc-1">I am a software engineer who is a huge advocate of free opensource and privacy first software. Terminal and vim poweruser.</p>
                <p className="desc">Web developer by day and avid low level coder and learner by night. Most of my personal projects are just solutions to issues I come accross.</p>
            </div>

            <div className="home-title">
                <a className="title-icon" style={{ padding: "0 10px 0 0" }}>
                    <FontAwesomeIcon icon={faSpotify} style={{ color: "#1dd560", }} />
                </a>
                <p className="title">Now listening to :  <a href="https://www.youtube.com/watch?v=0Uhh62MUEic" className='title-link'>宇多田ヒカル『One Last Kiss』</a></p>
            </div>

            <div className="home-post">
                <h2 className="title-post">Latest posts: </h2>
                <ul className="post-list">
                    <li className="post-item">
                        <a className='post-link' href="">Domain Drama: My Hosting Hostage Situation!</a>
                        <span className="post-time">March 24,2023</span>
                    </li>

                    <li className="post-item">
                        <a className='post-link' href="">How to Upgrade Linux Kernel to Latest Version in Ubuntu</a>
                        <span className="post-time">October 15, 2022</span>
                    </li>

                    <li className="post-item">
                        <a className='post-link' href="">How to Factory Reset Gnome Desktop</a>
                        <span className="post-time">September 28, 2022</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Header
