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
                <Col> {this.props.game[3]} </Col>
                <Col> {this.props.game[1]} </Col>
                <Col> {this.props.game[2]} </Col>
                <Col> {this.props.game[4]} </Col>
                <Col> {this.props.game[5]} </Col>
            </Row>
        )
    }
}
export default PlayerRow;