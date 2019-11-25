import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { VictoryChart, VictoryAxis, VictoryPie, VictoryLine, VictoryBar, VictoryStack, VictoryTheme } from 'victory';
import LiquidBar from './LiquidBar';
import LiquidPie from './LiquidPie';

export default function Chart(props) {
  return (
    <section className="liquid--chart">
      <h3>Liquid Consumption Chart</h3>
      <Container>
        <Row>
        <Col>
          <LiquidBar />
        </Col>
        
        <Col>
          <LiquidPie />
        </Col>
        </Row>
      </Container>
    </section>

  )
}