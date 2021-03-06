import React, {useState} from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';
import {Button, Spinner } from 'react-bootstrap';

const FormPage = ({notifysent}) => {
  
  const [sender, setSender] = useState('abc@abc.com');
  const [receiverTo, setReceiverTo] = useState(["abc@abc.com"]);
  const [receiverCc, setReceiverCc] = useState(["abc@abc.com"]);
  const [subject, setSubject] = useState("subject");
  
  const [status, setStatus] = useState();
  const [onLoad, setonLoad] = useState(false)

  const send = (e) => {
    e.preventDefault();
    setonLoad(true)
    axios.post('api_endpoint', dataMail)
        .then(res => {
          setStatus(res.data.Mail_Status);
        })
        .catch(error => {
            console.log(error)
        })
        
}
let mailstatus='';

switch(status){
  case '': mailstatus="Connection to Mail API server failed. Please retry or send manually."; break;
  default: mailstatus=status; break;
}
if(mailstatus==='Successfully sent email'){
  mailstatus=''
  notifysent() 
  // setonLoad(false)
}


// console.log(mailstatus)

let dataMail = {
  "mail_subject": subject,
  "sender_rec": sender,
  "to_rec": receiverTo,
  "cc_rec": receiverCc
}

return (
<MDBContainer style={{paddingBottom: '50px', backgroundColor: '#fbfdfe'}}>
  <MDBRow>
    <MDBCol md="10">
      <form>
        <p className="h5 text-center mb-4">Send Mail </p>
        <div className="grey-text">
          <MDBInput label="Your email" icon="user" group type="text" validate error="wrong"
            success="right" onChange={(event) => setSender(event.target.value)} required background value={sender}/>
          <MDBInput label="Sending To" icon="envelope" group type="textarea" validate error="wrong"
            success="right" onChange={(event) => setReceiverTo(event.target.value)} required background value={receiverTo}/>
            <MDBInput label="Sending CC" icon="envelope" group type="textarea" validate error="wrong"
            success="right" onChange={(event) => setReceiverCc(event.target.value)} required background value={receiverCc}/>
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" 
            onChange={(event) => setSubject(event.target.value)} required background value={subject}/>
        </div>
        <div className="text-center">
          <Button onClick={send}>
            Send<MDBIcon far icon="paper-plane" className="ml-1" /> 
          </Button>
          <label style={{ color: "red" }}>{mailstatus}{(onLoad && !mailstatus) ? <Spinner animation="border" variant="primary" /> : null}</label>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default FormPage;
