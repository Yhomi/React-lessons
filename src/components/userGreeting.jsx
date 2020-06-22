import React,{Component} from 'react';

class UserGreeting extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
    }
    render(){
       // Method 1
        // if(this.state.isLoggedIn){
        //     return <h1>Welcome Back Yhomi</h1>
        // }else{
        //     return(
        //         <h1>Welcome Guest</h1> 
        //     )
        // }

        // Method 2
        // let message
        // if(this.state.isLoggedIn){
        //     message= <h1>Welcome Back Yhomi</h1>
        // }else{
        //     message= <h1>Welcome Guest</h1> 
        // }

        // return(
        //     <div>
        //         {/* <h1>Welcome Back Yhomi</h1>
        //         <h1>Welcome Guest</h1> */}
        //     {message}                                   
        //     </div>
        // )

        // Method 3
        // return(
        //     this.state.isLoggedIn ?
        //     <h1>Welcome Back Yhomi</h1> :
        //     <h1>Welcome Guest</h1> 
        // )

        // Method 4: false displays nothing
        return this.state.isLoggedIn && <h1>Welcome Back Yhomi</h1>

    }
}

export default UserGreeting