import React from "react";
import classes from "./card.module.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Tower2 = (props) => {
  return (
    <div>
      <h5 style={{ color: "#003f63", fontWeight: "bold" }}>
        Resource For Pending Batch Job
      </h5>
      <Card
        style={{
          width: "100%",
          textAlign: "left",
          backgroundColor: "#397798",
          height: "100%",
        }}
        className={classes.cardzoom}
      >
        <Card.Body>
          <Card.Title
            style={{ padding: "20px", paddingBottom: "20px", color: "white" }}
          >
            KPI<span style={{ float: "right" }}>Values</span>
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <span style={{ float: "left" }}>Pending Batch Count</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? props.getpending["WaitingJobs"] ? props.getpending["WaitingJobs"]: '0' : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Min Duration</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getpending["TotalMinDuration"] ? props.getpending["TotalMinDuration"] : '00:00:00'
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Max Duration</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getpending["TotalMaxDuration"] ? props.getpending["TotalMaxDuration"] : '00:00:00'
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Avg Duration</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getpending["TotalAvgDuration"] ? props.getpending["TotalAvgDuration"] : '00:00:00'
                  : "..."}
              </span>{" "}
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Min CPU</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? props.getpending["TotalMinCpu"] ? props.getpending["TotalMinCpu"] : '00:00:00' : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Max CPU</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? props.getpending["TotalMaxCpu"] ? props.getpending["TotalMaxCpu"]: '00:00:00' : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Avg CPU</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? props.getpending["TotalAvgCpu"] ? props.getpending["TotalAvgCpu"] : '00:00:00' : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Min Excp</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? props.getpending["TotalMinExcp"] ? props.getpending["TotalMinExcp"] :'00:00:00' : "..."}{" "}
                M
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Max Excp</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? props.getpending["TotalMaxExcp"] ? props.getpending["TotalMaxExcp"] : '00:00:00' : "..."}{" "}
                M
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Avg Excp</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? props.getpending["TotalAvgExcp"] ? props.getpending["TotalAvgExcp"] : '00:00:00' : "..."}{" "}
                M
              </span>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Tower2;
