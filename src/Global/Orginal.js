{/*
// All API's
const statusAPI = 'http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Job_Status'
const pendingAPI = 'http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Waitting_Jobs_Resources_Required_To_Complete'
const cpuAPI = 'http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Waitting_Jobs_Details'
const longrunningAPI= 'http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Long_Running_Jobs_Details'
const errorAPI = 'http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Error_Jobs_Details'
const top10API = 'http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/Top_10_Jobs_Consuming_High_CPU'

  //API call 1st Tower
  let [status, setStatus] = useState();
  let [total, setTotal] = useState('0');
  let [compltd, setCompltd] = useState('...');
  let [completed, setCompleted] = useState('...');
  let [arrival, setArrival] = useState('...');
  let [conditional, setConditional] = useState('...');
  let [error, setError] = useState('...');
  let [pending, setPending]= useState('...');
  let [started, setStarted] = useState('...');
  let [waiting, setWaiting] = useState('...');
  let [timer, setTimer] = useState('...');
  let [weekendRange, setWeekendRange] = useState('')
  let [errorjobstatus, setErrorjobstatus] = useState('')
  let [loadingstatus, setloadingstatus] = useState(true)

  useEffect(() => {
    const loadjob = async () => {
      try{
        // setloadingstatus(true)
      await axios.get(statusAPI)
      .then(res => {
        setStatus(res.data);
        setArrival(res.data.Arrival);
        setCompleted(res.data.Completed);
        setCompltd(res.data.CompletedPercentage);
        setConditional(res.data.Conditional);
        setError(res.data.Error);
        setPending(res.data.PendingPercentage);
        setStarted(res.data.Started);
        setTotal(res.data.TotalJobsCount)
        setWaiting(res.data.Waiting)
        setTimer(res.data.TimeorResource)
        setWeekendRange(res.data.WeekendTime)
        setErrorjobstatus(res.data['error'])
        setloadingstatus(false)
        setTimeout(loadStored, 30000)
        setInterval(loadStored, 30000)
      })
      }
      catch(e){
        console.log(e)
        setloadingstatus(true)
      }
    };
    // loadjob();
    // setInterval(loadjob, 1800000)
    }, []);
    // console.log(status)
    // console.log(errorjobstatus)


      //API call 2 for Tower 2
      let [status1, setStatus1] = useState();
      let [avgcpu, setAvgcpu] = useState('...');
      let [avgdur, setAvgdur] = useState('...');
      let [avgexcp, setAvgexcp] = useState('...');
      let [maxcpu, setMaxcpu] = useState('...');
      let [maxdur, setMaxdur] = useState('...');
      let [maxexcp, setMaxexcp] = useState('...');
      let [mincpu, setMincpu] = useState('...');
      let [mindur, setMindur] = useState('...');
      let [minexcp, setMinexcp] = useState('...');
      let [wtjob, setWtjob] = useState('...');
      let [errorresource, setErrorresource] = useState('');
      let [loadingDetails, setLoadingDetails] = useState(true);

  
      useEffect(() => {
        const loadpending = async() => {
          try{
            setLoadingDetails(true)
            axios.get(pendingAPI)
            .then(res => {
              setStatus1(res.data);
              setAvgcpu(res.data.TotalAvgCpu);
              setAvgdur(res.data.TotalAvgDuration);
              setAvgexcp(res.data.TotalAvgExcp);
              setMaxcpu(res.data.TotalMaxCpu);
              setMaxdur(res.data.TotalMaxDuration);
              setMaxexcp(res.data.TotalMaxExcp);
              setMincpu(res.data.TotalMinCpu);
              setMindur(res.data.TotalMinDuration);
              setMinexcp(res.data.TotalMinExcp);
              setWtjob(res.data.WaitingJobs);
              setErrorresource(res.data['error']);
              setLoadingDetails(false);
              // loadStored()
            })
          }
          catch(e) {
            console.log(e)
          }
        };
        // loadpending();
        // setInterval(loadpending, 1800000)
        }, []);
        // console.log(status1)
        // console.log(errorresource);
// Tower API CALL ends here

  // Details APi call starts here
  // API call CPU details
  let [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  let [errorAPIDetails, setErrorAPIDetails] =useState([])
  let [errorDetails, setErrorDetails] = useState('')
  let [details4loadstore, setdetails4loadstore] = useState(true)

      useEffect(() => {
        setdetails4loadstore(true)
        const loaddetails = async() => {
          try{
            axios.get(cpuAPI)
            .then(res => {
              setErrorDetails(res.data['error']);
              if(res.status == '200' && errorDetails == null)
              {
                setDetails(res.data);
                setLoading(false)
                setdetails4loadstore(false)
              }
              
              else
              {
                setErrorAPIDetails(res.error)
                setLoading(true)
                setdetails4loadstore(false)
              }
              
            })}
            catch(e){
              console.log(e);
            }
        };
        // loaddetails();
        // setInterval(loaddetails, 3600000)
          
      }, [errorDetails]);
      // console.log(errorDetails.length)    

  //API call 2 for long running jobs
  let [longrunning, setlongrunning] = useState([]);
  let [loadingLong, setLoadingLong] = useState(true);
  let [errorlongrunning, setErrorlongrunning] = useState([]);
  let [errorAPIlongrunning, setErrorAPIlongrunning] = useState('');
  let [long4loadstore, setlong4loadstore] = useState(true)

  useEffect(() => {
    setlong4loadstore(true)
    const loadlong= async() => {
      try{
          axios.get(longrunningAPI)
          .then(res => {
            setErrorlongrunning(res.data['error'])
            if(res.status == '200' && errorlongrunning == null)
                {
                  setlongrunning(res.data);
                  setLoadingLong(false)
                  setlong4loadstore(false)
                }
                else
                {
                  // console.log("fails")
                  setErrorAPIlongrunning(res.error)
                  setLoadingLong(true)
                  setlong4loadstore(false)
                }
          })
          }
        catch(e){
            console.log(e);
          }
      };
      // loadlong();
      // setInterval(loadlong, 3600000)
    
  }, [errorlongrunning]);
  // console.log(errorlongrunning)

  //API call 3 for Error jobs
  let [errorjob, setErrorjob] = useState([]);
  const [loadingError, setLoadingError] = useState(true)
  let [erroroferror, setErroroferror] = useState([]);
  let [errorAPIerror, setErrorAPIerror] = useState(null);
  let [error4loadstore, seterror4loadstore] = useState(true)
  useEffect(() => {
    seterror4loadstore(true)
    const loaderror = async() => {
      try{
        axios.get(errorAPI)
        .then(res => {
          setErroroferror(res.data['error'])
          if(res.status == '200' && erroroferror == null)
              {
                setErrorjob(res.data);
                setLoadingError(false)
                seterror4loadstore(false)
              }
              else
              {
                setErrorAPIerror(res.error)
                setLoadingError(true)
                seterror4loadstore(false)
              }
        })}
        catch(e) {
            console.log(error)
            }
      };
    // loaderror();
    // setInterval(loaderror, 3600000)
  }, [erroroferror]);
  // console.log(erroroferror)

  // API call 4 for Top 10 High consuming Job
  let [highConsuming, setHighConsuming] = useState([]);
  const [loadinghighConsuming, setLoadinghighConsuming] = useState(true)
  let [highConsumingerror, setHighConsumingerror] = useState([]);
  let [highConsumingAPIerror, setHighConsumingAPIerror] = useState(null);
  let [high4loadstore, sethigh4loadstore] = useState(true)
  useEffect(() => {
    
      const loadHigh = () => {
        
          sethigh4loadstore(true)
          axios.get(top10API)
          .then(res => {
            setLoadinghighConsuming(true);
            setHighConsumingerror(res.data['error'])
            if(res.status == '200' && highConsumingerror == null)
                {
                  setHighConsuming(res.data);
                  setLoadinghighConsuming(false)
                  sethigh4loadstore(false)
                }
                else
                {
                  setHighConsumingAPIerror(res.error)
                  setLoadinghighConsuming(true)
                  sethigh4loadstore(false)
                }
          })
        
        .catch(e => {
          console.log(error)
        })   
      };
      // loadHigh();
      // setInterval(loadHigh, 3600000)
  }, []);
  // console.log(highConsuming)
  // DETAILS API ends here

  // API call to load data
  let [stored, setStored] = useState();
  let [tower1, setTower1] = useState();
  let [tower2, setTower2] = useState();
  let [detail1, setDetail1] = useState([]);
  let [detail2, setDetail2] = useState([]);
  let [detail3, setDetail3] = useState([]);
  let [detail4, setDetail4] = useState([])

  const loadStored = () => {
    // if(!loadingDetails && !loadingstatus && !high4loadstore && !error4loadstore && !long4loadstore && !details4loadstore){
      // if(!loadingDetails){ setTower1(status) }
      // else{setTower1(tower1get)}
      // console.log(tower1get)

      // if(!loadingstatus) { setTower2(status1) }
      // else{setTower2(tower2get)}

      // if(!loading){setDetail1(details)}
      // else{setDetail1(detailsget)}

      // if(!loadingLong){setDetail2(longrunning)}
      // else{setDetail2(longrunningget)}

      // if(!loadingError){setDetail3(errorjob)}
      // else{setDetail3(errorjobget)}

      // if(!loadinghighConsuming){setDetail4(highConsuming)}
      // else{setDetail4(highConsumingget)}
      
      axios.post('http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/store_Comment', datatostore)
    .then(res=> {
      setStored(res.data)
    })
    .catch(error => {
      console.log(error)
    })
    // }
  // setInterval(loadstored, 10000)  
  };

  // Values to be sent to storing API
  let datatostore = {
    "status" : status,
    // "status1" : tower2,
    // "highConsuming" : detail4,
    // "errorjob" : detail3,
    // "longrunning" : detail2,
    // "details" : detail1
  }

  // API code for fetching data
  let [getcall, setgetcall] =useState(false)
  let [loaddata, setLoaddata] = useState();
  let [tower1get, setTower1get] = useState();
  let [Arrivalget, setArrivalget] = useState();
  let [Completedget, setCompletedget] = useState()
  let [CompletedPercentageget, setCompletedPercentageget] = useState()
  let [Conditionalget, setConditionalget] = useState()
  let [Errorget, setErrorget] = useState()
  let [PendingPercentageget, setPendingPercentageget] = useState()
  let [Startedget, setStartedget] = useState()
  let [TimeorResourceget, setTimeorResourceget] = useState()
  let [TotalJobsCountget, setTotalJobsCountget] = useState()
  let [Waitingget, setWaitingget] = useState()
  let [WeekendTimeget, setWeekendTimeget] = useState()
  let [tower2get, setTower2get] = useState()
  let [TotalAvgCpuget, setTotalAvgCpuget] = useState()
  let [TotalAvgDurationget, setTotalAvgDurationget] = useState()
  let [TotalAvgExcpget, setTotalAvgExcpget] = useState()
  let [TotalMaxCpuget, setTotalMaxCpuget] = useState()
  let [TotalMaxDurationget, setTotalMaxDurationget] = useState()
  let [TotalMaxExcpget, setTotalMaxExcpget] = useState()
  let [TotalMinCpuget, setTotalMinCpuget] = useState()
  let [TotalMinDurationget, setTotalMinDurationget] = useState()
  let [TotalMinExcpget, setTotalMinExcpget] = useState()
  let [WaitingJobsget, setWaitingJobsget] = useState()
  let [highConsumingget, sethighConsumingget] = useState([])
  let [errorjobget, seterrorjobget] = useState([])
  let [longrunningget, setlongrunningget] = useState([])
  let [detailsget, setdetailsget] = useState([])

    const loadDatafn = async() => {
      setgetcall(false)
      axios.get('http://weekend-batch-auto-syst-oc-2aat-syst.paas-dblan.danskenet.net:8081/Mcc/Weekend/get_Comment')
      .then(res=> {
        
        setLoaddata(res.data);
        setTower1get(res.data.status)
        setArrivalget(res.data.status['Arrival'])
        setCompletedget(res.data.status['Completed'])
        setCompletedPercentageget(res.data.status['CompletedPercentage'])
        setConditionalget(res.data.status['Conditional'])
        setErrorget(res.data.status['Error'])
        setPendingPercentageget(res.data.status['PendingPercentage'])
        setStartedget(res.data.status['Started'])
        setTimeorResourceget(res.data.status['TimeorResource'])
        setTotalJobsCountget(res.data.status['TotalJobsCount'])
        setWaitingget(res.data.status['Waiting'])
        setWeekendTimeget(res.data.status['WeekendTime'])
        setTower2get(res.data.status1)
        setTotalAvgCpuget(res.data.status1['TotalAvgCpu'])
        setTotalAvgDurationget(res.data.status1['TotalAvgDuration'])
        setTotalAvgExcpget(res.data.status1['TotalAvgExcp'])
        setTotalMaxCpuget(res.data.status1['TotalMaxCpu'])
        setTotalMaxDurationget(res.data.status1['TotalMaxDuration'])
        setTotalMaxExcpget(res.data.status1['TotalMaxExcp'])
        setTotalMinCpuget(res.data.status1['TotalMinCpu'])
        setTotalMinDurationget(res.data.status1['TotalMinDuration'])
        setTotalMinExcpget(res.data.status1['TotalMinExcp'])
        setWaitingJobsget(res.data.status1['WaitingJobs'])
        sethighConsumingget(res.data['highConsuming']);
        seterrorjobget(res.data['errorjob'])
        setlongrunningget(res.data['longrunning'])
        setdetailsget(res.data['details'])
        setgetcall(true)
      })
      .catch(error => {
        console.log(error)
      })
    };
    // console.log(detailsget)

    // Calling load and store API through UseEffect.
  useEffect(() => {
    const localapi = async() =>{
      // loadDatafn()
      // setInterval(loadDatafn, 60000)
    }
    localapi()
    
  },[]);
  // Store API Call
*/}