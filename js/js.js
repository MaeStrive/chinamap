
$(function () {

// 获取下拉框元素
var selectElement = document.getElementById("inputGroupSelect996");

// 添加事件监听器
selectElement.addEventListener("change996", function () {
    // 获取当前选定的值
    var selectedValue = selectElement.value;
    console.log("Selected value: " + selectedValue);
    if (selectedValue == 1) {
        echarts_996();
    }
    if (selectedValue == 2) {
        echarts_997();
    }   
});


function echarts_996() {
    // 初始化 ECharts 实例
    var myChart = echarts.init(document.getElementById('echart4'));

    var data = {
        physics: [
            [1, 220],
            [2, 250],
            [3, 200],
            [4, 180]
        ],
        chemistry: [
            [1, 180],
            [2, 160],
            [3, 190],
            [4, 210]
        ],
        physicsDisplay: true,
        chemistryDisplay: true
    };

    function toggleLines() {
        data.physicsDisplay = !data.physicsDisplay;
        data.chemistryDisplay = !data.chemistryDisplay;
        renderChart();
    }

    function renderChart() {
        var option;
        option = {
            title: {
            //   text: '毒素危害总数据',
            //   backgroundColor: '#333',
            },
            
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['室内TSP(μg/m3)','室内PM2.5(μg/m3)','户外TSP(μg/m3)','户外PM2.5(μg/m3)',
              '环境PM2.5(μg/m3)','室内CO2(mg/m3)','室内NH3(mg/m3)','室内RH(°C)','室内T(°C)'],
              textStyle:{
                color:'white'
            },
            },
            grid: {
              left: '3%',
              right: '4%',
              top:'25%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: true,
              data: [ '2021一季度', '2021二季度', '2021三季度', '2021四季度'],
              axisLine: {
                lineStyle: {
                    color: 'white' // 这里设置横坐标轴线的颜色为红色
                }
            }
            },
            yAxis: {
              type: 'value',
              axisLine: {
                lineStyle: {
                    color: 'white' // 这里设置横坐标轴线的颜色为红色
                }
            }
            },
            series: [
            
              {
                name: '室内TSP(μg/m3)',
                type: 'line',
                // stack: 'Total',
                data: [99.02, 119.57, 80.41, 94.11]
              },
              {
                name: '室内PM2.5(μg/m3)',
                type: 'line',
                // stack: 'Total',
                data: [58.92, 49.93, 43.69, 47.23]
              },
              {
                name: '户外TSP(μg/m3)',
                type: 'line',
                // stack: 'Total',
                data: [97.77, 102.48, 138.73, 100.93]
              },
              {
                name: '户外PM2.5(μg/m3)',
                type: 'line',
                // stack: 'Total',
                data: [54.4, 43.0, 53.6 , 43.84]
              },
              {
                name: '环境PM2.5(μg/m3)',
                type: 'line',
                // stack: 'Total',
                data: [31.2, 28.1, 24.7, 25.63]
              },
              {
                name: '室内CO2(mg/m3)',
                type: 'line',
                // stack: 'Total',
                data: [595.9 , 506.2 , 553.5 , 688.48]
              },
              {
                name: '室内NH3(mg/m3)',
                type: 'line',
                // stack: 'Total',
                data: [0.4 , 0.8 , 0.7 , 0.56]
              },
              {
                name: '室内RH(°C)',
                type: 'line',
                // stack: 'Total',
                data: [45.6 , 54.5, 93.3 , 55.36]
              },
              {
                name: '室内T(°C)',
                type: 'line',
                // stack: 'Total',
                data: [2.5, 20.9 , 26.5, 8.17]
              }
            ]
          };

        myChart.setOption(option);
    }

    renderChart();
    }


function echarts_997() {
        // 初始化 ECharts 实例
        var myChart = echarts.init(document.getElementById('echart4'));
    
        var data = {
            physics: [
                [1, 220],
                [2, 250],
                [3, 200],
                [4, 180]
            ],
            chemistry: [
                [1, 180],
                [2, 160],
                [3, 190],
                [4, 210]
            ],
            physicsDisplay: true,
            chemistryDisplay: true
        };
    
        function toggleLines() {
            data.physicsDisplay = !data.physicsDisplay;
            data.chemistryDisplay = !data.chemistryDisplay;
            renderChart();
        }
    
        function renderChart() {
            var option;
            option = {
                title: {
                },
                tooltip: {
                  trigger: 'axis'
                },
                legend: {
                  data: ['室内TSP(μg/m3)'],
                  textStyle:{
                    color:'white'
                },
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  top:'25%',
                  bottom: '3%',
                  containLabel: true
                },
                toolbox: {
                  feature: {
                    saveAsImage: {}
                  }
                },
                xAxis: {
                  type: 'category',
                  boundaryGap: true,
                  data: [ '2021一季度', '2021二季度', '2021三季度', '2021四季度'],
                  axisLine: {
                    lineStyle: {
                        color: 'white' // 这里设置横坐标轴线的颜色为红色
                    }
                }
                },
                yAxis: {
                  type: 'value',
                  axisLine: {
                    lineStyle: {
                        color: 'white' // 这里设置横坐标轴线的颜色为红色
                    }
                }
                },
                series: [
                
                  {
                    name: '室内TSP(μg/m3)',
                    type: 'line',
                    // stack: 'Total',
                    data: [99.02, 119.57, 80.41, 94.11]
                  }
                ]
              };
    
            myChart.setOption(option);
        }
    
        renderChart();
    }

	
	
})



		
		
		


		









