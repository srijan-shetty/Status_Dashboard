import React from "react";
import { MDBContainer, MDBFooter} from "mdbreact";
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-0 fixed">
      <MDBContainer fluid style={{backgroundColor: '#397798', fontSize: '130%', padding : '20px 0px 5px 0px'}}>
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item ">
                  <p><strong style={{fontSize: '150%'}}>Contact support  </strong> For technical support, please contact </p>
              </li>
              <li className="list-inline-item">
                <Button>
                  {/* <a mdbBtn className="waves-light" mdbWavesEffect href="mailto:pema@danskebank.dk">Mail Support</a> */}
                  <a href="mailto:dummyexample@dummy.com">Mail Support</a>
                  </Button>
              </li>
            </ul>
      </MDBContainer>
      <MDBContainer fluid style={{backgroundColor: '#003f63', padding: '10px 0px 10px 0px'}}>
            Developed By:
            {/* <Button> */}
            <a href="mailto:dummyexample@dummy.com"> Developer</a>
            {/* </Button> */}
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
