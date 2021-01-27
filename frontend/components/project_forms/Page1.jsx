import React from 'react';
    
class Page1 extends React.Componet{
    
    render(){
        if(this.props.currentStep !==1){
            return null
        }

        return(
            <div>
            
                
            </div>
        )
    }
}