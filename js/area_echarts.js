$(function () {
    var myChart
    //提前定义苞米
    var baomi = [
        {name: '新疆', value: 100}, {name: '江苏', value: 20},
        {name: '浙江', value: 60}, {name: '江西', value: 30},
        {name: '湖北', value: 40}, {name: '广西', value: 20},
        {name: '甘肃', value: 10}, {name: '山西', value: 10},
        {name: '内蒙古', value: 60}, {name: '陕西', value: 40},
    ]
    map();
    $(".baomi").click(function () {
        clearData()
        // alert("瞎点")
        // 修改数据项，这里将北京市的颜色修改为红色
        for (var i = 0; i < option.series[0].data.length; i++) {
            let data = baomi.find(item => item.name === option.series[0].data[i].name)
            if (data) {
                option.series[0].data[i].itemStyle = {
                    normal: {
                        color: '#ffb900'
                    }
                };
                option.series[0].data[i].value = data.value
            } else {
                // console.log
            }
        }
        // 更新地图
        myChart.setOption(option);
    })

    $(".niuniu").click(function () {
        clearData()
        // alert("瞎点")
        // 修改数据项，这里将北京市的颜色修改为红色
        for (var i = 0; i < option.series[0].data.length; i++) {
            if (option.series[0].data[i].name === '新疆') {
                option.series[0].data[i].itemStyle = {
                    normal: {
                        color: '#8e562e'
                    }
                };
                option.series[0].data[i].value = 600
            }
            if (option.series[0].data[i].name === '山东') {
                option.series[0].data[i].itemStyle = {
                    normal: {
                        color: '#8e562e'
                    }
                };
                option.series[0].data[i].value = 40
            }
        }

        // 更新地图
        myChart.setOption(option);
    })


    function clearData() {
        for (var i = 0; i < option.series[0].data.length; i++) {
            option.series[0].data[i].itemStyle = {
                normal: {
                    color: 'white'
                }
            };
            option.series[0].data[i].value = 0

        }
    }

    // 监听地图点击事件，显示弹窗
    myChart.on('click', function (params) {
        if (params.componentType === 'series') {
            if (params.value !== 0) {
                console.log('您点击了' + params.name);
                $('#customModal').modal('show');
                // 定义表格数据
                var tableData = [
                    ["Name", "Age", "Country"],
                    ["Alice", 25, "USA"],
                    ["Bob", 30, "Canada"],
                    ["Charlie", 22, "Australia"]
                ];

                // 创建表格元素
                var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;'></table>");

                // 添加表头和表格内容
                for (var i = 0; i < tableData.length; i++) {
                    var row = $("<tr></tr>");
                    for (var j = 0; j < tableData[i].length; j++) {
                        var cell = i === 0 ? "<th>" : "<td>";
                        cell += tableData[i][j];
                        cell += i === 0 ? "</th>" : "</td>";
                        row.append(cell);
                    }
                    table.append(row);
                }
                // 将表格添加到指定 div 中
                $("#mapmodel").append(table);
                $(".modal-title").text(params.name);
                $('#customModal').on('hide.bs.modal', function (e) {
                    // alert("我这就关")
                    table.remove()
                });
            } else {
                // alert("不要点我！")
            }
        }
    });

    function map() {


        // 基于准备好的dom，初始化echarts实例
        myChart = echarts.init(document.getElementById('map_1'));
        var mydata = [
            {name: '北京', value: 0}, {name: '天津', value: 0},
            {name: '上海', value: 0}, {name: '重庆', value: 0},
            {name: '河北', value: 0}, {name: '河南', value: 0},
            {name: '云南', value: 0}, {name: '辽宁', value: 0},
            {name: '黑龙江', value: 0}, {name: '湖南', value: 0},
            {name: '安徽', value: 0}, {name: '山东', value: 0},
            {name: '新疆', value: 0}, {name: '江苏', value: 0},
            {name: '浙江', value: 0}, {name: '江西', value: 0},
            {name: '湖北', value: 0}, {name: '广西', value: 0},
            {name: '甘肃', value: 0}, {name: '山西', value: 0},
            {name: '内蒙古', value: 0}, {name: '陕西', value: 0},
            {name: '吉林', value: 0}, {name: '福建', value: 0},
            {name: '贵州', value: 0}, {name: '广东', value: 0},
            {name: '青海', value: 0}, {name: '西藏', value: 0},
            {name: '四川', value: 0}, {name: '宁夏', value: 0},
            {name: '海南', value: 0}, {name: '台湾', value: 0},
            {name: '香港', value: 0}, {name: '澳门', value: 0},
            {name: '南海诸岛', value: 0},
        ];

        option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (typeof (params.value)[2] == "undefined") {
                        return params.name + ' : ' + params.value;
                    } else {
                        return params.name + ' : ' + params.value[2];
                    }
                }
            },

            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,//禁止其放大缩小
                itemStyle: {
                    normal: {
                        areaColor: '#4c60ff',
                        borderColor: '#002097'
                    },
                    emphasis: {
                        // areaColor: '#293fff'
                        areaColor: '#ff2962'
                    }
                }
            },
            series: [{
                name: '数据',
                type: 'map',
                coordinateSystem: 'geo',
                mapType: 'china',
                // roam: true,
                label: {
                    normal: {
                        show: true  //省份名称
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: mydata  //数据
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

})



