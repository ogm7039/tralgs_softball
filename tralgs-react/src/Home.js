import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headings from "./Headings";
import { Container, Row, Col, Navbar } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class Home extends Component
{
    render()
    {
        return(
            <Container>
                <Headings />
                HOME
            </Container>
        )
    }
}
export default Home;
