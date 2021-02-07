import React, { Component  } from 'react'
import NavigationBar from './NavigationBar'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

class WorkLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        workLog: [],
        };
        console.log('[WorkLog.js] constructor');
      };

      componentDidMount() {
        axios.get(`http://localhost:8765/card-service/list`)
          .then(res => {  
            console.log(res.data);
            const workLog = res.data;
            this.setState({ workLog });
          })
          console.log(this.state);
      }

    render() {

        return (
            <div>
            <NavigationBar />
            <div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>Project</th>
                        <th>Description</th>
                        <th>hours spent</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.workLog.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.indexNumber}</td>
                                    <td>{data.name}</td>
                                    <td>{data.project}</td>
                                    <td>{data.text}</td>
                                    <td>{data.hours}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </div>
        </div>
    );
}
}


export default WorkLog
