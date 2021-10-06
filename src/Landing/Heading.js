import React from "react";
// import moment from 'moment';
import { BsClockHistory } from "react-icons/bs";
import { NavDropdown,  Row, Col, Container } from "react-bootstrap";


const Detail = (props) => {
  
  return (
    <React.Fragment>
      <Container  style={{paddingBottom: "30px", paddingTop: "110px"}}>
        <Row>
          <Col>
              <h3 style={{ fontWeight: "100%" }}>
                <strong>Dashboard Name </strong>
              </h3>
              <NavDropdown.Divider />
              <p style={{ color: "black", fontSize: "18px" }}>
              <BsClockHistory />{" "}
              {props.display ? props.getstatus["WeekendTime"] : "Loading"}
              {/* {daterange} */}
              </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Detail;
