import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headings from "./Headings";
import GameRow from "./GameRow";
import { Container, Row, Col, Navbar } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

class Schedule extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            games:
                [[0, '05/27/2022', '6:00', 'Dodgers', '-', '0 - 0'],
                [1, '06/03/2022', '7:15', 'Mets', '-', '0 - 0'],
                [2, '06/10/2022', '8:30', 'Cubs', '-', '0 - 0'],
                [3, '06/17/2022', '9:45', 'Rockies', '-', '0 - 0'],
                [4, '06/24/2022', '6:00', 'Giants', '-', '0 - 0'],
                [5, '07/01/2022', '7:15', 'Padres', '-', '0 - 0'],
                [6, '07/08/2022', '8:30', 'Pirates', '-', '0 - 0'],
                [7, '07/15/2022', '9:45', 'Yankees', '-', '0 - 0'],
                [8, '07/22/2022', '6:00', 'Red Sox', '-', '0 - 0'],
                [9, '07/29/2022', '7:15', 'Braves', '-', '0 - 0']]
        };
    }

    oneRow = (index) => {
        if (index % 2 === 0){
            return(
                <GameRow shade={"Dark"} game={this.state.games[index]} />
            )
        } else {
            return(
                <GameRow shade={"Light"} game={this.state.games[index]} />
            )
        }
    }
    getRows = () => {
        var output = [];
        if ((this.state.games != null) && (this.state.games.length > 0)) {
            for (var i = 0; i < this.state.games.length; i++) {
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
                            <Col> Opponent </Col>
                            <Col> Date </Col>
                            <Col> Time </Col>
                            <Col> Win/Loss </Col>
                            <Col> Score </Col>
                        </Row>
                        {this.getRows()}
                    </Col>
                    <Col xs="1"/>
                </Row>
                <Row className="Back">
                    <Col>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Schedule;
