// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Display from "./Displaydata";
// // import * as Data from './test.json'

// const Dummy = () => {
//   // All API's
//   const statusAPI =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Job_Status";
//   const pendingAPI =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Waitting_Jobs_Resources_Required_To_Complete";
//   const cpuAPI =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Waitting_Jobs_Details";
//   const longrunningAPI =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Long_Running_Jobs_Details";
//   const errorAPI =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Error_Jobs_Details";
//   const top10API =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Top_10_Jobs_Consuming_High_CPU";
//   const storeAPI =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/store_Comment";
//   let getAPI =
//     "http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/get_Comment";

//     // To display data once loaded and to set result from get
//   let [getstatus, setGetstatus] = useState();
//   let [display, setDisplay] = useState(false);

//   // {/*
//   let getdat = [];
//   let getdatas = [];
//   let statusarray = [];
//   let pendingarray = [];
//   let cpudataarray = [];
//   let longdataarray = [];
//   let errordataarray = [];
//   let topdataarray = [];
//   useEffect(() => {
//     const loaddata = async () => {
//       let datastore = {
//         status: null,
//         pending: null,
//         cpu: null,
//         long: null,
//         error: null,
//         top: null,
//       };
//     //   To get data for first time, previously stored data
//         getdat = await axios.get(getAPI);
//         if(typeof getdat !== "undefined" || getdat !==null){
//           setGetstatus(getdat.data.status);
//           setDisplay(true)
//         }
//       let statusdata = await axios.get(statusAPI);
//       statusarray = statusdata.data;

//       let pendingdata = await axios.get(pendingAPI);
//       pendingarray = pendingdata.data;

//       let errordata = await axios.get(errorAPI);
//       errordataarray = errordata.data;

//       let topdata = await axios.get(top10API);
//       topdataarray = topdata.data;

//       let cpudata = await axios.get(cpuAPI);
//       cpudataarray = cpudata.data;

//       let longdata = await axios.get(longrunningAPI);
//       longdataarray = longdata.data;
//         // once all API data are loaded and is present then only call storing of data
//       if (
//         (typeof cpudataarray !== "undefined" || cpudataarray !== null) &&
//         (typeof longdataarray !== "undefined" || longdataarray !== null) &&
//         (typeof errordataarray !== " undefined" || errordataarray !== null) &&
//         (typeof topdataarray !== "undefined" || topdataarray !==null)
//       ) {
//         const loadtoserver = async () => {
//           datastore = {
//             status: statusarray,
//             pending: pendingarray,
//             cpu: cpudataarray,
//             long: longdataarray,
//             error: errordataarray,
//             top: topdataarray,
//           };
//           //   console.log("done");
//         //   To display data once all API loads are complete, To update current data
//           await axios.post(storeAPI, datastore);
//           getdatas = await axios.get(getAPI);
//           if (typeof getdatas !== "undefined" || getdatas !== null) {
//             setGetstatus(getdatas.data.status);
//             //   console.log(getstatus)
//             setDisplay(true);
//           }
//         };
//         loadtoserver();
//       }
//     };

//     loaddata();
//     setInterval(loaddata, 3600000);
//   }, []);
//   // */}
//   return (
//     <div style={{ marginTop: "100px" }}>
//       {display ? <Display getstatus={getstatus} /> : "Loading"}
//     </div>
//   );
// };

// export default Dummy;
