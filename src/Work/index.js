import React from "react";
import echarts from "echarts";

class Work extends React.Component{
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
        title: { text: '我的技能展示',
                  textStyle:{color:"#246f73"} ,
                  left:"center"
                },
        tooltip: {},
        xAxis: {
            data: ["html","css","js","jq","react","nodejs"]
        },
        yAxis: {},
        series: [{
            name: '熟练',
            type: 'bar',
            data: [63, 67, 87, 90, 88, 60]
        }]
    });
  }
  render(){
    return(
      <div id="main" style={{width: "600px",height:"400px"}}>
        Work
      </div>
    )
  }
}

export default Work;
