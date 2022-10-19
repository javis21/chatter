import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import "./chat.css"
function Chat() {
    return (
        <Container >
            <Row>
                <Col md={4} className="nav__css"  >
                    
                    <Sidebar />
                </Col>
                <Col md={8} className="nav__css2" >
                    <MessageForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;
