import React, { Component } from "react";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import ButtonAppBar from "../components/ButtonAppBar";
import { Card, ListGroup } from "react-bootstrap";
import "../App.css";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
// import Image from './image.jpg';
import Image from './image.png';
import { backgroundImage } from "react-image-and-background-image-fade";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      endpoint: "http://127.0.0.1:4000/", // server endpoint
    };
  }

   
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = io("http://127.0.0.1:4000", { transports: ["websocket"] });
    socket.on("Data", (response) => this.setState({ response: response }));
  }

  render() {
    return (
    
      
      // <div style={{ backgroundColor: "#e6e6ff" }}> 
      
       <div  style={{backgroundImage: 'url(' + Image + ')',backgroundSize:'auto'}}>,
        
        
        {/* <ButtonAppBar /> */}

        <div className="body">
          
          {/* the parking cards div  */}

          <div className="cards left">
            {/* <Card className="empty-card">
              <ListGroup variant="flush">
                <ListGroup.Item>Slot 1</ListGroup.Item>
              </ListGroup>
            </Card> */}

            
            {this.state.response.field1==1.00?  (
              <Card className="occupied-card">
                <ListGroup variant="flush">
                  <ListGroup.Item>Slot 1</ListGroup.Item>
                </ListGroup>
              </Card>
            )
            :(   
              <Card className="empty-card">
            <ListGroup variant="flush">
              <ListGroup.Item>Slot 1</ListGroup.Item>
            </ListGroup>
          </Card>)}
              

             {this.state.response.field2==1.00? (
              <Card className="occupied-card">
                <ListGroup variant="flush">
                  <ListGroup.Item>Slot 2</ListGroup.Item>
                </ListGroup>
              </Card>
            )
            :(
            <Card className="empty-card">
              <ListGroup variant="flush">
                <ListGroup.Item>Slot 2</ListGroup.Item>
              </ListGroup>
            </Card>
             )}
            

            {/* {!this.state.response.field2 &&(
            <Card className="empty-card">
              <ListGroup variant="flush">
                <ListGroup.Item>Slot 2</ListGroup.Item>
              </ListGroup>
            </Card>
            )} */}
            

          </div>

          <div className="cards right">
            {this.state.response.field3==1.00? (
              <Link to="/form">
                <Card className="occupied-card">
                  <ListGroup variant="flush">
                    <ListGroup.Item>Slot 3</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Link>
            )
            :(
              <Card className="empty-card">
                <ListGroup variant="flush">
                  <ListGroup.Item>Slot 3</ListGroup.Item>
                </ListGroup>
              </Card>
            )}

            
            <Card className="empty-card">
              <ListGroup variant="flush">
                <ListGroup.Item>Slot 4</ListGroup.Item>
              </ListGroup>
            </Card>          
            {/* <Card className="empty-card">
              <ListGroup variant="flush">
                <ListGroup.Item>Slot 6</ListGroup.Item>
              </ListGroup>
            </Card>  */}
           
          </div>
        </div>

        {/* <div style={{ position: "fixed", bottom: "0"}}> */}
        <LabelBottomNavigation />

        {/* </div> */}
       </div>
      //  </div>
    );
  }
}

export default HomePage;
