import React from 'react';
import { Link } from 'react-router-dom'
import SectionBar from '../section_bar/SectionBar'

const Footer =() =>{
    return(
        <div className='footer-container'>
            <SectionBar />
            <div className='footer-block'>
                <div className='links'>
                    <div className='footer-about'>
                        <h3>In-site Routes</h3>
                        <Link to='/'>Home Page</Link>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/login'>Log In</Link>
                       
                    </div>
                    <div className='footer-support'>
                        <h3>About Me</h3>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Resume</a>
                        

                    </div>
                    <div className='footer-more'>
                        <h3>MORE FROM TICKSTARTER</h3>
                        <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki">WIKI</a>
                        <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki/backend-routes">Backend Routes</a>
                        <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki/frontend-routes">Frontend Routes</a>
                        <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki/mvp-list">MVP List</a>
                        <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki/schema">Schema</a>
                    </div>
                </div>
                <p><img id="icon" src={window.icon} ></img> Tickstarter, PBC @2021</p>
            </div>
        </div>
    )
}

export default Footer;