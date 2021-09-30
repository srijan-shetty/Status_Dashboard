import React from "react";
import classes from "./card.module.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Tower = (props) => {
  let greater = "";
  if (props.display ? props.getstatus["CompletedPercentage"] : 100 > 90)
    greater = "true";
  else greater = "false";

  let color = "";

  switch (greater) {
    case "true":
      color = "#28a745";
      break;
    case "false":
      color = "#ffc107";
      break;
    default:
      color = "#ffc107";
  }
  return (
    <div>
      <h5 style={{ color: "#003f63", fontWeight: "bold" }}>
        Overall Batch Status
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
            style={{
              padding: "20px",
              paddingBottom: "20px",
              backgroundColor: `${color}`,
              color: "white",
            }}
          >
            COMPLETED %
            <span style={{ float: "right" }}>
              {props.display ? (
                props.getstatus["CompletedPercentage"] ? (
                  props.getstatus["CompletedPercentage"]
                ) : (
                  '0'
                )
              ) : (
                "..."
              )}{" "}
              %
            </span>
          </Card.Title>
          <ListGroup
            className="list-group-flush"
            style={{ backgroundColor: "#397798" }}
          >
            <ListGroupItem>
              <span style={{ float: "left" }}>Pending %</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display ? (
                  props.getstatus["PendingPercentage"] ? (
                    props.getstatus["PendingPercentage"]
                  ) : (
                    '0'
                  )
                ) : (
                  "..."
                )}{" "}
                %
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Time/Resource (*)</span>
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["TimeorResource"]
                    ? props.getstatus["TimeorResource"]
                    : "0"
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Arrival (A)</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["Arrival"]
                    ? props.getstatus["Arrival"]
                    : "0"
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Error (E)</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["Error"]
                    ? props.getstatus["Error"]
                    : "0"
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Started (S)</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["Started"]
                    ? props.getstatus["Started"]
                    : "0"
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Conditional (X)</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["Conditional"]
                    ? props.getstatus["Conditional"]
                    : "0"
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Waiting (W)</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["Waiting"]
                    ? props.getstatus["Waiting"]
                    : '0'
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Completed (C)</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["Completed"]
                    ? props.getstatus["Completed"]
                    : '0'
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Pending (P)</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getpending["WaitingJobs"]
                    ? props.getpending["WaitingJobs"]
                    : '0'
                  : "..."}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ float: "left" }}>Total Jobs #</span>{" "}
              <span style={{ float: "right", fontWeight: "bold" }}>
                {props.display
                  ? props.getstatus["TotalJobsCount"]
                    ? props.getstatus["TotalJobsCount"]
                    : '0'
                  : "..."}
              </span>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tower;
