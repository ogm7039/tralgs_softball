import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headings from "./Headings";
import { Container, Row, Col, Navbar } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class Tickets extends Component
{
    render()
    {
        return(
            <Container>
                <Headings />
                <Row>
                    <Col xs="1"/>
                    <Col className="White">
                        <h1> Tickets </h1>
                        <br />
                        They're free
                        <br />.<br />.<br />
                        Literally just show up.
                        <br />.<br />
                        No one can stop you.
                        <br />.<br />
                        Cobbs Hill Park
                        <br />.<br />.<br />
                        Thurday Nights
                    </Col>
                    <Col xs="1"/>
                </Row>
                <Row className="Back">
                    <Col>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Tickets;