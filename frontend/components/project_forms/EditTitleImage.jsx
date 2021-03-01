import React from 'react';

class EditTitleImage extends React.Component{
    constructor(props){
        super(props);
        debugger
        this.state= {
            // project: props.project,
            // photo: null,
            // photoUrl: props.project.photoUrl[0]
            showDropdown: false
        }
        this.handleFile = this.handleFile.bind(this);
        this.triggerOrNot = this.triggerOrNot.bind(this);
    }
    handleFile(e){
        debugger
        const file = e.currentTarget.files[0];
        const fileReader =new FileReader();
        debugger
        // fileReader.onloadend = () =>{
        //     // let photofiles = this.state.photo;
        //     // photofiles[0] = file;
        //     // let photoURLArray = this.state.photoURL;
        //     // photoURLArray[0] = fileReader.result
        //     this.setState({ photo: file,
        //                     photoUrl: fileReader.result,
        //                 })
        // }
        let formData = new FormData();
        formData.append('project[photo]', file);
        debugger
        this.props.updateProject(this.props.project.id, formData);
        
        if(file) fileReader.readAsDataURL(file);
    }

    triggerOrNot(){
        let newState = !this.state.showDropdown;
        this.setState({showDropdown: newState})
    }
    render(){
        let photoUrl = this.props.project.photoUrl[0];
        debugger
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
                                <button><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    )
                }
        </div>
        )
    }
}

export default EditTitleImage;