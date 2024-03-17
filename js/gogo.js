$(function () {
    var myChart1 = echarts.init(document.getElementById('contextmenu'));
    //默认展示牛肉
    var info2 = muchangdata
    // var info2 = []
    var dataname = "牧场"
    // var dataname = ""
    $(".niurou").click(function () {
        dataname = "牛肉"
        info2 = niuroudata
        structs_datas = []
        format_struct_data(info2.children, structs_datas);
        myChart1.setOption(
            (option = {
                tooltip: {
                    formatter: function (info) {
                        console.log("tool------", info);
                        var val = info.data.value;
                        var name = info.name;
                        return ["<h4 style='color: #f30619;font-weight: 700'>" + name + "</>"].join("");
                    },
                    // rich: RICH, tooltip不支持富文本
                },

                series: [
                    {
                        name: dataname,
                        type: "treemap",
                        visibleMin: 1,
                        // data: format_struct_data(info2.children, structs_datas),
                        data: structs_datas,
                        leafDepth: 1,
                        // roam: false,
                        label: {
                            normal: {
                                show: true,
                                position: "insideTopLeft",
                                formatter: function (a) {
                                    console.log("formatter==label=======", a);
                                    return (
                                        "{Name|" +
                                        a.name +
                                        "}"
                                    );
                                },
                                textStyle: {
                                    // color: '',  label的字体颜色
                                    fontSize: "14",
                                    fontWeight: "bold",
                                },
                                rich: RICH,
                            },
                        },
                        levels: [
                            {
                                itemStyle: {
                                    normal: {
                                        borderWidth: 0,
                                        gapWidth: 2,
                                    },
                                },
                            },
                            {
                                itemStyle: {
                                    normal: {
                                        gapWidth: 2,
                                    },
                                },
                            },
                            {
                                // colorSaturation: [0.35, 0.5],
                                itemStyle: {
                                    normal: {
                                        gapWidth: 2,
                                        // borderColorSaturation: 0.6
                                    },
                                },
                            },
                        ],
                        breadcrumb: {
                            show: true,
                            // "height": 22,
                            left: "10%",
                            top: "93%",
                            emptyItemWidth: 25,
                            itemStyle: {
                                normal: {
                                    color: "#fff",
                                    borderColor: "rgba(255,255,255,0.7)",
                                    borderWidth: 1,
                                    shadowColor: "rgba(150,150,150,1)",
                                    shadowBlur: 3,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    textStyle: {
                                        color: "#000",
                                        fontWeight: "bold",
                                    },
                                },
                                emphasis: {
                                    textStyle: {},
                                },
                            },
                        },
                    },
                ],
            })
        );
    })

    $(".muchang").click(function () {
        dataname = "牧场"
        info2 = muchangdata
        structs_datas = []
        format_struct_data(info2.children, structs_datas);
        myChart1.setOption(
            (option = {
                tooltip: {
                    formatter: function (info) {
                        console.log("tool------", info);
                        var val = info.data.value;
                        var name = info.name;
                        return ["<h4 style='color: #f30619;font-weight: 700'>" + name + "</>"].join("");
                    },
                    // rich: RICH, tooltip不支持富文本
                },

                series: [
                    {
                        name: dataname,
                        type: "treemap",
                        visibleMin: 1,
                        // data: format_struct_data(info2.children, structs_datas),
                        data: structs_datas,
                        leafDepth: 1,
                        // roam: false,
                        label: {
                            normal: {
                                show: true,
                                position: "insideTopLeft",
                                formatter: function (a) {
                                    console.log("formatter==label=======", a);
                                    return (
                                        "{Name|" +
                                        a.name +
                                        "}"
                                    );
                                },
                                textStyle: {
                                    // color: '',  label的字体颜色
                                    fontSize: "14",
                                    fontWeight: "bold",
                                },
                                rich: RICH,
                            },
                        },
                        levels: [
                            {
                                itemStyle: {
                                    normal: {
                                        borderWidth: 0,
                                        gapWidth: 2,
                                    },
                                },
                            },
                            {
                                itemStyle: {
                                    normal: {
                                        gapWidth: 2,
                                    },
                                },
                            },
                            {
                                // colorSaturation: [0.35, 0.5],
                                itemStyle: {
                                    normal: {
                                        gapWidth: 2,
                                        // borderColorSaturation: 0.6
                                    },
                                },
                            },
                        ],
                        breadcrumb: {
                            show: true,
                            // "height": 22,
                            left: "10%",
                            top: "93%",
                            emptyItemWidth: 25,
                            itemStyle: {
                                normal: {
                                    color: "#fff",
                                    borderColor: "rgba(255,255,255,0.7)",
                                    borderWidth: 1,
                                    shadowColor: "rgba(150,150,150,1)",
                                    shadowBlur: 3,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    textStyle: {
                                        color: "#000",
                                        fontWeight: "bold",
                                    },
                                },
                                emphasis: {
                                    textStyle: {},
                                },
                            },
                        },
                    },
                ],
            })
        );
    })

    RICH = {
        name: {
            color: "#fff",
            fontSize: 24,
        },
        basic: {
            color: "#fff",
            fontSize: 8,
            lineHeight: 16,
        },
    };
    var structs_datas = [];
    var formatUtil = echarts.format;

    function format_struct_data(children, structs_datas) {
        // 添加每个单位的颜色
        for (var prop in children) {
            var index = Math.floor(Math.random() * 20);
            var value = 1;
            if (children[prop].value !== 0) {
                value = children[prop].value;
            }
            var tmp = {
                itemStyle: {
                    normal: {
                        color: struct_colors[index],
                    },
                },
                name: children[prop].name,
                children: [],
                value: children[prop].value,
            };
            format_struct_data(children[prop].children, tmp.children);
            if (tmp.children.length === 0) {
                delete tmp.children;
            }
            structs_datas.push(tmp);
            // return structs_datas;
        }
    }

    function showMenu(param) {
        // 可在此处添加右击操作内容
        console.log("showMenu==============", param);
        var event = param.event;
        var pageX = event.offsetX;
        var pageY = event.offsetY;
        console.log("showMenu========", pageX, pageY);
    }

    format_struct_data(info2.children, structs_datas);
    myChart1.setOption(
        (option = {
            tooltip: {
                formatter: function (info) {
                    console.log("tool------", info);
                    var val = info.data.value;
                    var name = info.name;
                    return ["<h4 style='color: #f30619;font-weight: 700'>" + name + "</>"].join("");
                },
                // rich: RICH, tooltip不支持富文本
            },

            series: [
                {
                    name: dataname,
                    type: "treemap",
                    visibleMin: 1,
                    // data: format_struct_data(info2.children, structs_datas),
                    data: structs_datas,
                    leafDepth: 1,
                    roam: false,
                    label: {
                        normal: {
                            show: true,
                            position: "insideTopLeft",
                            formatter: function (a) {
                                console.log("formatter==label=======", a);
                                return (
                                    "{Name|" +
                                    a.name +
                                    "}"
                                );
                                // return [
                                //     '<div><h1>' + a.name + '</h1></div>',
                                //     '<div><p>' + a.value + '</></div>',
                                // ].join('');
                            },
                            textStyle: {
                                // color: '',  label的字体颜色
                                fontSize: "14",
                                fontWeight: "bold",
                            },
                            rich: RICH,
                        },
                        // emphasis: {
                        //     show: true,
                        //     position: 'insideTopLeft',
                        //     formatter: function(a) {
                        //         console.log('formatter===label======', a);
                        //         return a.name + "" + "资产数量 : " + a.data.value + "等级得分";
                        //     },
                        //     textStyle: {
                        //         fontSize: '14',
                        //         fontWeight: 'bold'
                        //     }
                        // }
                    },
                    levels: [
                        {
                            itemStyle: {
                                normal: {
                                    borderWidth: 0,
                                    gapWidth: 2,
                                },
                            },
                        },
                        {
                            itemStyle: {
                                normal: {
                                    gapWidth: 2,
                                },
                            },
                        },
                        {
                            // colorSaturation: [0.35, 0.5],
                            itemStyle: {
                                normal: {
                                    gapWidth: 2,
                                    // borderColorSaturation: 0.6
                                },
                            },
                        },
                    ],
                    breadcrumb: {
                        show: true,
                        // "height": 22,
                        left: "10%",
                        top: "93%",
                        emptyItemWidth: 25,
                        itemStyle: {
                            normal: {
                                color: "#fff",
                                borderColor: "rgba(255,255,255,0.7)",
                                borderWidth: 1,
                                shadowColor: "rgba(150,150,150,1)",
                                shadowBlur: 3,
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                textStyle: {
                                    color: "#000",
                                    fontWeight: "bold",
                                },
                            },
                            emphasis: {
                                textStyle: {},
                            },
                        },
                    },
                },
            ],
        })
    );

    document.oncontextmenu = function () {
        return false;
    };
    myChart1.on("contextmenu", showMenu);

})