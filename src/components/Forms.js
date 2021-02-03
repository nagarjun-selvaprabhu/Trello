import React, { Component } from 'react'
import './Forms.css'

var format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      project: '',
      text: '',
      errormessage: '',
      timeOfWork: '',
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
        if (nam === "name") {
          if (val !=="" && Number(val)) {
            err = <strong>Your Name should not start with a number</strong>;
          }
        }
        if (nam === "name") {
          if (format.test(val)) {
            err = <strong>Your Name should not contains special characters</strong>;
          }
        }
        this.setState({errormessage: err});
    this.setState({[nam]: val});
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };



  render() {
    return (
      <div id="work" style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
      <div id="login">
      <form onSubmit={this.submitHandler}>
      {/* <h1>Trello</h1> */}
      <h3>Enter the following details to Add your work done</h3>
      <p>Enter your name:</p>
      <input
        type='text'
        name='name'
        autoComplete='off'
        onChange={this.myChangeHandler}
      />
      <p>Enter your project:</p>
      <select onChange={this.myChangeHandler} name="project" className="select-dropdown">
          <option value="GSSP">GSSP</option>
          <option value="CDE">CDE</option>
           <option value="ALM">ALM</option>
       </select>
       <br></br>
       <br></br>
       <p>Enter your project description:</p>
      <input
        type='text'
        name='text'
        autoComplete='off'
        onChange={this.myChangeHandler}
      />
      <p>Time Till Work Done:</p>
      <select onChange={this.myChangeHandler} name="timeOfWork" className="select-dropdown">
          <option value="0 Hour">9 AM</option>
          <option value="1 Hour">10 AM</option>
          <option value="2 Hour">11 AM</option>
          <option value="3 Hour">12 Noon</option>
          <option value="4 Hour">1 PM</option>
          <option value="5 Hour">2 PM</option>
          <option value="6 Hour">3 PM</option>
          <option value="7 Hour">4 PM</option>
          <option value="8 Hour">5 PM</option>
          <option value="9 Hour">6 PM</option>
       </select>
       <br></br>
       <br></br>
       {this.state.errormessage}
      <input type='submit' />
      </form> 
      </div>
      </div>
    );
  }
}

export default Forms
