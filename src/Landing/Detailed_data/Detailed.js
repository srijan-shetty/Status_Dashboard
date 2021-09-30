import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody } from "mdbreact";
import { NavDropdown } from "react-bootstrap";
import classes from "./Details.module.css";
import PaginationCPU from "./Pagination/PaginationCPU";
import PaginationLongRunning from "./Pagination/PaginationLongRunning";
import PaginationError from "./Pagination/PaginationError";
import PaginationHighConsuming from "./Pagination/PaginationHighConsuming";
import { ExportCPU } from "./Export/ExportCPU";
import { ExportLongrunning } from "./Export/ExportLongrunning";
import { ExportError } from "./Export/ExportError";
import { ExportTop10 } from "./Export/ExportTop10";
import { ExportDeviation } from './Export/ExportDeviation';

class CollapsePage extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    var cpurows = "";
    var cpunumber = "";
    if(this.props.display && this.props.displayCPU && this.props.getcpu.data){
      (cpurows = this.props.getcpu.data.map((row) => {
        return cpunumber = +cpunumber + 1;
      })
      
      )
      // console.log(this.props.getcpu.data)
    };
    var longrows = "";
    var longnumber = "";
    if(this.props.display && this.props.displayLong && this.props.getlong.data){
      (longrows = this.props.getlong.data.map((row) => {
        return longnumber = +longnumber + 1;
      })
      )};
    var errorrows = "";
    var errornumber = "";
    if(this.props.display && this.props.displayErrors && this.props.geterror.data){
      (errorrows = this.props.geterror.data.map((row) => {
        return errornumber = +errornumber + 1;
      })
      )};

      var top10rows = "";
      var top10number = "";
      if(this.props.display && this.props.displayTop10 && this.props.gettop10.data){
        (top10rows = this.props.gettop10.data.map((row) => {
          return top10number = +top10number + 1;
        })
        )};
      
    const { collapseID } = this.state;
    return (
      <MDBContainer style={{ paddingBottom: "20px" }}>
        <h2>Click to View Detailed Status</h2>
        <NavDropdown.Divider />
        <MDBCard className="mb-2 mt-5">
          <label
            onClick={this.toggleCollapse("collapse1")}
            className={classes.cardzooms}
            style={{
              backgroundColor: "#003f63",
              fontSize: "120%",
              fontWeight: "bold",
              color: "white",
              padding: "10px 0px 10px 0px",
            }}
          >
            Evaluation of CPU Resources for Pending Batch {
              cpunumber>0 ? <span>( {cpunumber} Unique Jobs)</span> : <span>( 0 )</span>
            }
            <span style={{ float: "right", paddingRight: "20px" }}>
              {this.props.getcpu.data ? (
                <ExportCPU
                  getcpu={this.props.getcpu.data}
                  display={this.props.display}
                />
              ) : (
                ""
              )}
            </span>
          </label>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              {
                this.props.getcpu ?
              this.props.getcpu.data ? (
                <PaginationCPU
                  display={this.props.display}
                  getcpu={this.props.getcpu.data}
                />
              ) : (
                <div style={{color: 'red'}}>{this.props.getcpu.error}</div>
              ): "Connection to DB2 was interrupted. Please try again in a few minutes!!!"}
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mb-2">
          <label
            style={{
              fontSize: "120%",
              fontWeight: "bold",
              float: "left",
              backgroundColor: "#003f63",
              padding: "10px 0px 10px 0px",
              color: "white",
            }}
            onClick={this.toggleCollapse("collapse4")}
            className={classes.cardzooms}
            secondary
          >
            High CPU Consuming Jobs In the Current Plan ( Top {
            top10number>0 ? <span>  {top10number} )</span> : <span> ( 0 )</span>} 
            <span style={{ float: "right", paddingRight: "20px" }}>
              {this.props.gettop10.data ? (
                <ExportTop10
                  gettop10={this.props.gettop10.data}
                  display={this.props.display}
                />
              ) : (
                " "
              )}
            </span>
          </label>
          <MDBCollapse id="collapse4" isOpen={collapseID}>
            <MDBCardBody>
              {this.props.gettop10 ?
              this.props.gettop10.data ? (
                <PaginationHighConsuming
                  gettop10={this.props.gettop10.data}
                  display={this.props.display}
                />
              ) : (
                <div style={{color: 'red'}}>{this.props.gettop10.error}</div>
                )
                : "Connection to DB2 was interrupted. Please try again in a few minutes!!!"}
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
        
        <MDBCard className="mb-2">
          <label
            style={{
              fontWeight: "bold",
              fontSize: "120%",
              backgroundColor: "#003f63",
              padding: "10px 0px 10px 0px",
              color: "white",
            }}
            onClick={this.toggleCollapse("collapse2")}
            className={classes.cardzooms}
          >
            Long Running Jobs in the Current Plan {
              longnumber>0 ? <span>( {longnumber} )</span> : <span>( 0 )</span>
            }
            <span style={{ float: "right", paddingRight: "20px" }}>
              {this.props.getlong.data ? (
                <ExportLongrunning
                  getlong={this.props.getlong.data}
                  display={this.props.display}
                />
              ) : (
                ""
              )}
            </span>
          </label>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
              <label style={{ fontSize: "14px", color: "red" }}>
                {this.props.errorlongrunning}
                {this.props.errorAPIlongrunning}
              </label>
              {this.props.getlong ?
              this.props.getlong.data ? (
                <PaginationLongRunning
                  getlong={this.props.getlong.data}
                  display={this.props.display}
                />
              ) : (
                <div style={{color: 'red'}}>{this.props.getlong.error}</div>
              ) : "Connection to DB2 was interrupted. Please try again in a few minutes!!!"}
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mb-2">
          <label
            style={{
              fontSize: "120%",
              fontWeight: "bold",
              float: "left",
              backgroundColor: "#003f63",
              padding: "10px 0px 10px 0px",
              color: "white",
            }}
            onClick={this.toggleCollapse("collapse3")}
            className={classes.cardzooms}
            secondary
          >
            Errors Jobs in the Current Plan{
              errornumber>0 ? <span> ( {errornumber} )</span> : <span> ( 0 )</span>
            }
            <span style={{ float: "right", paddingRight: "20px" }}>
              {this.props.geterror.data ? (
                <ExportError
                  geterror={this.props.geterror.data}
                  display={this.props.display}
                />
              ) : (
                " "
              )}
            </span>
          </label>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
              {this.props.geterror?
              this.props.geterror.data ? (
                <PaginationError
                  geterror={this.props.geterror.data}
                  display={this.props.display}
                />
              ) : (
                <div style={{color: 'red'}}>{this.props.geterror.error}</div>
              ): "Connection to DB2 was interrupted. Please try again in a few minutes!!!" }
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        
        {/* <MDBCard className="mb-2">
          <label
            style={{
              fontSize: "120%",
              fontWeight: "bold",
              float: "left",
              backgroundColor: "#003f63",
              padding: "10px 0px 10px 0px",
              color: "white",
            }}
            onClick={this.toggleCollapse("collapse5")}
            className={classes.cardzooms}
            secondary
          >
            CPU Consumption Delta Deviation In the Current Plan ( 0 ) 
            <span style={{ float: "right", paddingRight: "20px" }}>
                <ExportDeviation />
            </span>
          </label>
          <MDBCollapse id="collapse5" isOpen={collapseID}>
            <MDBCardBody>
              <span style={{color :'red'}}>IN Progress</span>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard> */}
      </MDBContainer>
    );
  }
}

export default CollapsePage;
