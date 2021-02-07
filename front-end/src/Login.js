import React, { Component } from 'react'
import './Login.css';
import axios from 'axios'

var format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          errormessage: '',
          wrong: '',
          access: false,
        };
      }

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "password" || nam==="username") {
          if (val !=="" && Number(val)) {
            err = <strong>Your field should not start with a number</strong>;
          }
        }
        if (nam === "password" || nam==="username") {
          if (format.test(val)) {
            err = <strong>Your field should not contains special characters</strong>;
          }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
      }

      submitHandler = (event) => {
        event.preventDefault();
        const userName = this.state.username;
        const passWord = this.state.password;
    
        axios.post(`http://localhost:8765/login-auth-service/login`, { userName,passWord })
          .then(res => {
            if(res.data){
            this.setState({ access: true });
            }
            else{
              this.setState({ wrong: 'Username & Password is wrong'})
            }
            console.log(res);
            console.log(res.data);
          }).catch(alert('Login microservice is down'))
      };


      componentDidUpdate(prevProps, prevState, snapshot) {
        const { history } = this.props;
        if(this.state.access){
            history.push('/home');
        }
    }


      render() {
        return (
          
      <div id="work" style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden',backgroundColor:  '#5d8fc9'}}>
        <div id="login" style={{backgroundColor:  '#5d8fc9'}}>
          <form onSubmit={this.submitHandler}>
          <h1>Hello Welcome to Trello</h1>
          <p>Your Peronal work done application</p>
          <p>Enter your username:</p>
          <input
            type='text'
            name='username'
            autoComplete='off'
            onChange={this.myChangeHandler}
          />
          <p>Enter your passwords:</p>
          <input
            type='password'
            name='password'
            autoComplete='off'
            onChange={this.myChangeHandler}
          />
          <br></br>
          {this.state.errormessage}
          <input type='submit' id="button" value="Log in"/>
        <strong>{this.state.wrong}</strong>
          </form>
         </div>
       </div>
        );
      }
}

export default Login
