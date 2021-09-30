import React from "react";
import classes from "./card.module.css";
import { GiCpu, GiFinishLine, GiDuration } from "react-icons/gi";
import { BiError } from "react-icons/bi";
import { GrStackOverflow } from "react-icons/gr";
import { RiTodoFill } from "react-icons/ri";

import { Card, Row, Col, Container, Spinner } from "react-bootstrap";
import { Chart } from "react-google-charts";
import Example from "./progressbar";
import BatchStatus from "./Tower1";
import PendingStatus from "./Tower2";

const Cards = (props) => {
  let charterror = "";
  let chartarrival = "";
  let chartstarted = "";
  let chartconditional = "";
  let chartwaiting = "";
  if (props.display || (props.displayBatch && props.getstatus.data)) {
    chartarrival = props.getstatus["Arrival"];
    charterror = props.getstatus["Error"];
    chartstarted = props.getstatus["Started"];
    chartconditional = props.getstatus["Conditional"];
    chartwaiting = props.getstatus["Waiting"];
  }

  return (
    <Container fluid style={{ fontSize: "100%", marginTop: "10px" }}>
      <Row style={{ marginBottom: "100px" }}>
        <Col lg={6} md={12} style={{ marginTop: "25px" }}>
          <Row>
            <Col md={6} xs={12}>
              <Card
                style={{
                  marginBottom: "20px",
                  // marginTop: "30px",
                  border: "2px solid black",
                  height: "95%",
                }}
                className={classes.cardzoom}
              >
                {/* <Card.Body> */}
                <Card.Title style={{ padding: "20px", color: "black" }}>
                  Batch Status
                </Card.Title>
                {props.display && props.getstatus.error ? (
                  <label
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "15%",
                      paddingBottom: "25%",
                    }}
                  >
                    {props.display ||
                    (props.displayBatch && props.getstatus.error) ? (
                      <span style={{ color: "red", fontSize: "10" }}>
                        {props.getstatus.error}{" "}
                      </span>
                    ) : null}
                  </label>
                ) : (
                  <>
                    <Example
                      getstatus={props.getstatus}
                      display={props.display}
                      displayBatch={props.displayBatch}
                    />
                    <Card.Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        paddingBottom: "10px",
                      }}
                    >
                      <h6>Batch Jobs Completed</h6>
                    </Card.Text>
                  </>
                )}
              </Card>
            </Col>

            <Col md={6} xs={12}>
              <Card
                style={{
                  marginBottom: "20px",
                  // marginTop: "30px",
                  height: "95%",
                  border: "2px solid black",
                }}
                className={classes.cardzoom}
              >
                <Card.Title style={{ paddingTop: "20px" }}>
                  Pending Batch
                </Card.Title>
                <br />
                {props.display && props.getstatus.error ? (
                  <label
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "15%",
                      paddingBottom: "25%",
                    }}
                  >
                    {props.display ||
                    (props.displayBatch && props.getstatus.error) ? (
                      <span style={{ color: "red", fontSize: "10" }}>
                        {props.getstatus.error}{" "}
                      </span>
                    ) : null}
                  </label>
                ) : (
                  //  <div style={{color: 'red', fontSize: '10'}}>Error while Loading!!</div>
                  <Chart
                    width={"auto"}
                    height={"auto"}
                    chartType="PieChart"
                    loader={<Spinner animation="border" variant="primary" />}
                    data={[
                      ["Status", "Count"],
                      ["Error", charterror],
                      ["Arrival", chartarrival],
                      ["Started", chartstarted],
                      ["Conditional", chartconditional],
                      ["Waiting", chartwaiting],
                    ]}
                    options={{
                      backgroundColor: "transparent",
                      is3D: true,
                      colors: [
                        "red",
                        "#93C3EE",
                        "#28a745",
                        "#669DB5",
                        "#E5C6A0",
                      ],
                      maintainAspectRatio: false,
                      // pieHole: 0.4,
                      // title: 'Popularity of Types of Pizza',
                      // sliceVisibilityThreshold: 0.2, // 20%
                    }}
                    rootProps={{ "data-testid": "7" }}
                  />
                )}

                {/* <Charts error={props.error} arrival={props.arraival} started={props.started} conditional={props.conditional} waiting={props.waiting} /> */}
                {/* </Card.Body> */}
              </Card>
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col xs={4}>
              <Card
                style={{ backgroundColor: "#003f63" }}
                className={classes.cardzoom}
              >
                <Card.Body>
                  <GrStackOverflow
                    style={{ height: "10%", width: "15%", color: "white" }}
                  />
                  <Card.Title
                    style={{
                      fontSize: "150%",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    {props.display || props.displayBatch
                      ? props.getstatus["TotalJobsCount"]
                        ? props.getstatus["TotalJobsCount"]
                        : "0"
                      : "..."}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px", color: "white" }}>
                    Total Jobs
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                style={{ backgroundColor: "#397798" }}
                className={classes.cardzoom}
              >
                <Card.Body>
                  <GiFinishLine
                    style={{ height: "10%", width: "15%", color: "white" }}
                  />
                  <Card.Title
                    style={{
                      fontSize: "150%",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    {props.display || props.displayBatch
                      ? props.getstatus["Completed"]
                        ? props.getstatus["Completed"]
                        : "0"
                      : "..."}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px", color: "white" }}>
                    Completed Jobs
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                style={{ backgroundColor: "#003f63" }}
                className={classes.cardzoom}
              >
                <Card.Body>
                  <RiTodoFill
                    style={{ height: "10%", width: "15%", color: "white" }}
                  />
                  <Card.Title
                    style={{
                      fontSize: "150%",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    {props.display || props.displayBatch
                      ? props.getpending["WaitingJobs"]
                        ? props.getpending["WaitingJobs"]
                        : "0"
                      : "..."}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px", color: "white" }}>
                    Pending Jobs
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={4}>
              <Card
                style={{ backgroundColor: "#397798" }}
                className={classes.cardzoom}
              >
                <Card.Body>
                  <BiError
                    style={{ height: "10%", width: "15%", color: "white" }}
                  />
                  <Card.Title
                    style={{
                      fontSize: "150%",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    {props.display || props.displayBatch
                      ? props.getstatus["Error"]
                        ? props.getstatus["Error"]
                        : "0"
                      : "..."}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px", color: "white" }}>
                    Error Jobs
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                style={{ backgroundColor: "#003f63" }}
                className={classes.cardzoom}
              >
                <Card.Body>
                  <GiDuration
                    style={{ height: "10%", width: "15%", color: "white" }}
                  />
                  <Card.Title
                    style={{
                      fontSize: "150%",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    {props.display || props.displayBatch
                      ? props.getpending["TotalAvgDuration"]
                        ? props.getpending["TotalAvgDuration"]
                        : "00:00:00"
                      : "..."}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px", color: "white" }}>
                    Average Duration
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                style={{ backgroundColor: "#397798" }}
                className={classes.cardzoom}
              >
                <Card.Body>
                  <GiCpu
                    style={{ height: "10%", width: "15%", color: "white" }}
                  />
                  <Card.Title
                    style={{
                      fontSize: "150%",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    {props.display || props.displayBatch
                      ? props.getpending["TotalAvgCpu"]
                        ? props.getpending["TotalAvgCpu"]
                        : "00:00:00"
                      : "..."}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px", color: "white" }}>
                    Average CPU
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={3} md={6} xs={12}>
          <BatchStatus
            getstatus={props.getstatus}
            getpending={props.getpending}
            display={props.display}
            displayBatch={props.displayBatch}
          />
        </Col>

        <Col lg={3} md={6} xs={12}>
          <PendingStatus
            getpending={props.getpending}
            display={props.display}
            displayBatch={props.displayBatch}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
