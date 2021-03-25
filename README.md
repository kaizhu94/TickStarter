# README

# TickStarter
Tickstarter, a Kickstarter clone, is a platform application that allows individuals to crowdsource funding from other users for ideas. A user can share projects, explore through projects, and support other users' projects. This project is build by Kaihua Zhu.

# [Live Demo](https://tickstarter.herokuapp.com)

# Main Features
  * Sign Up, Log In
    * Users are able to log in to an existing account, or use the guest credential to log in
    * Users can sign up for a new account   
    <img width='300' height='300' src='https://user-images.githubusercontent.com/71399999/112486963-be089400-8d52-11eb-91f8-da931c95769e.gif' >
# Technologies Used
  * Backend: 
    * Ruby on rails
  * Database
    * Postgre SQL
  * Frontend
    * Javascript
    * CSS
    * React
    * Redux
  
  
# Challenges
  * Implement A Modal For Session Errors                        
    <img width='300' height='300' src='https://github.com/kaizhu94/TickStarter/blob/main/app/assets/readme/modal.PNG' >
    
  * Implement A Multipage Form For Creating A Project                                   
    <img width='300' height='300' src='https://user-images.githubusercontent.com/71399999/112488287-c90ff400-8d53-11eb-9e53-953573c68317.gif' >
  
# Code Snippets
* Idea For Showing Modal Based On Different Cases
```
switch(modal){
        case 'errors':
            const errorsArr = errors.map((error,i) =>{
                return (
                    <li key={`errors-${i}`} id='session-error-item'>{error}</li>
                )
            })
            return ( 
            <div className='modal-background' onClick={closeModal}>
                        <ul id='session-error-ul'>
                            {errorsArr}
                        </ul>
            </div> 
            );
        default:
            return null;
    }
```

# Features Coming Soon
  * Project Editing
  * Project Deleting
  * Project Show
  * Porject Backing
  * Project Searching
  * Likes or Dislike Porject
