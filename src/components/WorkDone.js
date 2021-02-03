import React, { Component } from 'react'


class WorkDone extends Component {
    
    render() {
        return (
            <div>
                <p>Belongs to the project {this.props.project}</p>
                <p>Total time spent is {this.props.hours} hours</p>
            </div>
        )
    }
}

export default WorkDone
