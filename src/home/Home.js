
import React from "react";
import Project from "../project/Project"
import { Container, Row, Col } from "react-bootstrap";
import './Home.css'

function Home() {
    return (
        <Container className="mb-4 projects index">
            <Row>
                <Col className="col-lg-6 col-lg-4">
                    <Project title="This is workindfasdfg." text="dafsdf">

                    </Project>
                </Col>
            </Row>


        </Container >


    );
}

export default Home;
