import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import Table from 'react-bootstrap/Table'

class WorkLog extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Table striped bordered hover>
                 <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Project</th>
                    <th>Description</th>
                    <th>Hourd spent</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Nagarjun</td>
                <td>GSSP</td>
                <td>Entry Level Program Analyst Trainee trained in java,spring boot and RESTful microservice</td>
                <td>6</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jamunaa</td>
                <td>AlM</td>
                <td>Program Analyst trained in java,spring boot , RESTful microservice and angular and splunk</td>
                <td>2</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Anandha</td>
                <td>CDE</td>
                <td>Entry Level System Engineer experienced in windows and linux OS and also in networking</td>
                <td>4</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Ragavan</td>
                <td>BSP</td>
                <td>Support Enginner but trained in windows and linux OS and also in networking</td>
                <td>5</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Raj</td>
                <td>LIC</td>
                <td>Entry Level Program Analyst Trainee trained in java,spring boot and RESTful microservice</td>
                <td>6</td>
                </tr>
                <tr>
                <td>6</td>
                <td>Anandha</td>
                <td>CDE</td>
                <td>Entry Level System Engineer experienced in windows and linux OS and also in networking</td>
                <td>4</td>
                </tr>
                <tr>
                <td>7</td>
                <td>Nagarjun</td>
                <td>GSSP</td>
                <td>Entry Level Program Analyst Trainee trained in java,spring boot and RESTful microservice</td>
                <td>6</td>
                </tr>
                <tr>
                <td>8</td>
                <td>Jayashree</td>
                <td>RDX</td>
                <td>Support Enginner but trained in windows and linux OS and also in networking</td>
                <td>5</td>
                </tr>
            </tbody>
            </Table>
            </div>
        )
    }
}

export default WorkLog
