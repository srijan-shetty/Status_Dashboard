import ReactApexChart from "react-apexcharts";

const ApexChart =(props) => {
  let percentage = ''
  if(props.display && props.getstatus["CompletedPercentage"]){
    percentage = props.getstatus["CompletedPercentage"]
  }
  
    const data = {
        series: [percentage],
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          colors : ['green'],
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                // color: 'green',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px',
                  color: 'black'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
        },  
      };
      return(
        <div id="chart">
        <ReactApexChart options={data.options} series={data.series} type="radialBar" />
        </div>
      )
    
}
export default ApexChart;