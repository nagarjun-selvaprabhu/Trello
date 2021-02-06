import React, { Component } from 'react'
import {NavigationBar} from './components/NavigationBar'
import {Cards} from './components/Cards'

class Home extends Component {

    render() {
        return (
            <div>
            <NavigationBar />
            <Cards />
            </div>
        )
    }
}



export default Home
