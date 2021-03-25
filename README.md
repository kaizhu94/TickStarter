# README

# TickStarter
Tickstarter, a Kickstarter clone, is a platform application that allows individuals to crowdsource funding from other users for ideas. A user can share projects, explore through projects, and support other users' projects. This project is build by Kaihua Zhu.

# [Live Demo](https://tickstarter.herokuapp.com)

# Main Features
  * Sign Up, Log In
    * Users are able to log in to an existing account, or use the guest credential to log in
    * Users can sign up for a new account   
    <img width='300' height='300' src='https://user-images.githubusercontent.com/71399999/112486963-be089400-8d52-11eb-91f8-da931c95769e.gif' >
    
  * Project Editing
    * Project founder can edit his own projects                           
    ![edit1_gif](https://user-images.githubusercontent.com/71399999/112494113-222e5680-8d59-11eb-9e61-3b3be93d2a66.gif)
    ![edit2_gif](https://user-images.githubusercontent.com/71399999/112494118-22c6ed00-8d59-11eb-9011-698bfecc6c81.gif)
    
  * Searching Projects                          
    ![search_gif](https://user-images.githubusercontent.com/71399999/112495683-7ede4100-8d5a-11eb-9804-8a0d571c9820.gif)
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
  * Implement Modals For Invalid Login, Delete Reweards, Delete Items, And Unsaved Changes                     
    <img width='300' height='300' src='https://user-images.githubusercontent.com/71399999/112489070-7a168e80-8d54-11eb-834e-1bf13ad139e0.gif' >
    
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
