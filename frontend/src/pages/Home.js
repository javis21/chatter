import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

function Home() {
    return (
        <Row>
            <Col md={6} className="class__new d-flex flex-direction-column align-items-center justify-content-center ">
                <div>
                    <h1>Have a problem</h1>
                    <p>Chatter helps you find solution to your problem from our active community</p>
                    <LinkContainer to="/chat">
                        <Button variant="success">
                            Get Help <i className="fas fa-comments home-message-icon"></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                    <h1>Get help</h1>
                    <p>help and Get helped  , Chatter the place to solve all your problems</p>
                  
                </div>
                
            </Col>
        </Row>
    );
}

export default Home;
