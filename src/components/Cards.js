import React,{Component} from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import WorkDone from './WorkDone.js'

const cardData = 
   [
    { name: 'Nagarjun',project:'GSSP', text: 'Entry Level Program Analyst Trainee trained in java,spring boot and RESTful microservice',hours:'6',access: false },
    { name: 'Jamunaa',project:'AlM', text: 'Program Analyst trained in java,spring boot , RESTful microservice and angular and splunk',hours:'2',access: false },
    { name: 'Anandha',project:'CDE', text: 'Entry Level System Engineer experienced in windows and linux OS and also in networking',hours:'4',access: false },
    { name: 'Ragavan',project:'BSP', text: 'Support Enginner but trained in windows and linux OS and also in networking',hours:'5',access: false },
    { name: 'Raj',project:'LIC', text: 'Entry Level Program Analyst Trainee trained in java,spring boot and RESTful microservice',hours:'8',access: false },
    { name: 'Praveen',project:'ALM', text: 'Program Analyst trained in java,spring boot , RESTful microservice and angular and splunk',hours:'2',access: false },
    { name: 'Hari',project:'CDE', text: 'Entry Level System Engineer experienced in windows and linux OS and also in networking',hours:'7',access: false },
    { name: 'Jayashree',project:'RDX', text: 'Support Enginner but trained in windows and linux OS and also in networking',hours:'8',access: false },
    { name: 'Subu',project:'OMG', text: 'Entry Level Program Analyst Trainee trained in java,spring boot and RESTful microservice',hours:'4',access: false },
    { name: 'Ragu',project:'SSS', text: 'Program Analyst trained in java,spring boot , RESTful microservice and angular and splunk',hours:'5',access: false }
  ];


export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access: false,
    };
    console.log('[Cards.js] constructor');
  };
  
  handlerFunc = (items,index) => {
    console.log("Card clicked");
    //  items.cardData.access:  true;
    this.setState({ access: true });   
    };

  render() {
    return (
      <Container fluid="md">
       <Row>
      {cardData.map((item,index)=>{
        return (       
        <Card key={index} style={{ width: '18rem',paddingLeft: '50px',paddingBottom: '100px',margin: '1em',display: 'flex',flexDirection: 'row' }}
         className="col-3"  onClick={this.handlerFunc}>
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             {item.text}
            </Card.Text>
            {this.state.access ? <WorkDone hours={item.hours} project={item.project}/> : null}
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
