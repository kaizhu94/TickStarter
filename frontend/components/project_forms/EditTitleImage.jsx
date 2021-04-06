import React from 'react';

class EditTitleImage extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            showDropdown: false
        }
        this.handleFile = this.handleFile.bind(this);
        this.triggerOrNot = this.triggerOrNot.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
    }
    handleFile(e){
        
        const file = e.currentTarget.files[0];
        const fileReader =new FileReader();
        
        let formData = new FormData();
        formData.append('project[title_image]', file);
        this.props.updateTitleImage(file);
        this.props.updateProject(this.props.project.id, formData);
        
        if(file) fileReader.readAsDataURL(file);
    }

    deleteFile(){
        this.props.openModal('delete-file');
    }

    triggerOrNot(){
        let newState = !this.state.showDropdown;
        this.setState({showDropdown: newState})
    }
    render(){
        let photoUrl = this.props.project.title_image_url;
        
        return(
            <div className = 'image-right-conatiner'>     {
                    !photoUrl ? (
                        <div className = 'image-block'>
                            <img id="file" src={window.file} ></img>
                            <p>Select a file</p>
                            <input type='file' id='upload-image' onChange={this.handleFile}/> 
                        </div>
                    ):( 
                        <div className = 'image-block-2'>
                            <img src={photoUrl} id='upload-image'/>
                            <div className='buttons-container'>
                                <label htmlFor="upload-another-image" onMouseEnter={this.triggerOrNot} onMouseLeave={this.triggerOrNot} >
                                    {
                                        this.state.showDropdown ? (
                                            <div className = 'diff-image-dropdown'>
                                                <p>Upload a different image</p>
                                            </div>
                                    )
                                    : (
                                    null
                                    )
                                    }
                                    <i className="fas fa-upload"></i>
                                </label>
                                <input type='file' id='upload-another-image'onChange={this.handleFile} hidden/> 
                                <button type='button' onClick={this.deleteFile}><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    )
                }
        </div>
        )
    }
}

export default EditTitleImage;