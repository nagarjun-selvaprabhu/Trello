import React, { Component } from 'react'
import './Forms.css'
import axios from 'axios'

var format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

const projectData = [
  { value: 'GSSP', name: 'GSSP' },
  { value: 'ALM', name: 'ALM' },
  { value: 'CDE', name: 'CDE' }           
];

const TimeData = [
  { value: "0 Hour", name: '9 AM' },
  { value: "1 Hour", name: '10 AM' },
  { value: "2 Hour", name: '11 AM' },
  { value: "3 Hour", name: '12 Noon' },          
  { value: "4 Hour", name: '1 PM' },
  { value: "5 Hour", name: '2 PM' },
  { value: "6 Hour", name: '3 PM' },
  { value: "7 Hour", name: '4 PM' },
  { value: "8 Hour", name: '5 PM' },
  { value: "9 Hour", name: '6 PM' },
];

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      project: '',
      text: '',
      errormessage: '',
      hours: '',
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
    const name = this.state.name;
    const project = this.state.project;
    const text = this.state.text;
    const hours = this.state.hours;

    axios.post(`http://localhost:8765/form-service/savecard`, { name,project,text,hours })
    .then(res => {
      // this.setState({ name: this.name,project:this.project,text:this.text,timeOfWork:this.timeOfWork });
      console.log(res);
      console.log(res.data);
    }).catch(err=>
      alert('form serivce is down'))
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
       <select name="project" value={projectData.value} onChange={this.myChangeHandler} className="select-dropdown">
         {projectData.map((e, key) => {
         return <option key={key} value={e.value}>{e.name}</option>;
         })}
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
      <select name="hours" value={TimeData.value} onChange={this.myChangeHandler} className="select-dropdown">
         {TimeData.map((e, key) => {
         return <option key={key} value={e.value}>{e.name}</option>;
         })}
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
