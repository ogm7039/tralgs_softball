import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headings from "./Headings";
import { Container, Row, Col, Navbar } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class PlayerRow extends Component
{
    render()
    {
        return(
            <Row className={this.props.shade}>
                <Col xs="2"> {this.props.player[1]} </Col>
                <Col xs="1"> {this.props.player[2]} </Col>
                <Col xs="2"> {this.props.player[3]} </Col>
                <Col xs="1"> {this.props.player[4]} </Col>
                <Col xs="1"> {this.props.player[5]}' {this.props.player[6]}'' </Col>
                <Col xs="1"> {this.props.player[7]} </Col>
                <Col xs="2"> {this.props.player[8]} </Col>
                <Col xs="2"> {this.props.player[9]} </Col>
            </Row>
        )
    }
}
export default PlayerRow;
