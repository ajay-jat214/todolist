import React from 'react';
import { Redirect } from 'react-router-dom';
import {Toaster,Intent} from '@blueprintjs/core';
//import {app} from './base';
import fire from './base';
import {ReactReduxContext} from 'react-redux';

class Signin extends React.Component {
  constructor(props){
    super(props);
    this.authWithEmailPassword=this.authWithEmailPassword.bind(this);
    this.signUp=this.signUp.bind(this);

  }




  authWithEmailPassword=(event)=>{
    event.preventDefault();
    
    const email=this.props.email;
    const password=this.props.password;
    console.log(email,password)
    fire.auth().signInWithEmailAndPassword(email,password)
    .then(u=>console.log(u))
    .catch(err=>console.log(err))

  }

  signUp=(e)=>{
   e.preventDefault();
   fire.auth().createUserWithEmailAndPassword(this.props.email,this.props.password)
   .then(u=>console.log(u))
   .catch(err=>console.log(err))
  }
 
  render(){
  

    return(

       <article className="br2 ba dark-gray b--black-10 mv8 w-100 w-50-m w-25-l mw10 center shadow-5">
       <main className="pa4 black-80">
    <div className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend  className="f4 fw6 ph0 mh0">Sign In</legend>
  
        <Toaster ref={elem=>{this.Toaster=elem}} />
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={this.props.emailChange}
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"
          onChange={this.props.passwordChange}
           />
          
        </div>
  
      </fieldset>
      <div className="">
        <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" 
        type="submit" 
        value="Sign in" 
        onClick={(event)=>{this.authWithEmailPassword(event)  }}
        />
      </div>

      <div className="">
        <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" 
        type="submit" 
        value="Sign Up" 
        onClick={(event)=>{this.signUp(event)}}
        />
      </div>
      <div>
      <icons />
      </div>
    </div>

  </main>
  </article>

       );
  
  }
 }

 export default Signin;