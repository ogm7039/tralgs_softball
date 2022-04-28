import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headings from "./Headings";
import PlayerRow from './PlayerRow';
import { Container, Row, Col, Navbar } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class Roster extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            players:
                [[0, 'Owen Manley', 'Ralb', 'Second Base', 8, 6, 0, 175, 'Rochester, NY', 'RIT'],
                [1, 'Kyle Wilson', 'Krag', 'Short Stop', 2, 6, 0, 180, 'Rochester, NY', 'UB'],
                [2, 'Brady Bodamer', 'Brad', 'First Base', 15, 6, 0, 225, 'Rochester, NY', 'HVAC'],
                [3, 'Zach Fichtner', 'Frank', 'Pitcher', 16, 6, 4, 180, 'Rochester, NY', 'CWRU'],
                [4, 'Jacob Logothetis', 'Cobes', 'Catcher', 13, 6, 0, 180, 'Rochester, NY', 'UB'],
                [5, 'John Zajac', 'Jag', 'Center Field', 19, 6, 0, 180, 'Rochester, NY', 'UB'],
                [6, 'Matt Gemerek', 'Gmerk', 'Third Base', 7, 6, 0, 180, 'Rochester, NY', 'WELD'],
                [7, 'Alex Nasca', 'Nascar', 'Right Field', 6, 6, 0, 180, 'Rochester, NY', 'RIT'],
                [8, 'Randy Schmitt', 'Rusty', 'Designated Hitter', 11, 6, 0, 180, 'Rochester, NY', 'MCC'],
                [9, 'Greg Manley', 'Gerg', 'Designated Hitter', 14, 6, 0, 180, 'Rochester, NY', 'BCC'],
                [10, 'Conor Palmer', 'Palms', 'Left Field', 72, 6, 0, 205, 'Rochester, NY', 'JCU'],
                [11, 'Sal Volcano', 'Sal', 'God Himself', 69, 6, 0, 205, 'Rochester, NY', 'IMPJ']]
        };
    }

    oneRow = (index) => {
        if (index % 2 === 0){
            return(
                <PlayerRow shade={"Dark"} player={this.state.players[index]} />
            )
        } else {
            return(
                <PlayerRow shade={"Light"} player={this.state.players[index]} />
            )
        }
    }
    getRows = () => {
        var output = [];
        if ((this.state.players != null) && (this.state.players.length > 0)) {
            for (var i = 0; i < this.state.players.length; i++) {
                    let result = this.oneRow(i);
                    output.push(result);
            }
            return output;
        } else {
            return (<div></div>)
        }
    }


    render()
    {
        return(
            <Container>
                <Headings />
                <Row>
                    <Col xs="1"/>
                    <Col>
                        <Row className="Black">
                            <Col xs="2"> Name </Col>
                            <Col xs="1"> Nickname </Col>
                            <Col xs="2"> Position </Col>
                            <Col xs="1"> Number </Col>
                            <Col xs="1"> Height </Col>
                            <Col xs="1"> Weight </Col>
                            <Col xs="2"> City </Col>
                            <Col xs="2"> College </Col>
                        </Row>
                        {this.getRows()}
                    </Col>
                    <Col xs="1"/>
                </Row>
                <Row className="Back">
                    <Col>
                        <br /> <br /> <br />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Roster;