import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
class App extends Component
 {   constructor()
  {
    super();
    this.state={
     username:"",
     password:""
    }
    this.handleusername=this.handleusername.bind(this);
    this.handlepassword=this.handlepassword.bind(this);
  }
  handleusername=(event)=>
  {   console.log(event.target.value);
    this.setState({username:event.target.value});
  }
  handlepassword=(event)=>
  {
    this.setState({password:event.target.value});
  }
  check=()=>
  { 
    var c=this.state.username;
    var d="@Qwikcilver.com";
    var s=c.substring(c.length-15,c.length);
    if(d.equalsIgnoreCase(s))
    alert("Sucessfull login");
    else 
    alert("Username or passWord not matching");
    
  }
   render()
 {

  return (
         <div className="App">
           <h1>Login form</h1>
           <p>Enter the username</p>
            <input type="text" onChange={this.handleusername}/><br>
            </br>
            <p>Enter the password</p>
            <input type="text" onChange={this.takeinput}/> <br>
            </br>
            <button onClick={this.check} className="button">SUBMIT</button>
         </div>
  );
   //  return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I\'m a React App !!!'));
  }
}
  export default App;
