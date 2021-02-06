import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css'

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-dark">
        <Navbar.Brand href="/home">Trello</Navbar.Brand>
        <Nav className="justify-content-end d-flex">
          <Nav.Link style={{color: 'white'}} href="/home">Homepage</Nav.Link>
          <Nav.Link style={{color: 'white'}} href="/form">Add New Person's Details</Nav.Link>
          <Nav.Link className="d-flex justify-content-end text-white" style={{color: 'white'}} href="/">Logout</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}  
        </Nav>
      </Navbar>
    )
  }
}

export default NavigationBar

