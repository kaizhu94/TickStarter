import React from 'react';
import { Link } from 'react-router-dom'
import SectionBar from '../section_bar/SectionBar'

class Footer extends React.Component{
    render(){
        return(
            <div className='footer-container'>
                <SectionBar />
                <div className='footer-block'>
                    <div className='links'>
                        <div className='footer-about'>
                            <h3>In-site Routes</h3>
                            <Link to='/'>Home Page</Link>
                            {
                                this.props.isLogged ? (null):(
                                    <div>
                                        <Link to='/signup'>Sign Up</Link>
                                        <Link to='/login'>Log In</Link>
                                    </div>
                                )
                            }
                        
                        </div>
                        <div className='footer-support'>
                            <h3>About Me</h3>
                            <a target="_blank" href="https://docs.google.com/document/d/1odMqEh-eN2mR7ASCe2q64yiymLQDLSf_cBw2z0OTylw/edit#">Resume</a>
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
}

export default Footer;