import React from 'react';

import SectionBar from '../section_bar/SectionBar'

const Footer =() =>{
    return(
        <div className='footer-container'>
            <SectionBar />
            <div className='footer-block'>
                <div className='links'>
                    <div className='footer-about'>
                        <h3>About</h3>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">About us</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Our charter</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Stats
    </a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Press</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Jobs</a>
                    </div>
                    <div className='footer-support'>
                        <h3>About</h3>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Help Center</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Our Rules</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Creator Handbook</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Patrons</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Brand assets</a>

                    </div>
                    <div className='footer-more'>
                        <h3>MORE FROM KICKSTARTER</h3>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Newsletters</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Kickstarter Magazine</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">The Creative Independent</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Mobile apps</a>
                        <a target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Research</a>
                    </div>
                </div>
                <p><img id="icon" src={window.icon} ></img> Tickstarter, PBC @2021</p>
            </div>
        </div>
    )
}

export default Footer;