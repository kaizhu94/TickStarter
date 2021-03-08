import React from 'react';

class NewRewrdForm extends React.Component{
    render(){
        return(
            <div className = 'reward-form-section'>
                <div className = 'reward-form-block'>
                    <div className = 'reward-form-container'>
                        <div>
                            <h3>Add a reward</h3>
                            <p>Offer tangible or intangible things that bring backers closer to your project.</p>
                        </div>
                        <div>
                            <h3>Title</h3>
                            <input type="text" id="reward-title" placeholder='single-limit-edition'/>
                        </div>
                        <div>
                            <h3>Description</h3>
                            <textarea id="reward-description"  placeholder='Get an early copy - hot off the presses!'></textarea>
                        </div>
                    </div>
                </div>
                <div className = 'preview'>
                    <h3>
                        Reward preview
                    </h3>
                    <p>Get a glimpse of how this reward will look on your project page.</p>
                </div>
            </div>
        )
    }
}

export default NewRewrdForm;