import React, {Component} from 'react';
import './Tralgs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headings from "./Headings";
import { Container, Row, Col } from 'reactstrap';

class Home extends Component
{
    render()
    {
        return(
            <Container>
                <Headings />
                <Row>
                    <Col xs="1"/>
                    <Col className="White">
                        <h1> Welcome to Tralgs Softball </h1>
                        <br />
                        Welcome to Tralgs Softball® gentlemen. Prepare for the most athletic sports experience
                        you’ve ever been a part of. We will be playing at Cobb’s Hill on Thursday nights in the ‘C’
                        division. Game times can be 6:00pm, 7:15pm, 8:30pm, or 9:45pm on any of the 5 fields they have.
                        I will text the group chat each week with the gametime and what field we are on
                        (full schedule is on http://www.rocsportsny.com). Games are 7 Innings, with 10 fielders. We are
                        able to roster roster 12 people each game but can start with as low as 8 people. The 10 game
                        regular season starts at the end of May and the playoffs will take us through August.
                        <br /> <br />
                        The league fee will be $93. That will cover your share of the league fee, a team t-shirt, and a
                        bat I will buy for the team. I will also be supplying a cooler for drinks, a few stickers for
                        people who want them, and some sunflower seeds ferda. If anyone wants anything extra (ex. a
                        better bat, PLASTIC cleats, stir-ups, a rosin bag, whatever) that is on you.
                        <br /> <br />
                        - Where -
                        <br />
                        Cobbs Hill Park
                        80 Culver Rd
                        Rochester, NY 14610
                        <br /> <br />
                        - When -
                        <br />
                            Friday Nights
                            6:00pm, 7:15pm, 8:30pm, or 9:45pm
                            (I will keep the group chat updated)
                        <br /> <br />
                        - Payment -
                        <br />
                            Total League Fee ($765) + Jerseys ($300) + Equipment ($50) = $1,115
                            $1,115 / 12 = $93
                            Venmo: @wenoleyman

                    </Col>
                    <Col xs="1"/>
                </Row>
                <Row className="Back"> <Col> <br /> <br /> <br /> </Col> </Row>
            </Container>
        )
    }
}
export default Home;
