import React,{Component} from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import WorkDone from './WorkDone.js'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      access: false,
    };
    console.log('[Cards.js] constructor');
  };
  
  handlerFunc = (items,index) => {
    console.log("Card clicked");
    //  items.cardData.access:  true;
    this.setState({ access: true });   
    };

    componentDidMount() {
      axios.get(`http://localhost:8765/card-service/card`)
        .then(res => {  
          console.log(res.data);
          const cardData = res.data;
          this.setState({ cardData });
          
        })
    }

  render() {
    return (
      <Container fluid="md">
       <Row>
      {this.state.cardData.map((item,index)=>{
        return (   
          
        <Card key={index} style={{ width: '18rem',paddingLeft: '50px',paddingBottom: '100px',margin: '1em',display: 'flex',flexDirection: 'row' }}
         className="col-3"  onClick={this.handlerFunc}>
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             {item.text}
            </Card.Text>
            {this.state.access ? <WorkDone hours={item.hours} project={item.project}/> : null}
            <Button variant="primary" href='/work'>Work Log</Button>
          </Card.Body>    
        </Card>
        )
      })}

        </Row>
        </Container>
    )
  }
}

export default Cards
