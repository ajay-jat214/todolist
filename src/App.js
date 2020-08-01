import React,{Component} from 'react';
import Signin from './Signin';
import Particles from 'react-particles-js';
import './App.css';
import Todolist from './Todolist';
import fire from './base';
import { connect } from 'react-redux';
import { setEmail ,setPassword} from './Redux/actions';

const mapStateToProps = state => {
  return {
    email: state.setEmail.email,
    password:state.setPassword.pasword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (event)=> dispatch( setEmail(event.target.value)),
    onPasswordChange: (event)=> dispatch(setPassword(event.target.value))
  }
}

class App extends Component{

  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      user:{}
    }
  }


  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
        this.setState({user})
      else
        this.setState({user:null})
    })
  }


  
  componentWillUnmount(){
    this.removeAuthListener();
  }


logOut(){
  fire.auth().signOut();
}

  onEmailChange=(event)=>{
    this.setState({email:event.target.value})
  }

  onPasswordChange=(event)=>{
    this.setState({password:event.target.value})
  }

  render()
{
return (

<div className="App">
 <Particles className='particles'
   params={
            {
          particles: {
                number:{
                value:250,
                density:{
                enable:true,
                value_area:800
              }
              }
            }
           ,
          repulse: {
          distance: 200,
          duration: 0.4
          },
 
          onhover: {
          enable: true,
          mode:' repulse'
          },
            interactivity: {
          events: {
          onhover: {
          enable: true,
          mode: 'repulse'
            }
          }
        }
     }
   }
        
  />

            { 
              this.state.user
                    ?<div className="center">
                    <button onClick={this.logOut}>Sign Out</button>
                       <Todolist/>
                     </div>
                    :
                    

                      <div>
                      <Signin 
                      emailChange={this.onEmailChange}
                      passwordChange={this.onPasswordChange}
                      email={this.state.email}
                      password={this.state.password}
                      /> 
                      </div>
    
                                    
             }
</div>
  );
}
  }


export default connect(mapStateToProps,mapDispatchToProps)(App);
