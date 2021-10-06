import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { RiAdminLine } from "react-icons/ri";

const Navbar1 = ({ mailmodal, adminmodal }) => {
  return (
    <Navbar
      style={{ backgroundColor: "white" }}
      expand="lg"
      classname="nav-item-link-text"
      fixed="top"
    >
      <Navbar.Brand href="#home">
        <img
          src="DBlogo.jpg"
          height="30"
          alt="image/logo"
          style={{ height: "30%", width: "100%" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={adminmodal}>
            <strong style={{ color: "black", fontSize: "16px" }}>
              Admin <RiAdminLine />
            </strong>
          </Nav.Link>
          <Nav.Link style={{ cursor: "not-allowed" }}>
            <strong style={{ color: "black", fontSize: "16px" }}>
              Analysis
              <SiGoogleanalytics />
            </strong>
          </Nav.Link>
          <Nav.Link onClick={mailmodal}>
            <strong style={{ color: "black", fontSize: "16px" }}>
              Send Mail <FiMail />
            </strong>
          </Nav.Link>
        </Nav>
        <Nav>
        <Navbar.Brand
            href="#home"
            style={{ color: "black", marginLeft: "0%" }}
          >
            <NavDropdown
              title={
                <span>
                  <strong>Dashboard Name </strong>
                </span>
              }
              id="basic-nav-dropdown"
            >
              {/* <Row style={{width:'600px'}}> */}
              <NavDropdown.Item
                href="#"
                // target="_blank"
                style={{ fontSize: "24px" }} 
              >
                Switch Dashboard Name
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#"
                // target="_blank"
                style={{ fontSize: "24px" }} active
              >
                Dashboard Name
              </NavDropdown.Item>
              {/* </Row> */}
            </NavDropdown>
          </Navbar.Brand>
          {/* <Navbar.Brand
            href="#home"
            style={{ color: "black", marginLeft: "0%", fontWeight: "bold" }}
          >
            Dashboard Name
          </Navbar.Brand> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;
