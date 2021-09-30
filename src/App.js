import "./App.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./Global/Navbar";
import ScrollButton from "./Global/ScrollButton";
import Footer from "./Global/Footer";

import Heading from "./Landing/Heading";
import Batch from "./Landing/Batch_Status/Batch";
import Detailed from "./Landing/Detailed_data/Detailed";

import Mail from "./Mail/Mail";
import Login from "./Global/Login1";
import LoginAdmin from './ADMIN/LoginAdmin';
import Admin from './ADMIN/Admin';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Modal starts here
  //Modal style
  const customStyles = {
    content: {
      top: "10%",
      left: "5%",
      right: "5%",
      bottom: "10%",
      backgroundColor: "#fbfdfe",
    },
  };

  //Mail modal
  const [mailmodalIsOpen, setmailModalIsOpen] = useState(false);

  const setmailModalIsOpenToTrue = () => {
    setmailModalIsOpen(true);
  };
  const setmailModalIsOpenToFalse = () => {
    setmailModalIsOpen(false);
  };
  //ADMIN Model
  const [adminmodalIsOpen, setadminModalIsOpen] = useState(false);

  const setadminModalIsOpenToTrue = () => {
    setadminModalIsOpen(true);
  };
  const setadminModalIsOpenToFalse = () => {
    setadminModalIsOpen(false);
  };

  // Login code
  const [token, setToken] = useState("");
  // console.log(token)
  //Login ADMIN code
  const [tokenadmin, setTokenadmin] = useState("")

  // Modal ends here

  var d = new Date();

  // All API's
  const statusAPI =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/Job_Status";
  const pendingAPI =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/Waitting_Jobs_Resources_Required_To_Complete";
  const cpuAPI =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/Waitting_Jobs_Details";
  const longrunningAPI =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/Long_Running_Jobs_Details";
  const errorAPI =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/Error_Jobs_Details";
  const top10API =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/Top_10_Jobs_Consuming_High_CPU";
  const storeAPI =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/store_Comment";
  let getAPI =
    "https://weekendapi-prod-oc-2aat.apps.az2-osp00.danskenet.net/Mcc/Weekend/get_Comment";

  //   //TEST
  //   const statusAPI =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/Job_Status";
  // const pendingAPI =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/Waitting_Jobs_Resources_Required_To_Complete";
  // const cpuAPI =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/Waitting_Jobs_Details";
  // const longrunningAPI =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/Long_Running_Jobs_Details";
  // const errorAPI =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/Error_Jobs_Details";
  // const top10API =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/Top_10_Jobs_Consuming_High_CPU";
  // const storeAPI =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/store_Comment";
  // let getAPI =
  //   "http://v15045.danskenet.net:5022/Mcc/Weekend/get_Comment";
    

  // To display data once loaded and to set result from get
  let [getstatus, setGetstatus] = useState();
  let [getpending, setGetpending] = useState();
  let [getcpu, setGetcpu] = useState([]);
  let [getlong, setGetlong] = useState([]);
  let [geterror, setGeterror] = useState([]);
  let [gettop10, setGettop10] = useState([]);
  let [display, setDisplay] = useState(false);
  let [displayBatch, setDisplayBatch] = useState(false)
  let [displayLong, setDisplayLong] = useState(false);
  let [displayCPU, setDisplayCPU] = useState(false);
  let [displayErrors, setDisplayErrors] = useState(false);
  let [displayTop10, setDisplayTop10] = useState(false);


  let getdat = [];
  let getdatas = [];
  let statusarray = [];
  let pendingarray = [];
  let cpudataarray = [];
  let longdataarray = [];
  let errordataarray = [];
  let topdataarray = [];
  let statuserror = [];
  let pendingerror = [];
  let cpudataerror = [];
  let longdataerror = [];
  let errordataerror = [];
  let topdataerror = [];

  // On load call refresh->to display stored data, call tick-> to check time and load APi's at given time and then refresh, call tick at every min to not miss
  useEffect(() => {
    refreshdata();
    setInterval(refreshdata, 3600000);
    tick();
    setInterval(tick, 60000);
  }, []);

  // To refresh once data store has completed
  const refreshdata = async () => {
    setDisplay(false)
    setDisplayBatch(false);
    setDisplayCPU(false);
    setDisplayErrors(false);
    setDisplayLong(false);
    setDisplayTop10(false);
    getdat = await axios.get(getAPI);
    console.log(getdat.data)
    if ((typeof getdat !== "undefined" || getdat !== null) && (getdat.error == null || getdat.error === "undefiined")) {
      if(getdat.data === "error: The requested data was not available on the server.")
      {
        setDisplay(false)
        console.log("Error: ", getdat.data)
      }
      else{
        setGetstatus(getdat.data.status);
        setGetpending(getdat.data.pending);
        setGetcpu(getdat.data.cpu);
        setGetlong(getdat.data.long);
        setGeterror(getdat.data.error);
        setGettop10(getdat.data.top);
        setDisplay(true);
        setDisplayBatch(true);
        setDisplayCPU(true);
        setDisplayErrors(true);
        setDisplayLong(true);
        setDisplayTop10(true);
        console.log("data fetched from get")
      }
      
    }
  };
  // console.log(getstatus);
  // console.log(getdat.data["error"])
  // console.log()/

  let [callrefresh, setcallrefresh] = useState(false);

  // PUSH NOTIFICATIONS
  const notifyrefresh = () => {
    console.log("reached");
    toast("Data refreshed!");
  };
  const notifyinvalid = () => {
    console.log("reached");
    toast("Invalid Credentials! Please Use MCC Username & Password");
  };
  const notifyinvalidadmin = () => {
    toast("Invalid Credentials for ADMIN !!!");
  }
  const notifysent = () => {
    console.log("reached");
    toast("Mail Sent Successfully!");
    setmailModalIsOpenToFalse()
  };

  // To store data once all time constraints has been matched
  const loaddata = async () => {
    let datastore = {
      status: null,
      pending: null,
      cpu: null,
      long: null,
      error: null,
      top: null,
    };

    setcallrefresh(false);
    setDisplay(false)
    setDisplayBatch(false);
    setDisplayCPU(false);
    setDisplayErrors(false);
    setDisplayLong(false);
    setDisplayTop10(false);
    let statusdata = await axios.get(statusAPI);
    statusarray = statusdata.data;
    statuserror = statusdata.data["error"];

    let pendingdata = await axios.get(pendingAPI);
    pendingarray = pendingdata.data;
    pendingerror = pendingdata["error"];
    console.log("statusarray: ",statusarray, " Pending: ", pendingarray)
    if ( 
      (typeof statusarray !== "undefined"  || statusarray!== null) && 
      (typeof pendingarray !== "undefined"  || pendingarray!== null)
      ) {
        {
          datastore = {
            status: statusarray,
            pending: pendingarray,
            cpu: cpudataarray,
            long: longdataarray,
            error: errordataarray,
            top: topdataarray,
          };
          const loadtoserver = async () => {
            //   console.log("done");
            //   To display data once all API loads are complete, To update current data
            await axios.post(storeAPI, datastore);
            getdatas = await axios.get(getAPI);
            if (typeof getdatas !== "undefined" || getdatas !== null) {
              setGetstatus(getdatas.data.status);
              setGetpending(getdatas.data.pending);
              setGetcpu(getdatas.data.cpu);
              setGetlong(getdatas.data.long);
              setGeterror(getdatas.data.error);
              setGettop10(getdatas.data.top);
              //   console.log(getstatus)
              // setDisplay(true);
              setDisplayBatch(true);
              setcallrefresh(true);
              console.log("Batch status data refreshed!! ", display)
            }
          };
          loadtoserver();
      }
      }

    let errordata = await axios.get(errorAPI);
    errordataarray = errordata.data;
    errordataerror = errordata.error;

    if (
      (typeof errordataarray.data !== "undefined" ||
        errordataarray.data !== null)
    ) {
      datastore = {
        status: statusarray,
        pending: pendingarray,
        cpu: cpudataarray,
        long: longdataarray,
        error: errordataarray,
        top: topdataarray,
      };
      const loadtoserver = async () => {
        //   console.log("done");
        //   To display data once all API loads are complete, To update current data
        await axios.post(storeAPI, datastore);
        getdatas = await axios.get(getAPI);
        if (typeof getdatas !== "undefined" || getdatas !== null) {
          setGetstatus(getdatas.data.status);
          setGetpending(getdatas.data.pending);
          setGetcpu(getdatas.data.cpu);
          setGetlong(getdatas.data.long);
          setGeterror(getdatas.data.error);
          setGettop10(getdatas.data.top);
          //   console.log(getstatus)
          setDisplay(true);
          setDisplayErrors(true);
          setcallrefresh(true);
          console.log("Error data refreshed!!", display)
        }
      };
      loadtoserver();
    }

    let topdata = await axios.get(top10API);
    topdataarray = topdata.data;
    topdataerror = topdata.error;
    // console.log(topdataarray, topdataerror);
    if (
      (typeof topdataarray.data !== "undefined" || topdataarray.data !== null)
    ) {
      datastore = {
        status: statusarray,
        pending: pendingarray,
        cpu: cpudataarray,
        long: longdataarray,
        error: errordataarray,
        top: topdataarray,
      };
      const loadtoserver = async () => {
        //   console.log("done");
        //   To display data once all API loads are complete, To update current data
        await axios.post(storeAPI, datastore);
        getdatas = await axios.get(getAPI);
        if (typeof getdatas !== "undefined" || getdatas !== null) {
          setGetstatus(getdatas.data.status);
          setGetpending(getdatas.data.pending);
          setGetcpu(getdatas.data.cpu);
          setGetlong(getdatas.data.long);
          setGeterror(getdatas.data.error);
          setGettop10(getdatas.data.top);
          //   console.log(getstatus)
          setDisplay(true);
          setDisplayTop10(true);
          setcallrefresh(true);
          console.log("Top CPU consuming data refreshed", display)
        }
      };
      loadtoserver();
    }

    let cpudata = await axios.get(cpuAPI);
    cpudataarray = cpudata.data;
    cpudataerror = cpudata.error;

    if (
      (typeof cpudataarray.data !== "undefined" ||
        cpudataarray.data !== null)
    ) {
      datastore = {
        status: statusarray,
        pending: pendingarray,
        cpu: cpudataarray,
        long: longdataarray,
        error: errordataarray,
        top: topdataarray,
      };
      const loadtoserver = async () => {
        //   console.log("done");
        //   To display data once all API loads are complete, To update current data
        await axios.post(storeAPI, datastore);
        getdatas = await axios.get(getAPI);
        if (typeof getdatas !== "undefined" || getdatas !== null) {
          setGetstatus(getdatas.data.status);
          setGetpending(getdatas.data.pending);
          setGetcpu(getdatas.data.cpu);
          setGetlong(getdatas.data.long);
          setGeterror(getdatas.data.error);
          setGettop10(getdatas.data.top);
          //   console.log(getstatus)
          setDisplay(true);
          setDisplayCPU(true);
          setcallrefresh(true);
          console.log("CPU data refreshed!!", display)
        }
      };
      loadtoserver();
    }
    displayerror();
    let longdata = await axios.get(longrunningAPI);
    longdataarray = longdata.data;
    longdataerror = longdata.error;
    console.log(longdataarray, longdataerror);
    if (
      (typeof longdataarray.data !== "undefined" ||
        longdataarray.data !== null) 
    ) {
      datastore = {
        status: statusarray,
        pending: pendingarray,
        cpu: cpudataarray,
        long: longdataarray,
        error: errordataarray,
        top: topdataarray,
      };
      const loadtoserver = async () => {
        //   console.log("done");
        //   To display data once all API loads are complete, To update current data
        await axios.post(storeAPI, datastore);
        getdatas = await axios.get(getAPI);
        if (typeof getdatas !== "undefined" || getdatas !== null) {
          setGetstatus(getdatas.data.status);
          setGetpending(getdatas.data.pending);
          setGetcpu(getdatas.data.cpu);
          setGetlong(getdatas.data.long);
          setGeterror(getdatas.data.error);
          setGettop10(getdatas.data.top);
          //   console.log(getstatus)
          setDisplay(true);
          setDisplayLong(true);
          setcallrefresh(true);
          console.log("Long Running data refreshed!", display)
        }
      };
      loadtoserver();
    }
    displayerror();
    // once all API data are loaded and is present then only call storing of data
    if (
      (typeof statusarray !== "undefined" || statusarray !== null) &&
      (typeof pendingarray !== "undefined" || pendingarray !== null) &&
      (typeof cpudataarray.data !== "undefined" ||
        cpudataarray.data !== null) &&
      (typeof longdataarray.data !== "undefined" ||
        longdataarray.data !== null) &&
      (typeof errordataarray.data !== "undefined" ||
        errordataarray.data !== null) &&
      (typeof topdataarray.data !== "undefined" || topdataarray.data !== null)
    ) {
      datastore = {
        status: statusarray,
        pending: pendingarray,
        cpu: cpudataarray,
        long: longdataarray,
        error: errordataarray,
        top: topdataarray,
      };
      const loadtoserver = async () => {
        //   console.log("done");
        //   To display data once all API loads are complete, To update current data
        await axios.post(storeAPI, datastore);
        getdatas = await axios.get(getAPI);
        if (typeof getdatas !== "undefined" || getdatas !== null) {
          setGetstatus(getdatas.data.status);
          setGetpending(getdatas.data.pending);
          setGetcpu(getdatas.data.cpu);
          setGetlong(getdatas.data.long);
          setGeterror(getdatas.data.error);
          setGettop10(getdatas.data.top);
          //   console.log(getstatus)
          setDisplay(true);
          setDisplayBatch(true);
          setDisplayCPU(true);
          setDisplayErrors(true);
          setDisplayLong(true);
          setDisplayTop10(true);
          setcallrefresh(true);
          console.log("Finals after all ", display)
        }
      };
      loadtoserver();
    }
    
    if (callrefresh) {
      refreshdata();
      notifyrefresh();
    }
  };
  // console.log("outside ", display)
  // for internal purpose: to know error (if any)
  const displayerror = () => {
    console.log("status: ",statuserror,"pending: ",pendingerror,"cpu: ",cpudataerror,"long : ",longdataerror,"error: ",errordataerror,"top: ",topdataerror
    );
  };

  // To check timing every minute and matching if time matched call loadAPI i.e. call all API's and refresh data
  let [currenttime, setCurrenttime] = useState("");
  let [currenthour, setCurrenthour] = useState("");
  let [currentday, setCurrentday] = useState("");

  const tick = async () => {
    var currenttimes = new Date().getMinutes();
    var currenthours = new Date().getHours();
    var currentdays = new Date().getDay();

    if (
      currenttimes !== null &&
      typeof currenttimes !== "undefined" &&
      currentdays !== null &&
      typeof currentdays !== "undefined"
    ) {
      if (
        (currenthours == "12" ||
          currenthours == "18" ||
          currenthours == "23" ) &&
        currenttimes == "40" &&
        currentdays == "6"
      ) {
        // console.log("reached")
        loaddata();
        console.log(
          "api hit at 40th min on Saturday:",
          currenthours,
          " : ",
          currenttimes,
          " IST"
        );
      }
      else if (
        (currenthours == "9" ||
          currenthours == "12" ||
          currenthours == "18" ||
          currenthours == "21") &&
        currenttimes == "40" &&
        currentdays == "0"
      ) {
        // console.log("reached")
        loaddata();
        console.log(
          "api hit at 40th min on Sunday:",
          currenthours,
          " : ",
          currenttimes,
          " IST"
        );
      } else if (
        (currenthours == "9" || currenthours == "11" || currenthours == "13" || currenthours == "21") &&
        currenttimes == "40" &&
        currentdays == "1"
      ) {
        loaddata();
        console.log(
          "api hit at 40th min on Monday:",
          currenthours,
          " : ",
          currenttimes,
          " IST"
        );
      } else {
        console.log("not rendered");
      }
    }
    setCurrenttime(currenttimes);
    setCurrenthour(currenthours);
    setCurrentday(currentdays);
  };

  return (
    <div className="App">
      <header class="App-header">
        <Navbar mailmodal={setmailModalIsOpenToTrue} adminmodal={setadminModalIsOpenToTrue} />
      </header>
      <Modal
        isOpen={mailmodalIsOpen}
        style={customStyles}
        onRequestClose={() => setmailModalIsOpen(false)}
      >
        <button
          onClick={setmailModalIsOpenToFalse}
          style={{ marginLeft: "90%" }}
        >
          x
        </button>
        {!token ? <Login setToken={setToken} notifyinvalid={notifyinvalid} /> : <Mail notifysent={notifysent} />}
      </Modal>
      
      <Modal
        isOpen={adminmodalIsOpen}
        style={customStyles}
        onRequestClose={() => setadminModalIsOpen(false)}
      >
        <button
          onClick={setadminModalIsOpenToFalse}
          style={{ marginLeft: "90%" }}
        >
          x
        </button>
        {!tokenadmin 
        ? <LoginAdmin setTokenadmin={setTokenadmin} notifyinvalidadmin={notifyinvalidadmin} /> 
        : <Admin refreshdata={refreshdata} loaddata={loaddata}/>}
      </Modal>

      <Heading getstatus={getstatus} display={display} />

      <Batch getstatus={getstatus} getpending={getpending} display={display} displayBatch={displayBatch}/>

      <Detailed
        display={display}
        displayCPU={displayCPU}
        displayErrors={displayErrors}
        displayLong={displayLong}
        displayTop10={displayTop10}
        getcpu={getcpu}
        getlong={getlong}
        geterror={geterror}
        gettop10={gettop10}
      />

      <ToastContainer style={{ marginTop: "50px" }} />

      <ScrollButton />

      <Footer />
    </div>
  );
}

export default App;
