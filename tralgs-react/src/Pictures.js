import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headings from "./Headings";
import { Container, Row, Col, Navbar } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class Pictures extends Component
{
    render()
    {
        return(
            <Container>
                <Headings />
                <Row>
                    <Col xs="1"/>
                    <Col className="White">
                        <h1> Pictures </h1>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
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
export default Pictures;