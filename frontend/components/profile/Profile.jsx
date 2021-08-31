import React from 'react'
import { withRouter } from 'react-router-dom';


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDropdown:false
        }
        this.triggerOrNot = this.triggerOrNot.bind(this);
        this.handleLogOut =this.handleLogOut.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    triggerOrNot(e){
        let newState = !this.state.showDropdown;
        this.setState({showDropdown: newState})
    }
    
    handleLogOut(e){
        e.preventDefault();
        this.props.logout();
    }

    redirect(proejctId){
        this.props.history.push(`/projects/${proejctId}/dashboard`)
    }

    render(){
        
        // if(!this.props.createdProjects){
        //     return null;
        // }
        
        let createdProjects='';
        if(this.props.createdProjects){
            createdProjects = Object.values(this.props.createdProjects).map((project, index)=>{
                return (
                    <div key = {index} className='created-proejct-ele'>
                        {
                            project.title_image? (
                                <img src={project.title_image} alt="project-img" onClick={()=>this.redirect(project.id)}/>
                            ):(
                                <img src={window.blank} alt="project-img" onClick={()=>this.redirect(project.id)}/>
                            )
                        }
                        {
                            project.project_name? (
                                <p onClick={()=>this.redirect(project.id)}>{project.project_name}</p>
                            ):(
                                <p onClick={()=>this.redirect(project.id)}>{`${project.category_name} project`}</p>
                            )
                        }
                    </div>
                )
            })
        }
        return (
            <div className='profile'>
               
                <button  onFocus={this.triggerOrNot} onBlur={this.triggerOrNot} id='profile-button'>
                    <img id="earth" src={window.earth} ></img>
                {
                    this.state.showDropdown
                        ? (
                            <div className='profile-dropdown'>
                                <div className='profile-top'>
                                    <div className = 'created-projects'>
                                        <h2 className='created-projects-top'>CREATED PROJECTS</h2>
                                        {createdProjects}
                                    </div>
                                </div>
                                <div className='logout-block'>
                                    <p onClick={this.handleLogOut} id='logout'>Log out</p>
                                </div>
                            </div>
                    ) : (null)
                }
                </button>
            </div>
        )
    }
}

export default withRouter(Profile);