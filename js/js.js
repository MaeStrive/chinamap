$(function () {

// 获取下拉框元素
    var selectElement = document.getElementById("inputGroupSelect996");

    echarts_996();
// 添加事件监听器
    selectElement.addEventListener("change", function () {
        // 获取当前选定的值
        var selectedValue = selectElement.value;
        console.log("Selected value: " + selectedValue);
        if (selectedValue == 1) {
            $("#echart4").css({display: "block"})
            $("#echart5").css({display: "none"})
            $("#echart6").css({display: "none"})
            echarts_996();
        }
        if (selectedValue == 2) {
            $("#echart4").css({display: "none"})
            $("#echart5").css({display: "block"})
            $("#echart6").css({display: "none"})
            echarts_997();
        }
        if (selectedValue == 3) {
            $("#echart4").css({display: "none"})
            $("#echart5").css({display: "none"})
            $("#echart6").css({display: "block"})
            echarts_998();
        }
    });


    function echarts_996() {
        // 初始化 ECharts 实例
        var myChart = echarts.init(document.getElementById('echart4'));


        function renderChart() {
            var option;
            option = {
                title: {
                    //   text: '毒素危害总数据',
                    //   backgroundColor: '#333',
                },

                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        for (let i = 0; i < params.length; i++) {
                          var relVal = params[i].name;
                        }
                        for (let i = 0; i < params.length; i++) {
                            let unit = "";
                            console.log(params[i].seriesName)
                            console.log(params[i].name)
                               
                            if (params[i].seriesName == "室内TSP"||params[i].seriesName == "室内PM2.5"
                            ||params[i].seriesName == "户外PM2.5"||params[i].seriesName == "户外TSP"
                            ||params[i].seriesName == '环境PM2.5') {
                                unit = "μg/m3";
                            }else if(params[i].seriesName == "室内CO2"||params[i].seriesName == "室内NH3"){
                                unit = "mg/m3";
                            }else{
                                unit = "°C"; 
                            }
                            relVal +=
                            "<br/>" +
                            params[i].marker +
                            params[i].seriesName +
                            "  :   " +
                            params[i].data +
                            unit;
                        }
                        return relVal;
                      }
                },
                legend: {
                    data: ['室内TSP', '室内PM2.5', '户外TSP', '户外PM2.5',
                        '环境PM2.5', '室内CO2', '室内NH3', '室内RH', '室内T'],
                    textStyle: {
                        color: 'white'
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    top: '21%',
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
                    data: ['2021一季度', '2021二季度', '2021三季度', '2021四季度'],
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
                        name: '室内TSP',
                        type: 'line',
                        // stack: 'Total',
                        data: [99.02, 119.57, 80.41, 94.11]
                    },
                    {
                        name: '室内PM2.5',
                        type: 'line',
                        // stack: 'Total',
                        data: [58.92, 49.93, 43.69, 47.23]
                    },
                    {
                        name: '户外TSP',
                        type: 'line',
                        // stack: 'Total',
                        data: [97.77, 102.48, 138.73, 100.93]
                    },
                    {
                        name: '户外PM2.5',
                        type: 'line',
                        // stack: 'Total',
                        data: [54.4, 43.0, 53.6, 43.84]
                    },
                    {
                        name: '环境PM2.5',
                        type: 'line',
                        // stack: 'Total',
                        data: [31.2, 28.1, 24.7, 25.63]
                    },
                    {
                        name: '室内CO2',
                        type: 'line',
                        // stack: 'Total',
                        data: [595.9, 506.2, 553.5, 688.48]
                    },
                    {
                        name: '室内NH3',
                        type: 'line',
                        // stack: 'Total',
                        data: [0.4, 0.8, 0.7, 0.56]
                    },
                    {
                        name: '室内RH',
                        type: 'line',
                        // stack: 'Total',
                        data: [45.6, 54.5, 93.3, 55.36]
                    },
                    {
                        name: '室内T',
                        type: 'line',
                        // stack: 'Total',
                        data: [2.5, 20.9, 26.5, 8.17]
                    }
                ]
            };

            myChart.setOption(option);
        }

        renderChart();
    }


    function echarts_997() {
        // 初始化 ECharts 实例
        var myChart = echarts.init(document.getElementById('echart5'));

        function renderChart() {
            var option1;
            option1 = {
                title: {},
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        for (let i = 0; i < params.length; i++) {
                          var relVal = params[i].name;
                        }
                        for (let i = 0; i < params.length; i++) {
                            let unit = "";
                            console.log(params[i].seriesName)
                            console.log(params[i].name)
                               
                            if (params[i].name == "剔骨工人手套"||params[i].name == "分割间案板"||params[i].name == "分割间传送带") {
                                unit = "(1gCFU/cm^2)";
                            }else if(params[i].name == "车间原水管道末端"||params[i].name == "预冷水前段"||params[i].name == "预冷水中段"||params[i].name == "预冷水后段"){
                                unit = "(1gCFU/mL)";
                            }else{
                                unit = "(1gCFU/g)"; 
                            }
                            relVal +=
                            "<br/>" +
                            params[i].marker +
                            params[i].seriesName +
                            ":" +
                            params[i].data +
                            unit;
                        }
                        return relVal;
                      }
                },
                legend: {
                    data: ['菌落总数','大肠菌群数','嗜冷菌'],
                    textStyle: {
                        color: 'white'
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    top: '10%',
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
                    data: ['剔骨工人手套','分割间案板','分割间传送带','车间原水管道末端',
                    '预冷水前段','预冷水中段','预冷水后段','净膛后鸡胴体','预冷后鸡胴体',
                    '分割后鸡腿肉','分割后鸡胸肉'],
                    axisLine: {
                        lineStyle: {
                            color: 'white' // 这里设置横坐标轴线的颜色为红色
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    // axisLabel:{formatter:'{value} gCFU/g'},
                    axisLine: {
                        lineStyle: {
                            color: 'white', // 这里设置横坐标轴线的颜色为红色
                            // formatter: '{value} 1gCFU/g'
                        }
                    }
                },
                series: [

                    {
                        name: '菌落总数',
                        type: 'line',
                        // stack: 'Total',
                        data: [4.46, 3.44, 3.11, 3.78,3.48,2.15,2.79,5.60,6.67,3.58,3.78]
                    },
                    {
                        name: '大肠菌群数',
                        type: 'line',
                        // stack: 'Total',
                        data: [2.41, 1.7, 1.77, 0.67,1.25,1.06,1.38,2.08,3.12,1.79,0.93]
                    },
                    {
                        name: '嗜冷菌',
                        type: 'line',
                        // stack: 'Total',
                        data: [0, 0, 0, 1.97,1.48,1.39,3.61,4.60,6.23,3.34,2.82]
                    }
                ]
            };

            myChart.setOption(option1);
        }

        renderChart();
    }


    function echarts_998() {
        // 初始化 ECharts 实例
        var myChart = echarts.init(document.getElementById('echart6'));

        function renderChart() {
            var option1;
            option1 = {
                title: {},
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        for (let i = 0; i < params.length; i++) {
                          var relVal = params[i].name;
                        }
                        for (let i = 0; i < params.length; i++) {
                            let unit = "";
                            console.log(params[i].seriesName)
                            console.log(params[i].name)
                            unit = "%";                     
                            relVal +=
                            "<br/>" +
                            params[i].marker +
                            params[i].seriesName +
                            ":" +
                            params[i].data +
                            unit;
                        }
                        return relVal;
                      }
                },
                legend: {
                    data: ['E.coliO157:H7的流行情况','沙门氏菌的流行情况'],
                    textStyle: {
                        color: 'white'
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    top: '10%',
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
                    data: ['粪便','皮毛','去皮后','去脏后',
                    '喷淋后','排酸后','分割肉'],
                    axisLine: {
                        lineStyle: {
                            color: 'white' // 这里设置横坐标轴线的颜色为红色
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel:{formatter:'{value}%'},
                    axisLine: {
                        lineStyle: {
                            color: 'white', // 这里设置横坐标轴线的颜色为红色
                            // formatter: '{value}%'
                        }
                    }
                },
                series: [

                    {
                        name: 'E.coliO157:H7的流行情况',
                        type: 'line',
                        // stack: 'Total',
                        data: [1.4, 1.4, 0.0, 0.0,0.0,1.3,0.0]
                    },
                    {
                        name: '沙门氏菌的流行情况',
                        type: 'line',
                        // stack: 'Total',
                        data: [20.0, 17.0, 1.4, 2.9,2.9,2.5,3.8]
                    }
                ]
            };

            myChart.setOption(option1);
        }

        renderChart();
    }



})



		
		
		


		









