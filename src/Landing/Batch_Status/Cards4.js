import {React, useState, useEffect } from 'react';
import axios from 'axios';
import classes from './card.module.css';
import { GiCpu } from 'react-icons/gi';

import { Card, Row, ListGroup, ListGroupItem, Button, Toast, Col, Container, Table, NavDropdown } from 'react-bootstrap';
import { Chart } from "react-google-charts";
import Example from './progressbar';
import BatchStatus from './Tower1';
import PendingStatus from './Tower2';

const Cards =(props) =>{
    
    return(
    <Container fluid style={{fontSize: '100%', marginBottom: '20px'}}>
        <Row style={{marginBottom: '50px'}}>
            <Col xs={1}></Col>
            <Col xs={2}>
                <Card >
                    <Card.Body>
                        <Card.Title >Total Jobs</Card.Title>
                            {/* <GiCpu style={{height: '10%', width: '15%'}}/> */}
                            <Card.Text style={{fontWeight: 'bold', marginTop: '10px', color: 'black'}}><h5>{props.total}</h5></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={2}>
                <Card >
                    <Card.Body>
                        <Card.Title >Completed Jobs</Card.Title>
                            <GiCpu style={{height: '10%', width: '15%'}}/>
                            <Card.Text style={{fontWeight: 'bold', marginTop: '10px', color: 'black'}}><h5>{props.completed}</h5></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={2}>
                <Card >
                    <Card.Body>
                        <Card.Title >Pending Jobs</Card.Title>
                            <GiCpu style={{height: '10%', width: '15%'}}/>
                            <Card.Text style={{fontWeight: 'bold', marginTop: '10px', color: 'black'}}><h5>{props.wtjob}</h5></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={2}>
                <Card >
                    <Card.Body>
                        <Card.Title >Errored Jobs</Card.Title>
                            <GiCpu style={{height: '10%', width: '15%'}}/>
                            <Card.Text style={{fontWeight: 'bold', marginTop: '10px', color: 'black'}}><h5>{props.error}</h5></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={2}>
                <Card >
                    <Card.Body>
                        <Card.Title >Avg CPU Time</Card.Title>
                            <GiCpu style={{height: '10%', width: '15%'}}/>
                            <Card.Text style={{fontWeight: 'bold', marginTop: '10px', color: 'black'}}><h5>{props.avgcpu}</h5></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row style={{marginBottom: '20px', marginBottom: '100px'}}>
            <Col xs={1}></Col>
            <Col xs={10}>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={3}>
                        <Row>
                            <Col>
                            {/* <h5 style={{color: '#003f63', fontWeight: 'bold'}}>Overall Batch Status</h5> */}
                                <Card style={{marginBottom: '25px', backgroundColor: 'lightsalmon', marginTop: '30px'}}>
                                    {/* <Card.Body> */}
                                        <Card.Title style={{padding: '20px', color: 'white'}}>Batch Status</Card.Title>
                                        <Example compltd={props.compltd} />
                                        <Card.Text style={{color: 'white', fontWeight: 'bold', marginTop: '10px', paddingBottom: '20px'}}><h6>Batch Jobs Completed</h6></Card.Text>
                                </Card>
                                
                            </Col>    
                        </Row> 

                        <Row style={{marginBottom: '25px'}}>
                            <Col >
                            {/* <h5 style={{color: '#003f63', fontWeight: 'bold'}}></h5> */}
                                <Card style={{ marginBottom: '25px', backgroundColor: 'lightseagreen', marginTop: '30px'}}>
                                    {/* <Card.Body> */}
                                        <Card.Title style={{padding: '20px'}}>Pending batch details</Card.Title>
                                        <Chart
                                            width={'auto'}
                                            height={'auto'}
                                            chartType="PieChart"
                                            loader={<div>Loading Chart</div>}
                                            data={[
                                                ['Status', 'Count'],
                                                ['Error', props.error],
                                                ['Arrival', props.arrival],
                                                ['Started', props.started], // Below limit.
                                                ['Conditional', props.conditional], // Below limit.
                                                ['Waiting', props.waiting]
                                            ]}
                                            options={{
                                                backgroundColor: "transparent",
                                                is3D: true,
                                                // pieHole: 0.4,
                                                // title: 'Popularity of Types of Pizza',
                                                // sliceVisibilityThreshold: 0.2, // 20%
                                            }}
                                            rootProps={{ 'data-testid': '7' }}
                                            />
                                    {/* </Card.Body> */}
                                </Card>
                            </Col>
                        </Row> 
                    </Col>    
                    <Col xs={8}>
                        <Row>
                            <Col xs={5}>
                                <BatchStatus  compltd={props.compltd} pending={props.pending} timer={props.timer} arrival={props.arrival} error={props.error} started={props.started} 
                                conditional={props.conditional} completed={props.completed} waiting={props.waiting} total={props.total} wtjob={props.wtjob}/>
                            </Col>
                        
                            <Col xs={5}>
                                <PendingStatus wtjob={props.wtjob} mindur={props.mindur} maxdur={props.maxdur} avgdur={props.avgdur} mincpu={props.mincpu} maxcpu={props.maxcpu} 
                                avgcpu={props.avgcpu} minexcp={props.minexcp} maxexcp={props.maxexcp} avgexcp={props.avgexcp} />
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Col>
            
        </Row>
    
    </Container>
    )
}

export default Cards;
