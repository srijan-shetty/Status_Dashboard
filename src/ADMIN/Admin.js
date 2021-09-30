import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const Admin = (props) => {
  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>ADMIN</h1>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px"
        }}
      >
        <h4>
          Please use Reload button only in very urgent situtaions and avoid
          using during online hours.
        </h4>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        Click to Refresh Data:{" "}
        <Button onClick={props.refreshdata}>Refresh data</Button>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Click to Reload Data:{" "}
        <Button onClick={props.loaddata}>Reload Data</Button>
      </Row>
    </Container>
  );
};

export default Admin;
