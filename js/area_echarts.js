$(function () {
    var myChart
    var innierdiv1 = $("<div id='innerdiv1' style='display: block'></div>")
    var innierdiv2 = $("<div id='innerdiv2' style='display: none'></div>")
    var divbutton = $("<div style='text-align: center'><button class=\"btn btn-primary niubutton\" id='but1'>奶样检测结果</button>&emsp;&emsp;&emsp;" +
        "<button class=\"btn btn-info niubutton\" id='but2'>夏季试验微生物检测结果</button></div>")
    map();
    var datainfo = ""
    $(".baomi").click(function () {
        clearData()
        datainfo = "baomi"
        // alert("瞎点")
        // 修改数据项，这里将北京市的颜色修改为红色
        for (var i = 0; i < optionmap.series[0].data.length; i++) {
            let data = baomi.find(item => item.name === optionmap.series[0].data[i].name)
            if (data) {
                optionmap.series[0].data[i].itemStyle = {
                    normal: {
                        color: struct_colors[Math.floor(Math.random() * 20)]
                    }
                };
                optionmap.series[0].data[i].value = data.value
            } else {
                // console.log
            }
        }
        // 更新地图
        myChart.setOption(optionmap);
    })


    $(".jiji").click(function () {
        //弹窗
        $('#customModal').modal('show');
        var div = $("<div id='xjj'  style=\"width:1500px; height: 600px;\"></div>")
        $("#mapmodel").append(div);
        $(".modal-title").text("冷鲜鸡肉加工贮藏中微生物污染及荧光-高光谱");
        // 基于准备好的dom，初始化echarts实例
        var jiChart = echarts.init(document.getElementById('xjj'));
        structs_datas = []
        format_struct_data_image(jijidata.children, structs_datas);
        jiChart.setOption(
            (option = {
                tooltip: {
                    formatter: function (info) {
                        console.log("tool------", info);
                        var val = info.data.value;
                        var img = info.data.img;
                        var name = info.name;
                        return ["<img src='" + img + "'/>"].join("");
                        // return ["<h4 style='color: #f30619;font-weight: 700'>" + name + "</>"].join("");
                    },
                    // rich: RICH, tooltip不支持富文本
                },

                series: [
                    {
                        name: "冷鲜鸡加工贮藏微生物污染及荧光-高光谱",
                        type: "treemap",
                        visibleMin: 1,
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
        jiChart.setOption(option)
        $('#customModal').on('hide.bs.modal', function (e) {
            // alert("我这就关")
            div.remove()
        });
    })

    $(".niuniu").click(function () {
        datainfo = "niuniu"
        clearData()
        // alert("瞎点")
        // 修改数据项，这里将北京市的颜色修改为红色
        for (var i = 0; i < optionmap.series[0].data.length; i++) {
            let data = niuniu.find(item => item.name === optionmap.series[0].data[i].name)
            if (data) {
                optionmap.series[0].data[i].itemStyle = {
                    normal: {
                        color: struct_colors[Math.floor(Math.random() * 20)]
                    }
                };
                optionmap.series[0].data[i].value = data.value
            } else {
                // console.log
            }
        }
        // 更新地图
        myChart.setOption(optionmap);
    })

    var divtable1

    $(".shui").click(function () {
        //弹窗
        $('#customModal').modal('show');
        $(".modal-title").text("水产");
        var div = $("<div></div>")
        var selectdiv = $("<span>扇贝危害数据：</span><select class=\"custom-select\" id=\"inputGroupSelect04\" aria-label=\"\">\n" +
            "    <option value=\"1\" selected=selected>1.栉孔扇贝全生长周期-不同月龄危害物数据</option>\n" +
            "    <option value=\"2\">2.栉孔扇贝市场环节危害物数据</option>\n" +
            "    <option value=\"3\">3.海湾扇贝养殖环节危害物数据</option>\n" +
            "  </select>")
        div.append(selectdiv)
        div.append(shuichantable1())
        $("#mapmodel").append(div);
        // 基于准备好的dom，初始化echarts实例
        $('#customModal').on('hide.bs.modal', function (e) {
            // alert("我这就关")
            div.remove()
        });
        $(".ypxz").click(function () {
            alert("ooo")
            console.log(divtable1)
            divtable1.style.display = "block";
            divtable1.style.display = "none";
            divtable1.style.display = "none";
            divtable1.style.display = "none";
            divtable1.style.display = "none";
            divtable1.style.display = "none";
        })
        $(".dhft").click(function () {
            $("#divypxz").style.display = "none";
            $("#divdhft").style.display = "block";
            $("#divdltb").style.display = "none";
            $("#divmbxds").style.display = "none";
            $("#divzrxds").style.display = "none";
            $("#divwsw").style.display = "none";
        })
        $(".dltb").click(function () {
            $("#divypxz").style.display = "none";
            $("#divdhft").style.display = "none";
            $("#divdltb").style.display = "block";
            $("#divmbxds").style.display = "none";
            $("#divzrxds").style.display = "none";
            $("#divwsw").style.display = "none";
        })
        $(".mbxds").click(function () {
            $("#divypxz").style.display = "none";
            $("#divdhft").style.display = "none";
            $("#divdltb").style.display = "none";
            $("#divmbxds").style.display = "block";
            $("#divzrxds").style.display = "none";
            $("#divwsw").style.display = "none";
        })
        $(".zrxds").click(function () {
            $("#divypxz").style.display = "none";
            $("#divdhft").style.display = "none";
            $("#divdltb").style.display = "none";
            $("#divmbxds").style.display = "none";
            $("#divzrxds").style.display = "block";
            $("#divwsw").style.display = "none";
        })
        $(".wsw").click(function () {
            $("#divypxz").style.display = "none";
            $("#divdhft").style.display = "none";
            $("#divdltb").style.display = "none";
            $("#divmbxds").style.display = "none";
            $("#divzrxds").style.display = "none";
            $("#divwsw").style.display = "block";
        })


    })


    function shuichantable1() {
        var innerdiv = $("<div></div>")
        innerdiv.append("<div style='margin-top: 15px;margin-bottom:15px;text-align: center'>" +
            "<button class=\"btn btn-info btn66 ypxz\">样品性状</button>&emsp;&emsp;&emsp;" +
            "<button class=\"btn btn-info btn66 dhft\">多环芳烃</button>&emsp;&emsp;&emsp;" +
            "<button class=\"btn btn-info btn66 dltb\">多氯联苯</button>&emsp;&emsp;&emsp;" +
            "<button class=\"btn btn-info btn66 mbxds\">麻痹性毒素</button>&emsp;&emsp;&emsp;" +
            "<button class=\"btn btn-info btn66 zrxds\">脂溶性毒素</button>&emsp;&emsp;&emsp;" +
            "<button class=\"btn btn-info btn66 wsw\">微生物</button></div>"
        )

        innerdiv.append(ypxz())
        innerdiv.append(dhft())
        innerdiv.append(dltb())
        innerdiv.append(mbxds())
        innerdiv.append(zrxds())
        innerdiv.append(wsw())


        return innerdiv
    }


    function wsw() {
        var data1 =
            [
                ["", "样品编号", "大肠埃希氏菌", "副溶血性弧菌"],
                ["", "结果（MPN/g)", "结果（MPN/g)"],
                ["2020/09", 6, 3.50, 7.40],
                ["2020/09", 7, 0.36, 3.60],
                ["2020/09", 8, 0.36, 3.00],
                ["2020/10", 11, 0.30, "ND"],
                ["2020/10", 13, 0.30, "ND"],
                ["2020/11", 17, 0.36, "ND"],
                ["2020/11", 18, 0.36, "ND"],
                ["2020/11", 19, 0.74, "ND"],
                ["2021/12", 21, 2.06, "ND"],
                ["2021/12", 22, 2.30, "ND"],
                ["2021/12", 23, 2.06, "ND"],
                ["2021/01", 26, 2.30, "ND"],
                ["2021/01", 28, "ND", "ND"],
                ["2021/01", 29, 0.92, "ND"],
                ["2021/03", 31, 4.30, "ND"],
                ["2021/03", 33, 2.30, "ND"],
                ["2021/03", 34, 0.92, "ND"],
                ["2021/04", 36, 1.50, "ND"],
                ["2021/04", 38, 2.30, "ND"],
                ["2021/04", 39, 1.50, "ND"],
                ["2021/05", 41, 4.3, 3],
                ["2021/05", 43, 3.6, 3],
                ["2021/05", 44, 3.6, 3.6],
                ["2021/06", 46, "ND", "ND"],
                ["2021/06", 48, "ND", "ND"],
                ["2021/06", 49, "ND", "ND"],
                ["2021/07", 51, 9.3, 21],
                ["2021/07", 53, 6.3, 36],
                ["2021/07", 54, 7.5, 31],
                ["2021/08", 57, 1.5, 12],
                ["2021/08", 59, 1.5, 11],
                ["2021/08", 60, 2, 7.2],
                ["2021/09", 64, 7.6, 6.4],
                ["2021/09", 66, 7.4, 6.2],
                ["2021/09", 67, 7.5, 11],
                ["2021/10", 71, 9.2, 9.2],
                ["2021/10", 73, 9.3, 9.8],
                ["2021/10", 74, 9.36, 9.3],
                ["2021/12", 130, 1.87, 2.13],
                ["2021/12", 132, 1.51, 2.15],
                ["2021/12", 133, 1.97, 2.54],
                ["2022/03", 135, 2.77, 0.70],
                ["2022/03", 137, 2.98, 0.76],
                ["2022/03", 138, 2.79, 0.67],
                ["2022/05", 140, 1.91, 1.03],
                ["2022/05", 141, 1.87, 1.08],
                ["2022/05", 144, 2.10, 0.98]
            ];
        divtable1 = $("<div style='margin-bottom:10px;display: none' id='divwsw'></div>")
        var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < data1.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < data1[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += data1[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table.append(row);
        }
        divtable1.append(table)
        return divtable1
    }


    function zrxds() {
        var data1 = [
            ["样品编号", "ug/kg", "OA", "DTX-1", "DTX-2", "（ugOAeq/kg）"],
            ["", "", "大田软海绵酸", "鳍藻毒素-1", "鳍藻毒素-2", ""],
            ["2020/09", 6, 66.00, "ND", 66.00],
            ["2020/09", 7, 110.26, 27.16, "ND", 137.43],
            ["2020/09", 8, 84.89, 30.98, "ND", 115.86],
            ["2020/10", 11, "ND", "ND", "ND", "ND"],
            ["2020/10", 13, "ND", "ND", "ND", "ND"],
            ["2020/11", 17, "ND", "ND", "ND", "ND"],
            ["2020/11", 18, "ND", "ND", "ND", "ND"],
            ["2020/11", 19, "ND", "ND", "ND", "ND"],
            ["2021/12", 21, 21.88, "ND", "ND", 21.88],
            ["2021/12", 22, 31.58, "ND", "ND", 31.58],
            ["2021/12", 23, "ND", "ND", "ND", "ND"],
            ["2021/01", 26, "ND", "ND", "ND", "ND"],
            ["2021/01", 28, "ND", "ND", "ND", "ND"],
            ["2021/01", 29, "ND", "ND", "ND", "ND"],
            ["2021/03", 31, "ND", "ND", "ND", "ND"],
            ["2021/03", 33, "ND", "ND", "ND", "ND"],
            ["2021/03", 34, "ND", "ND", "ND", "ND"],
            ["2021/04", 36, "ND", "ND", "ND", "ND"],
            ["2021/04", 38, "ND", "ND", "ND", "ND"],
            ["2021/04", 39, "ND", "ND", "ND", "ND"],
            ["2021/05", 41, "ND", "ND", "ND", "ND"],
            ["2021/05", 43, "ND", "ND", "ND", "ND"],
            ["2021/05", 44, "ND", "ND", "ND", "ND"],
            ["2021/06", 46, "ND", "ND", "ND", "ND"],
            ["2021/06", 48, "ND", "ND", "ND", "ND"],
            ["2021/06", 49, "ND", "ND", "ND", "ND"],
            ["2021/07", 51, "ND", "ND", "ND", "ND"],
            ["2021/07", 53, "ND", "ND", "ND", "ND"],
            ["2021/07", 54, "ND", "ND", "ND", "ND"],
            ["2021/08", 57, "ND", "ND", "ND", "ND"],
            ["2021/08", 59, "ND", "ND", "ND", "ND"],
            ["2021/08", 60, "ND", "ND", "ND", "ND"],
            ["2021/09", 64, 193.43, 80.73, "ND", 274.15],
            ["2021/09", 66, 248.28, 85.23, "ND", 333.50],
            ["2021/09", 67, 171.34, 82.23, "ND", 253.56],
            ["2021/10", 71, "ND", "ND", "ND", "ND"],
            ["2021/10", 73, 45.95, 31.89, "ND", 77.84],
            ["2021/10", 74, 59.25, 29.25, "ND", 88.50],
            ["2021/12", 130, "ND", "ND", "ND", "ND"],
            ["2021/12", 132, "ND", "ND", "ND", "ND"],
            ["2021/12", 133, "ND", "ND", "ND", "ND"],
            ["2022/03", 135, "ND", "ND", "ND", "ND"],
            ["2022/03", 137, "ND", "ND", "ND", "ND"],
            ["2022/03", 138, "ND", "ND", "ND", "ND"],
            ["2022/05", 140, "ND", "ND", "ND", "ND"],
            ["2022/05", 141, "ND", "ND", "ND", "ND"],
            ["2022/05", 144, "ND", "ND", "ND", "ND"],
        ]

        divtable1 = $("<div style='margin-bottom:10px;display: none' id='divzrxds'></div>")
        var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < data1.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < data1[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += data1[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table.append(row);
        }
        divtable1.append(table)
        return divtable1
    }


    function mbxds() {
        var data1 = [
            ["种类", "样品编号", "STX", "dcSTX", "neoSTX", "GTX2", "GTX1", "GTX5", "dcGTX2", "GTX3", "GTX4", "dcGTX3", "ugSTX/kg"],
            ["2020/09", 6, "ND", "ND", "ND", "ND", "ND", "ND", 51.602, "ND", "ND", "ND", 33.54],
            ["2020/09", 7, "ND", "ND", "ND", "ND", "ND", "ND", 52.178, "ND", "ND", "ND", 33.92],
            ["2020/09", 8, "ND", "ND", "ND", "ND", "ND", "ND", 71.968, "ND", "ND", "ND", 46.78],
            ["2020/10", 11, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2020/10", 13, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2020/11", 17, "ND", "ND", "ND", "ND", "ND", "ND", 53.728, "ND", "ND", "ND", 34.92],
            ["2020/11", 18, "ND", "ND", "ND", "ND", "ND", "ND", 51.846, "ND", "ND", "ND", 33.70],
            ["2020/11", 19, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/12", 21, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/12", 22, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/12", 23, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/01", 26, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/01", 28, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/01", 29, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/03", 31, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/03", 33, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/03", 34, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/04", 36, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/04", 38, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/04", 39, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/05", 41, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/05", 43, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/05", 44, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/06", 46, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/06", 48, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/06", 49, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/07", 51, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/07", 53, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/07", 54, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/08", 57, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/08", 59, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/08", 60, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND",],
            ["2021/09", 64, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/09", 66, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/09", 67, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/10", 71, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/10", 73, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/10", 74, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/12", 130, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/12", 132, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/12", 133, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2022/03", 135, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2022/03", 137, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2022/03", 138, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2022/05", 140, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2022/05", 141, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2022/05", 144, "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
        ]

        divtable1 = $("<div style='margin-bottom:10px;display: none'  id='divmbxds'></div>")
        var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < data1.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < data1[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += data1[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table.append(row);
        }
        divtable1.append(table)
        return divtable1
    }


    function dltb() {
        var data1 = [
            ["日期", "样品编号", "ug/Kg", "PCB28", "PCB52", "PCB101", "PCB118", "PCB180", "PCB138", "PCB153", "总和"],
            ["2020/9/21", "6", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2020/9/21", "7", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2020/9/21", "8", "ND", "0.71", "ND", "ND", "ND", "ND", "ND", "0.71"],
            ["2020/10/25", "11", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2020/10/25", "13", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2020/11/30", "17", "ND", "ND", "ND", "ND", "0.69", "ND", "ND", "0.69"],
            ["2020/11/30", "17'", "ND", "ND", "ND", "ND", "0.53", "ND", "ND", "0.53"],
            ["2020/11/30", "18", "ND", "1.06", "1.43", "0.70", "1.47", "ND", "ND", "4.66"],
            ["2020/11/30", "18'", "ND", "1.13", "ND", "0.98", "0.88", "ND", "ND", "2.99"],
            ["2020/11/30", "19", "ND", "1.67", "ND", "1.20", "1.45", "ND", "ND", "4.32"],
            ["2020/11/30", "19'", "ND", "1.79", "ND", "1.44", "1.01", "ND", "ND", "4.23"],
            ["2021/1/4", "23", "ND", "ND", "ND", "ND", "1.29", "ND", "ND", "1.29"],
            ["2021/1/4", "23'", "ND", "ND", "ND", "ND", "0.88", "ND", "ND", "0.88"],
            ["2021/1/27", "26", "ND", "0.92", "ND", "ND", "ND", "ND", "ND", "0.92"],
            ["2021/1/27", "26'", "ND", "0.96", "ND", "ND", "ND", "ND", "ND", "0.96"],
            ["2021/3/3", "33", "ND", "1.11", "1.17", "ND", "ND", "ND", "ND", "2.28"],
            ["2021/3/3", "33'", "ND", "1.13", "0.91", "ND", "ND", "ND", "ND", "2.04"],
            ["2021/4/7", "36", "ND", "1.08", "1.40", "ND", "ND", "ND", "ND", "2.48"],
            ["2021/4/7", "36'", "ND", "1.09", "1.15", "ND", "ND", "ND", "ND", "2.24"],
            ["2021/4/7", "38", "ND", "1.19", "ND", "ND", "ND", "ND", "ND", "1.19"],
            ["2021/4/7", "38'", "ND", "1.22", "ND", "ND", "ND", "ND", "ND", "1.22"],
            ["2021/4/7", "39", "ND", "0.71", "0.81", "ND", "ND", "ND", "ND", "1.52"],
            ["2021/4/7", "39'", "ND", "0.73", "0.62", "ND", "ND", "ND", "ND", "1.35"],
            ["2021/5/12", "41", "ND", "1.19", "2.01", "ND", "ND", "ND", "ND", "3.20"],
            ["2021/5/12", "41'", "ND", "1.23", "1.62", "ND", "ND", "ND", "ND", "2.84"],
            ["2021/5/12", "43", "ND", "1.15", "0.76", "ND", "ND", "ND", "ND", "1.91"],
            ["2021/5/12", "43'", "ND", "1.21", "0.57", "ND", "ND", "ND", "ND", "1.78"],
            ["2021/5/12", "44", "ND", "1.05", "0.94", "ND", "ND", "ND", "ND", "1.99"],
            ["2021/5/12", "44'", "ND", "1.13", "0.93", "ND", "ND", "ND", "ND", "2.06"],
            ["2021/6/11", "46", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/6/11", "48", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/6/11", "49", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/7/8", "51", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/7/8", "53", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/7/8", "54", "ND", "ND", "ND", "ND", "ND", "ND", "ND", "ND"],
            ["2021/8/10", "57", "ND", "0.89", "0.50", "ND", "ND", "ND", "ND", "1.39"],
            ["2021/8/10", "57'", "ND", "0.95", "1.16", "ND", "ND", "ND", "ND", "2.12"],
            ["2021/8/10", "59", "ND", "1.36", "1.72", "ND", "ND", "ND", "ND", "3.08"],
            ["2021/8/10", "59'", "ND", "1.44", "1.42", "ND", "ND", "ND", "ND", "2.86"],
            ["2021/8/10", "60", "ND", "1.23", "1.97", "ND", "ND", "ND", "ND", "3.20"],
            ["2021/8/10", "60", "ND", "1.26", "1.68", "ND", "ND", "ND", "ND", "2.94"],
            ["2021/9/9", "64", "ND", "0.86", "0.00", "ND", "ND", "ND", "ND", "0.86"],
            ["2021/9/9", "64'", "ND", "0.87", "0.00", "ND", "ND", "ND", "ND", "0.87"],
            ["2021/9/9", "66", "ND", "0.98", "1.43", "ND", "ND", "ND", "ND", "2.41"],
            ["2021/9/9", "66'", "ND", "1.01", "1.32", "ND", "ND", "ND", "ND", "2.33"],
            ["2021/9/9", "67", "ND", "0.77", "1.03", "ND", "ND", "ND", "ND", "1.80"],
            ["2021/9/9", "67'", "ND", "0.78", "1.01", "ND", "ND", "ND", "ND", "1.79"],
            ["2021/10/28", "71", "ND", "0.98", "5.37", "1.41", "1.01", "ND", "ND", "8.77"],
            ["2021/10/28", "71", "ND", "1.10", "5.43", "1.36", "1.13", "ND", "ND", "9.02"],
            ["2021/10/28", "73", "ND", "1.72", "5.00", "1.67", "1.66", "ND", "ND", "10.05"],
            ["2021/10/28", "73", "ND", "1.98", "4.89", "1.50", "1.71", "ND", "ND", "10.09"],
            ["2021/10/28", "74", "ND", "0.62", "5.38", "1.49", "0.83", "ND", "ND", "8.32"],
            ["2021/10/28", "74", "ND", "0.52", "5.20", "1.50", "0.78", "ND", "ND", "8.01"],
            ["2021/12/22", "130", "ND", "ND", "ND", "0.76", "ND", "ND", "ND", "0.76"],
            ["2021/12/22", "132", "ND", "1.37", "5.39", "1.72", "1.39", "ND", "ND", "9.88"],
            ["2021/12/22", "133", "ND", "1.82", "5.54", "ND", "0.51", "ND", "ND", "7.86"],
            ["2022/3/4", "135", "ND", "0.74", "7.37", "2.71", "0.94", "ND", "ND", "11.76"],
            ["2022/3/4", "137", "ND", "0.79", "7.73", "2.41", "1.08", "ND", "ND", "12.02"],
            ["2022/3/4", "138", "ND", "1.08", "7.50", "2.95", "1.17", "ND", "ND", "12.69"],
            ["2022/5/11", "140", "ND", "0.62", "4.93", "2.83", "1.38", "ND", "ND", "9.76"],
            ["2022/5/11", "141", "ND", "ND", "5.06", "1.47", "1.13", "ND", "ND", "7.66"],
            ["2022/5/11", "141", "ND", "ND", "5.06", "1.34", "1.13", "ND", "ND", "7.53"],
            ["2022/5/11", "144", "ND", "ND", "4.64", "1.40", "0.72", "ND", "ND", "6.75"],
            ["2022/5/11", "144", "ND", "ND", "4.73", "1.31", "0.76", "ND", "ND", "6.80"],
        ]

        divtable1 = $("<div style='margin-bottom:10px;display: none'  id='divdltb'></div>")
        var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < data1.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < data1[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += data1[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table.append(row);
        }
        divtable1.append(table)
        return divtable1
    }


    function dhft() {
        var data1 = [
            ['种类', '单位ug/kg', '萘（NA）', '苊（AC）', '芴（FL）', '菲（PHE）', '蒽（AN）', '荧蒽（FA）', '芘（PY）', '苯并[a]蒽（BaA）', '䓛（CHR）', '苯并[b]荧蒽（BbFA）', '苯并[k]荧蒽（BkFA）', '苯并[a]芘（BaP）', '二苯并[a, h]蒽（DBahA）', '苯并[g, h, i] 苝（BghiP）', '茚并[1, 2, 3-c,d]芘（IP）'],
            ['2020/9/1', '6', 'ND', '4.16', 'ND', '14.86', '7.97', '8.63', '5.27', '2.61', '2.04', 'ND', 'ND', 'ND', '6.94', 'ND', 'ND'],
            ['2020/9/1', "6'", 'ND', '4.21', 'ND', '14.66', '7.77', '8.48', '5.44', '2.78', '2.48', 'ND', 'ND', 'ND', '7.01', 'ND', 'ND'],
            ['2020/9/1', '7', 'ND', '4.42', 'ND', '14.55', '7.94', '8.42', '5.15', '7.36', '1.37', 'ND', 'ND', 'ND', '7.37', 'ND', 'ND'],
            ['2020/9/1', "7'", 'ND', '4.50', 'ND', '14.50', '7.77', '8.29', '5.26', '2.57', '1.70', 'ND', 'ND', 'ND', '7.50', 'ND', 'ND'],
            ['2020/9/1', '8', 'ND', '3.94', 'ND', '14.30', '7.92', '9.31', '5.42', '2.56', '1.58', 'ND', 'ND', 'ND', '6.56', 'ND', 'ND'],
            ['2020/9/1', "8'", 'ND', '3.50', 'ND', '13.58', '7.27', '7.90', '5.21', '2.52', '1.74', 'ND', 'ND', 'ND', '5.83', 'ND', 'ND'],
            ['2020/10/1', '11', '15.31', '2.25', '25.51', 'ND', '7.04', 'ND', '4.76', '7.44', '1.14', 'ND', 'ND', 'ND', '3.75', 'ND', 'ND'],
            ['2020/10/1', "11'", '16.48', '2.53', '27.47', '12.37', '7.35', '7.85', '4.78', '7.29', 'ND', '2.54', 'ND', 'ND', '4.22', 'ND', 'ND'],
            ['2020/10/1', '13', 'ND', '2.41', 'ND', '12.91', '7.54', '8.13', '4.99', '8.37', '1.51', 'ND', 'ND', 'ND', '4.01', 'ND', 'ND'],
            ['2020/10/1', "13'", 'ND', '2.26', 'ND', '12.69', '7.43', '7.71', '4.75', '8.41', '1.53', 'ND', 'ND', 'ND', '3.77', 'ND', 'ND'],
            ['2020/11/1', '17', 'ND', '4.01', 'ND', '13.39', '7.97', '8.60', '5.52', '2.89', '2.27', '2.08', 'ND', 'ND', '6.69', 'ND', 'ND'],
            ['2020/11/1', "17'", 'ND', '4.10', 'ND', '13.34', '8.11', '8.70', '5.44', '2.84', '2.27', '1.52', 'ND', 'ND', '6.83', 'ND', 'ND'],
            ['2020/11/1', '19', 'ND', 'ND', 'ND', '12.83', '7.60', '7.97', '5.31', '2.69', '2.11', '1.33', 'ND', 'ND', '2.74', 'ND', 'ND'],
            ['2020/11/1', "19'", 'ND', 'ND', 'ND', '12.90', '7.48', '8.37', '5.36', '2.82', '2.31', '1.39', 'ND', 'ND', '3.15', 'ND', 'ND'],
            ['2021/12/1', '21', 'ND', '5.54', 'ND', '14.04', '7.47', '8.06', '7.39', '4.81', '9.94', '14.65', '1.90', 'ND', '9.24', '1.89', '2.32'],
            ['2021/12/1', "21'", 'ND', '6.38', 'ND', '15.40', '8.04', '10.22', '7.49', '4.69', '9.81', '14.43', '1.91', 'ND', '10.64', '1.87', '3.41'],
            ['2021/12/1', '22', '13.62', '6.92', '22.70', '15.26', '8.06', '10.18', '7.75', '4.83', '10.40', '15.69', '2.10', 'ND', '11.54', '2.00', '2.52'],
            ['2021/12/1', "22'", '13.78', '7.03', '22.96', '15.08', '7.95', '9.57', '7.71', '4.82', '10.53', '15.98', '2.11', 'ND', '11.72', '2.04', '2.78'],
            ['2021/12/1', '23', 'ND', '13.66', '3.58', '16.84', '8.73', '12.86', '7.25', '3.81', '4.95', '4.82', 'ND', 'ND', '22.76', 'ND', 'ND'],
            ['2021/12/1', "23'", 'ND', '12.61', '3.97', '14.97', '7.35', '8.99', '6.59', '3.18', '4.10', '2.99', 'ND', 'ND', '21.01', 'ND', 'ND'],
            ['2021/1/1', 26, 'ND', 4.11, 'ND', 13.05, 7.52, 9.10, 6.58, 2.78, 2.75, 1.86, 'ND', 'ND', 6.85, 'ND', 'ND'],
            ['2021/1/1', "", 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND'],
            ['2021/1/1', 28, 'ND', 13.49, 'ND', 15.32, 8.56, 11.01, 6.95, 2.82, 2.89, 2.06, 'ND', 'ND', 22.49, 'ND', 'ND'],
            ['2021/1/1', 28, 'ND', 13.39, 4.99, 16.71, 9.15, 12.33, 7.76, 3.82, 4.67, 3.84, 'ND', 'ND', 22.32, 'ND', 'ND'],
            ['2021/1/1', 29, 'ND', 8.18, 'ND', 15.64, 8.62, 11.38, 7.29, 2.95, 3.42, 2.86, 'ND', 'ND', 13.63, 'ND', 'ND'],
            ['2021/1/1', 29, 'ND', 7.97, 'ND', 13.46, 13.41, 12.18, 7.93, 10.01, 13.73, 17.12, 'ND', 'ND', 13.28, 'ND', 'ND'],
            ['2021/3/1', 31, 'ND', 5.66, 'ND', 14.64, 8.63, 10.35, 6.66, 2.86, 3.03, 1.66, 'ND', 'ND', 9.44, 'ND', 'ND'],
            ['2021/3/1', 31, 'ND', 5.52, 'ND', 22.63, 7.86, 9.95, 5.54, 7.49, 10.81, 9.58, 'ND', 'ND', 9.20, 'ND', 'ND'],
            ['2021/3/1', 33, 'ND', 23.05, 8.84, 20.75, 10.55, 13.68, 8.91, 4.45, 6.35, 5.70, 1.07, 'ND', 38.42, 1.23, 5.02],
            ['2021/3/1', 33, 'ND', 23.13, 11.27, 39.55, 22.63, 52.55, 8.42, 19.35, 30.10, 32.35, 2.30, 'ND', 38.55, 5.03, 3.27],
            ['2021/3/1', 34, 'ND', 20.94, 7.19, 19.47, 10.07, 15.25, 8.42, 4.10, 5.42, 4.73, 'ND', 'ND', 34.89, 'ND', 4.33],
            ['2021/3/1', 34, 'ND', 20.48, 6.68, 34.55, 33.06, 18.30, 7.27, 14.20, 25.22, 25.00, 1.83, 'ND', 34.13, 4.28, 5.24],
            ['2021/4/1', 36, 'ND', 8.73, 'ND', 14.79, 9.46, 10.65, 7.79, 3.28, 4.34, 3.29, 'ND', 'ND', 14.56, 'ND', 'ND'],
            ['2021/4/1', 36, 'ND', 8.65, 'ND', 18.13, 10.44, 11.64, 10.15, 3.27, 8.00, 13.22, 'ND', 'ND', 14.42, 'ND', 2.39],
            ['2021/4/1', 38, 'ND', 19.54, 3.85, 19.78, 10.99, 12.89, 6.83, 3.79, 4.45, 3.09, 'ND', 'ND', 32.57, 'ND', 'ND'],
            ['2021/4/1', 38, 'ND', 19.62, 3.66, 19.10, 8.97, 12.50, 7.15, 4.07, 5.02, 3.89, 'ND', 'ND', 32.69, 'ND', 'ND'],
            ['2021/4/1', 39, 'ND', 22.85, 8.39, 18.24, 7.50, 8.94, 6.56, 3.06, 1.80, 'ND', 'ND', 'ND', 38.08, 'ND', 'ND'],
            ['2021/4/1', 39, 'ND', 'ND', 6.34, 'ND', 'ND', 5.46, 6.79, 4.84, 8.58, 14.30, 10.25, 'ND', 1.70, 'ND', 4.99],
            ['2021/5/1', 41, 'ND', 23.59, 10.50, 20.35, 10.14, 12.72, 7.24, 4.57, 4.71, 4.21, 'ND', 'ND', 39.32, 'ND', 'ND'],
            ['2021/5/1', 41, 'ND', 23.56, 13.18, 19.18, 8.60, 9.77, 5.85, 3.03, 3.06, 2.48, 'ND', 'ND', 39.26, 'ND', 'ND'],
            ['2021/5/1', 43, 'ND', 9.23, 'ND', 15.25, 8.78, 10.08, 7.42, 3.84, 5.45, 6.15, 'ND', 'ND', 15.38, 'ND', 'ND'],
            ['2021/5/1', 43, 'ND', 9.16, 'ND', 14.96, 8.45, 9.94, 7.42, 4.22, 5.89, 6.67, 'ND', 'ND', 15.26, 'ND', 'ND'],
            ['2021/5/1', 44, 'ND', 8.00, 'ND', 14.71, 8.57, 9.89, 7.35, 3.82, 5.22, 5.92, 'ND', 'ND', 13.34, 'ND', 'ND'],
            ['2021/5/1', 44, 'ND', 'ND', 'ND', 14.29, 8.24, 9.44, 7.30, 4.03, 5.49, 6.46, 'ND', 'ND', 2.42, 'ND', 'ND'],
            ['2021/6/1', 46, 'ND', 14.72, 13.56, 14.63, 4.08, 6.56, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 24.53, 'ND', 'ND'],
            ['2021/6/1', 46, 'ND', 27.07, 12.42, 13.36, 3.77, 6.68, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 45.11, 'ND', 'ND'],
            ['2021/6/1', 48, 'ND', 3.35, 6.98, 30.60, 6.04, 10.22, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 5.58, 'ND', 'ND'],
            ['2021/6/1', 48, 'ND', 4.22, 7.17, 19.40, 4.54, 8.24, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 7.03, 'ND', 'ND'],
            ['2021/6/1', 49, 'ND', 'ND', 3.53, 33.46, 7.25, 13.24, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 2.96, 'ND', 'ND'],
            ['2021/6/1', 49, 'ND', 'ND', 4.27, 9.57, 'ND', 1.15, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 2.42, 'ND', 'ND'],
            ['2021/7/1', 51, 'ND', 'ND', 3.25, 6.62, 1.09, 2.43, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 1.85, 'ND', 'ND'],
            ['2021/7/1', 51, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 'ND'],
            ['2021/7/1', 53, 14.20, 19.07, 23.67, 14.16, 1.00, 6.04, 'ND', 'ND', 1.49, 1.51, 'ND', 'ND', 31.78, 'ND', 'ND'],
            ['2021/7/1', 53, 14.66, 19.65, 24.43, 15.09, 1.44, 5.91, 'ND', 1.34, 2.64, 3.32, 'ND', 'ND', 32.76, 'ND', 'ND'],
            ['2021/7/1', 54, 'ND', 2.08, 4.10, 21.85, 2.37, 9.68, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 3.47, 'ND', 'ND'],
            ['2021/7/1', 54, 'ND', 'ND', 3.80, 'ND', 'ND', 1.47, 'ND', 'ND', 'ND', 'ND', 'ND', 'ND', 3.01, 'ND', 'ND'],
            ['2021/8/1', 57, 'ND', 6.19, 'ND', 17.08, 8.30, 10.51, 6.67, 3.70, 4.43, 2.87, 'ND', 'ND', 10.32, 'ND', 'ND'],
            ['2021/8/1', 57, 'ND', 3.57, 'ND', 17.61, 8.93, 10.42, 6.68, 3.44, 3.90, 2.19, 'ND', 'ND', 5.96, 'ND', 'ND'],
            ['2021/8/1', 59, 'ND', 'ND', 'ND', 12.17, 7.82, 7.36, 5.62, 6.69, 'ND', 'ND', 'ND', 'ND', 1.77, 'ND', 'ND'],
            ['2021/8/1', 59, 'ND', 2.35, 'ND', 12.13, 7.62, 7.58, 4.34, 8.19, 2.25, 'ND', 'ND', 'ND', 3.92, 'ND', 'ND'],
            ['2021/8/1', 6, 'ND', 2.50, 'ND', 12.87, 7.38, 7.05, 4.82, 6.82, 1.58, 'ND', 'ND', 'ND', 4.17, 'ND', 'ND'],
            ['2021/8/1', 6, 'ND', 4.83, 'ND', 12.66, 'ND', 5.00, 7.25, 7.79, 1.21, 'ND', 'ND', 'ND', 8.05, 'ND', 'ND'],
            ['2021/9/1', 64, 'ND', 8.72, 'ND', 15.05, 8.12, 7.49, 4.33, 3.22, 1.42, 4.24, 'ND', 'ND', 14.54, 'ND', 'ND'],
            ['2021/9/1', 64, 'ND', 2.13, 'ND', 13.13, 7.90, 12.93, 'ND', 7.18, 'ND', 1.68, 'ND', 'ND', 3.55, 'ND', 'ND'],
            ['2021/9/1', 66, 'ND', 3.79, 'ND', 12.89, 9.22, 8.03, 5.07, 6.86, 1.62, 'ND', 'ND', 'ND', 6.32, 'ND', 'ND'],
            ['2021/9/1', 66, 'ND', 5.95, 'ND', 13.36, 7.60, 8.70, 4.26, 7.47, 1.57, 'ND', 'ND', 'ND', 9.92, 'ND', 'ND'],
            ['2021/9/1', 67, 'ND', 3.04, 'ND', 12.36, 7.52, 7.40, 4.22, 9.21, 1.83, 2.44, 'ND', 'ND', 5.06, 'ND', 'ND'],
            ['2021/9/1', 67, 'ND', 4.33, 'ND', 13.78, 9.95, 14.65, 5.47, 7.77, 2.10, 'ND', 'ND', 'ND', 7.22, 'ND', 'ND'],
            ['2021/10/1', 71, 'ND', 4.67, 'ND', 13.92, 10.28, 8.95, 5.69, 3.70, 1.71, 'ND', 'ND', 'ND', 7.79, 'ND', 'ND'],
            ['2021/10/1', 74, 'ND', 4.78, 'ND', 14.62, 11.02, 11.44, 4.99, 6.95, 1.35, 'ND', 'ND', 'ND', 7.97, 'ND', 'ND'],
            ['2021/12/1', 132, 'ND', 3.19, 'ND', 13.03, 7.82, 7.23, 4.33, 9.10, 1.19, 'ND', 'ND', 'ND', 5.32, 'ND', 'ND'],
            ['2021/12/1', 133, 'ND', 3.56, 'ND', 12.44, 'ND', 7.40, 5.25, 7.43, 1.48, 'ND', 'ND', 'ND', 5.94, 'ND', 'ND'],
            ['2022/3/1', 135, 'ND', 4.81, 'ND', 12.87, 7.51, 8.21, 5.14, 2.60, 1.92, 'ND', 'ND', 'ND', 8.02, 'ND', 'ND'],
            ['2022/3/1', 137, 'ND', 4.47, 'ND', 12.80, 7.62, 8.06, 4.15, 7.07, 1.35, 'ND', 'ND', 'ND', 7.46, 'ND', 'ND'],
            ['2022/3/1', 138, 'ND', 4.17, 'ND', 12.79, 7.56, 7.93, 4.90, 6.66, 1.24, 'ND', 'ND', 'ND', 6.95, 'ND', 'ND'],
            ['2022/5/1', 14, 'ND', 'ND', 3.71, 12.66, 7.45, 7.83, 5.38, 7.71, 1.90, 'ND', 'ND', 'ND', 3.20, 'ND', 'ND'],
            ['2022/5/1', 141, 'ND', 2.28, 14.99, 12.77, 7.64, 8.24, 5.19, 3.03, 2.72, 'ND', 'ND', 'ND', 3.80, 'ND', 'ND'],
            ['2022/5/1', 144, 'ND', 2.80, 9.49, 12.99, 7.30, 7.90, 5.57, 2.65, 2.18, 'ND', 'ND', 'ND', 4.67, 'ND', 'ND']
        ]

        divtable1 = $("<div style='margin-bottom:10px;display: none' id='divdltb'></div>")
        var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < data1.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < data1[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += data1[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table.append(row);
        }
        divtable1.append(table)
        return divtable1
    }

    function ypxz() {
        var data1 = [
            ["采样时间", "平均单体重量(g）（SN=10)", "软体平均重（g）（SN=10)", "出肉率%", "含水", "长", "宽", "高"],
            ["2020/9/21", 7.98, 3.04, 0.38, 0.86, 48.33, 42.67, 12.67],
            ["2020/10/25", 9.39, 3.64, 0.39, 0.87, 50.00, 48.00, 13.00],
            ["2020/11/30", 18.41, 8.10, 0.44, 0.88, 55.67, 52.33, 15.00],
            ["2021/1/4", 18.76, 7.95, 0.42, 0.87, 55.03, 51.67, 15.50],
            ["2021/1/27", 20.75, 9.24, 0.45, 0.86, 63.43, 57.80, 16.20],
            ["2021/3/3", 15.13, 6.65, 0.44, 0.86, 58.13, 52.17, 15.40],
            ["2021/4/7", 17.51, 7.75, 0.44, 0.83, 59.00, 54.67, 15.33],
            ["2021/5/12", 21.94, 9.87, 0.45, 0.81, 60.67, 56.00, 14.33],
            ["2021/6/11", 22.77, 10.77, 0.47, 0.81, 66.00, 59.00, 17.00],
            ["2021/7/8", 13.98, 6.52, 0.47, 0.84, 57.00, 55.00, 15.33],
            ["2021/8/10", 16.04, 6.84, 0.43, 0.82, 59.00, 54.33, 14.33],
            ["2021/9/9", 18.42, 6.70, 0.36, 0.82, 62.67, 58.00, 16.33],
            ["2021/10/28", 16.20, 6.20, 0.38, 0.85, 66.67, 63.67, 21.00],
            ["2021/12/22", 36.53, 15.21, 0.42, 0.86, 71.67, 68.00, 19.00],
            ["2022/3/4", 38.77, 19.30, 0.50, "", 74.89, 69.11, 23.22],
            ["2022/5/11", 47.88, 24.64, 0.51, "", 74.67, 69.00, 20.00]
        ];
        divtable1 = $("<div id='divypxz' style='display: block'></div>")
        var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < data1.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < data1[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += data1[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table.append(row);
        }
        divtable1.append($("<div style=\"text-align=left;font-size: 18px;font-weight: 700;margin-top: 10px\">均值：</div>"))
        divtable1.append(table)
        divtable1.append($("<div style=\"text-align=left;font-size: 18px;font-weight: 700;margin-top: 10px\">标准差：</div>"))
        var table2 = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");

        var data2 = [
            ["采样时间", "平均单体重量(g）（SN=10)", "软体平均重（g）（SN=10)", "出肉率%", "含水", "长", "宽", "高"],
            ["2020/9/21", 0.97, 0.30, 0.02, 0.01, 1.53, 2.08, 1.53],
            ["2020/10/25", 0.49, 0.09, 0.01, 0.02, 2.83, 2.83, 1.41],
            ["2020/11/30", 0.69, 0.33, 0.01, 0.01, 1.15, 1.53, 1.00],
            ["2021/1/4", 1.42, 0.70, 0.01, 0.01, 2.79, 3.61, 0.85],
            ["2021/1/27", 1.62, 0.73, 0.01, 0.01, 3.48, 0.78, 0.44],
            ["2021/3/3", 0.57, 0.32, 0.02, 0.01, 1.88, 1.42, 0.36],
            ["2021/4/7", 0.48, 0.13, 0.01, 0.02, 3.46, 2.08, 0.58],
            ["2021/5/12", 0.89, 0.20, 0.01, 0.01, 1.15, 2.00, 0.58],
            ["2021/6/11", 0.91, 0.90, 0.03, 0.01, 0.00, 1.00, 1.00],
            ["2021/7/8", 0.31, 0.44, 0.02, 0.01, 1.00, 2.65, 1.15],
            ["2021/8/10", 0.77, 0.47, 0.01, 0.01, 1.73, 0.58, 0.58],
            ["2021/9/9", 0.22, 0.34, 0.02, 0.02, 1.15, 0.00, 1.53],
            ["2021/10/28", 0.38, 0.56, 0.03, 0.01, 1.53, 2.08, 1.73],
            ["2021/12/22", 0.90, 0.68, 0.01, 0.01, 3.79, 2.65, 1.00],
            ["2022/3/4", 1.18, 1.33, 0.03, "", 1.35, 2.70, 1.83],
            ["2022/5/11", 0.73, 1.20, 0.02, "", 3.06, 1.00, 2.00]
        ];
        for (var i = 0; i < data2.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < data2[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += data2[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table2.append(row);
        }
        divtable1.append(table2)
        return divtable1
    }

    function clearData() {
        for (var i = 0; i < optionmap.series[0].data.length; i++) {
            optionmap.series[0].data[i].itemStyle = {
                normal: {
                    color: 'white'
                }
            };
            optionmap.series[0].data[i].value = 0

        }
    }

    // 监听地图点击事件，显示弹窗
    myChart.on('click', function (params) {
        if (params.componentType === 'series') {
            if (params.value !== 0) {
                console.log('您点击了' + params.name);
                $('#customModal').modal('show');
                var div = $("<div></div>")
                if (datainfo == "niuniu") {

                    // 定义表格数据
                    if (params.name == '天津') {
                        var tableData = [
                            ["#", "Indoor TSP", "Indoor PM2.5", "Outdoor TSP", "Outdoor PM2.5",
                                "Ambient PM2.5", "Indoor CO2", "Indoor NH3", "Indoor RH", "Indoor T"],
                            ["2021年第一季度", 99.0, 58.9, 97.8, 54.4, 31.2, 595.9, 0.4, 45.6, 2.5],
                            ["2021年第二季度", 119.6, 49.9, 102.5, 43.0, 28.1, 506.2, 0.8, 54.5, 20.9],
                            ["2021年第三季度", 80.4, 43.7, 138.7, 53.6, 24.7, 553.5, 0.7, 93.3, 26.5],
                            ["2021年第四季度", 94.1, 47.2, 100.9, 43.8, 25.6, 688.5, 0.6, 55.4, 8.2],
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
                        div.append(table)
                        $("#mapmodel").append(div);
                    } else {
                        div.append(divbutton)
                        var table11 = "<table class=\"table table-bordered table-striped\" style=\"\">\n" +
                            "    <tbody>\n" +
                            "    <tr>\n" +
                            "        <td></td>\n" +
                            "    </tr>\n" +
                            "    <tr style=\"\">\n" +
                            "        <td rowspan=\"2\">样品名称</td>\n" +
                            "        <td rowspan=\"2\" class=\"xl80\">采样点</td>\n" +
                            "        <td rowspan=\"2\" class=\"xl80\">编号</td>\n" +
                            "        <td rowspan=\"2\" class=\"xl80\">送检批次</td>\n" +
                            "        <td rowspan=\"2\" class=\"xl80\">取样编号</td>\n" +
                            "        <td rowspan=\"2\" class=\"xl79\">采样时间</td>\n" +
                            "        <td colspan=\"3\" class=\"xl98\">A菌落（净含量200mL）</td>\n" +
                            "        <td class=\"xl82\">B抗生素（净含量250mL）</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td class=\"xl82\">大肠菌群(CFU/mL）</td>\n" +
                            "        <td class=\"xl80\">菌落总数（CFU/mL)</td>\n" +
                            "        <td class=\"xl80\">沙门氏菌(/25mL)</td>\n" +
                            "        <td class=\"xl78\">青霉素G<br>\n" +
                            "            （ug/L，检出限值：4ug/L）\n" +
                            "        </td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td rowspan=\"12\">原料奶</td>\n" +
                            "        <td rowspan=\"3\">泌乳牛栏</td>\n" +
                            "        <td>A11-A/B</td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>1</td>\n" +
                            "        <td rowspan=\"12\">2022/4/11\n" +
                            "        </td>\n" +
                            "        <td>&lt;1</td>\n" +
                            "        <td>27</td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A12-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>2</td>\n" +
                            "        <td>&lt;1</td>\n" +
                            "        <td>9</td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A13-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>3</td>\n" +
                            "        <td>&lt;1</td>\n" +
                            "        <td>17</td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td rowspan=\"3\">挤奶栏</td>\n" +
                            "        <td>A21-A/B</td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>1</td>\n" +
                            "        <td>2\n" +
                            "        </td>\n" +
                            "        <td><font>1.9×10</font><font\n" +
                            "        ><sup>4</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A22-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>2</td>\n" +
                            "        <td><>4.6×10</font><font><sup>2</sup></font>\n" +
                            "        </td>\n" +
                            "        <td><font>2.7×10</font><font\n" +
                            "                class=\"font12\"><sup>4</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A23-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>3</td>\n" +
                            "        <td><font>6.2×10</font><font class=\"font10\"><sup>2</sup></font>\n" +
                            "        </td>\n" +
                            "        <td><font>1.9×10</font><font\n" +
                            "        ><sup>4</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td rowspan=\"3\">储奶罐</td>\n" +
                            "        <td>A31-A/B</td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>1</td>\n" +
                            "        <td>17</td>\n" +
                            "        <td><font class=\"font11\">5.7×10</font><font\n" +
                            "                class=\"font12\"><sup>3</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A32-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>2</td>\n" +
                            "        <td>11</td>\n" +
                            "        <td><font>4.5×10</font><font\n" +
                            "        ><sup>3</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A33-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>3</td>\n" +
                            "        <td>20</td>\n" +
                            "        <td><font>4.5×10</font><font\n" +
                            "        ><sup>3</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td rowspan=\"3\">乳房炎牛栏</td>\n" +
                            "        <td>A41-A/B</td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>1</td>\n" +
                            "        <td>&lt;1</td>\n" +
                            "        <td><font>2.4×10</font><font\n" +
                            "        ><sup>4</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A42-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>2</td>\n" +
                            "        <td>&lt;1</td>\n" +
                            "        <td><font>2.7×10</font><font\n" +
                            "        ><sup>4</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td>A43-A/B\n" +
                            "        </td>\n" +
                            "        <td>A</td>\n" +
                            "        <td>3</td>\n" +
                            "        <td>&lt;1</td>\n" +
                            "        <td><font>1.2×10</font><font\n" +
                            "        ><sup>4</sup></font></td>\n" +
                            "        <td>未检出</td>\n" +
                            "        <td>未检出</td>\n" +
                            "    </tr>\n" +
                            "    </tbody>\n" +
                            "</table>"
                        var table12 = "<table  class=\"table table-bordered table-striped\" style=\"\">\n" +
                            "    <tbody>\n" +
                            "    <tr>\n" +
                            "        <td rowspan=\"2\">样品名称\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"2\">采样点</td>\n" +
                            "        <td rowspan=\"2\">编号</td>\n" +
                            "        <td rowspan=\"2\">送检批次</td>\n" +
                            "        <td rowspan=\"2\">取样编号</td>\n" +
                            "        <td colspan=\"2\">大肠菌群(CFU/mL）</td>\n" +
                            "        <td colspan=\"2\">菌落总数（CFU/mL)</td>\n" +
                            "        <td></td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >采样时间<br>\n" +
                            "            （2022/4/11）\n" +
                            "        </td>\n" +
                            "        <td>采样时间<br>\n" +
                            "            （2022/8/2）\n" +
                            "        </td>\n" +
                            "        <td>采样时间<br>\n" +
                            "            （2022/4/11）\n" +
                            "        </td>\n" +
                            "        <td >采样时间<br>\n" +
                            "            （2022/8/2）\n" +
                            "        </td>\n" +
                            "        <td></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"9\" >原料奶<br>\n" +
                            "            （样品数量200mL）\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"3\" >泌乳牛栏\n" +
                            "        </td>\n" +
                            "        <td >A11</td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td >27</td>\n" +
                            "        <td ><font >5.3×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td   >A12\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td >9</td>\n" +
                            "        <td ><font >4.9×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td   >A13\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td >17</td>\n" +
                            "        <td ><font >6.3×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"3\" >挤奶栏\n" +
                            "        </td>\n" +
                            "        <td >A21</td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td ><font >5.5×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >9.2×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >1.9×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "        <td ><font >1.3×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td   >A22\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td ><font >4.6×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >5.9×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >2.7×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "        <td ><font >7.7×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td   >A23\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td ><font >6.2×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >8.7×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >1.9×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "        <td ><font >7.4×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"3\" >储奶罐\n" +
                            "        </td>\n" +
                            "        <td >A31</td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td >17</td>\n" +
                            "        <td ><font >4.3×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >5.7×10</font><font\n" +
                            "                ><sup>3</sup></font></td>\n" +
                            "        <td ><font >1.3×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td   >A32\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td >11</td>\n" +
                            "        <td ><font >4.1×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >4.5×10</font><font\n" +
                            "                ><sup>3</sup></font></td>\n" +
                            "        <td ><font >1.5×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td   >A33\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td >20</td>\n" +
                            "        <td ><font >1.0×10</font><font\n" +
                            "                ><sup>3</sup></font></td>\n" +
                            "        <td ><font >4.5×10</font><font\n" +
                            "                ><sup>3</sup></font></td>\n" +
                            "        <td ><font >2.3×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ></td>\n" +
                            "    </tr>\n" +
                            "    </tbody>\n" +
                            "</table>"
                        var table21 = "<table class=\"table table-bordered table-striped\">\n" +
                            "    <tbody>\n" +
                            "    <tr>\n" +
                            "        <td >样品名称</td>\n" +
                            "        <td >采样点</td>\n" +
                            "        <td >编号</td>\n" +
                            "        <td >送检批次</td>\n" +
                            "        <td >取样编号</td>\n" +
                            "        <td>采样时间</td>\n" +
                            "        <td >大肠菌群(CFU/g）</td>\n" +
                            "        <td >菌落总数（CFU/g)</td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"9\" >原料奶<br>\n" +
                            "            （样品数量200mL）\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"3\" >泌乳牛栏</td>\n" +
                            "        <td >A11</td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td rowspan=\"9\" >2022/8/2</td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td ><font >5.3×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >A12\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td ><font >4.9×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >A13\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td ><font >&lt;1</font></td>\n" +
                            "        <td ><font >6.3×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"3\" >挤奶栏</td>\n" +
                            "        <td >A21</td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td ><font >9.2×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >1.3×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >A22\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td ><font >5.9×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >7.7×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >A23\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td ><font >8.7×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >7.4×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"3\" >储奶罐</td>\n" +
                            "        <td >A31</td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td ><font >4.3×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >1.3×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >A32\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td ><font >4.1×10</font><font\n" +
                            "                ><sup>2</sup></font></td>\n" +
                            "        <td ><font >1.5×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >A33\n" +
                            "        </td>\n" +
                            "        <td >A</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td ><font >1.0×10</font><font\n" +
                            "                ><sup>3</sup></font></td>\n" +
                            "        <td ><font >2.3×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"3\" >饲料<br>\n" +
                            "            （样品数量500g）\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"3\" >泌乳牛栏</td>\n" +
                            "        <td >B11</td>\n" +
                            "        <td >B</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td rowspan=\"3\" >2022/8/2</td>\n" +
                            "        <td ><font >6.1×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "        <td ><font >1.4×10</font><font\n" +
                            "                ><sup>7</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >B12\n" +
                            "        </td>\n" +
                            "        <td >B</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td ><font >1.1×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ><font >2.3×10</font><font\n" +
                            "                ><sup>7</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >B13\n" +
                            "        </td>\n" +
                            "        <td >B</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td ><font >1.1×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ><font >2.4×10</font><font\n" +
                            "                ><sup>7</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"3\" >牛床垫料<br>\n" +
                            "            （样品数量500g）\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"3\" >泌乳牛栏</td>\n" +
                            "        <td >C11</td>\n" +
                            "        <td >C</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td rowspan=\"3\" >2022/8/2</td>\n" +
                            "        <td ><font >5.4×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "        <td ><font >7.3×10</font><font\n" +
                            "                ><sup>7</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >C12\n" +
                            "        </td>\n" +
                            "        <td >C</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td ><font >1.1×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ><font >9.2×10</font><font\n" +
                            "                ><sup>7</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >C13\n" +
                            "        </td>\n" +
                            "        <td >C</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td ><font >1.3×10</font><font\n" +
                            "                ><sup>5</sup></font></td>\n" +
                            "        <td ><font >6.4×10</font><font\n" +
                            "                ><sup>7</sup></font></td>\n" +
                            "    </tr></tbody></table>"
                        var table22 = "<table class=\"table table-bordered table-striped\"><tbody>  <tr >\n" +
                            "        <td >样品名称</td>\n" +
                            "        <td >采样点</td>\n" +
                            "        <td >编号</td>\n" +
                            "        <td >送检批次</td>\n" +
                            "        <td >取样编号</td>\n" +
                            "        <td >采样时间</td>\n" +
                            "        <td ><font >总大肠菌群(MPN/100mL）</font>\n" +
                            "        </td>\n" +
                            "        <td ><font >菌落总数（CFU/mL)</font>\n" +
                            "        </td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"6\" >水<br>\n" +
                            "            （样品数量500mL）\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"3\" >泌乳牛栏</td>\n" +
                            "        <td >D11</td>\n" +
                            "        <td >D</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td rowspan=\"6\" >2022/8/2\n" +
                            "        </td>\n" +
                            "        <td >49</td>\n" +
                            "        <td ><font >8.8×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >D12\n" +
                            "        </td>\n" +
                            "        <td >D</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td >46</td>\n" +
                            "        <td ><font >3.6×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >D13\n" +
                            "        </td>\n" +
                            "        <td >D</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td >130</td>\n" +
                            "        <td ><font >5.5×10</font><font\n" +
                            "                ><sup>4</sup></font></td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td rowspan=\"3\" >挤奶栏\n" +
                            "        </td>\n" +
                            "        <td >D21</td>\n" +
                            "        <td >D</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td >未检出</td>\n" +
                            "        <td >未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >D22\n" +
                            "        </td>\n" +
                            "        <td >D</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td >未检出</td>\n" +
                            "        <td >未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >D23\n" +
                            "        </td>\n" +
                            "        <td >D</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td >未检出</td>\n" +
                            "        <td >未检出</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >样品名称</td>\n" +
                            "        <td >采样点</td>\n" +
                            "        <td >编号</td>\n" +
                            "        <td >送检批次</td>\n" +
                            "        <td >取样编号</td>\n" +
                            "        <td >采样时间</td>\n" +
                            "        <td colspan=\"2\">沉降菌（CFU/皿）\n" +
                            "        </td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td rowspan=\"5\" >空气<br>\n" +
                            "            （样品数量1个）\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"5\" >泌乳牛栏</td>\n" +
                            "        <td >E11</td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td rowspan=\"5\" >2022/8/2</td>\n" +
                            "        <td colspan=\"2\">75</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >E12\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td colspan=\"2\">81</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >E13\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td colspan=\"2\">51</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >E14\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >4</td>\n" +
                            "        <td colspan=\"2\">47</td>\n" +
                            "    </tr>\n" +
                            "    <tr>\n" +
                            "        <td >E15\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >5</td>\n" +
                            "        <td colspan=\"2\">63</td>\n" +
                            "    </tr>\n" +
                            "\n" +
                            "    </tbody>\n" +
                            "</table>"
                        var table23 = "<table class=\"table table-bordered table-striped\">\n" +
                            "    <tbody>\n" +
                            "    <tr >\n" +
                            "        <td >样品名称</td>\n" +
                            "        <td >采样点</td>\n" +
                            "        <td >编号</td>\n" +
                            "        <td >送检批次</td>\n" +
                            "        <td >取样编号</td>\n" +
                            "        <td >采样时间</td>\n" +
                            "        <td colspan=\"2\" >沉降菌（CFU/皿）\n" +
                            "        </td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td rowspan=\"5\" >空气<br>\n" +
                            "            （样品数量1个）\n" +
                            "        </td>\n" +
                            "        <td rowspan=\"5\" >泌乳牛栏</td>\n" +
                            "        <td >E11</td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >1</td>\n" +
                            "        <td rowspan=\"5\" >2022/8/2</td>\n" +
                            "        <td colspan=\"2\" >75</td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >E12\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >2</td>\n" +
                            "        <td colspan=\"2\" >81</td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >E13\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >3</td>\n" +
                            "        <td colspan=\"2\" >51</td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >E14\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >4</td>\n" +
                            "        <td colspan=\"2\" >47</td>\n" +
                            "    </tr>\n" +
                            "    <tr >\n" +
                            "        <td >E15\n" +
                            "        </td>\n" +
                            "        <td >E</td>\n" +
                            "        <td >5</td>\n" +
                            "        <td colspan=\"2\" >63</td>\n" +
                            "    </tr>\n" +
                            "\n" +
                            "    </tbody>\n" +
                            "</table>"
                        innierdiv1.append(table11)
                        innierdiv1.append(table12)

                        innierdiv2.append(table21)
                        innierdiv2.append(table22)
                        innierdiv2.append(table23)
                        div.append(innierdiv1)
                        div.append(innierdiv2)
                        $("#mapmodel").append(div);
                    }
                    $("#but1").click(function () {
                        innerdiv1.style.display = 'block';
                        innerdiv2.style.display = 'none';
                    });

                    $("#but2").click(function () {
                        innerdiv2.style.display = 'block';
                        innerdiv1.style.display = 'none';
                    });
                } else if (datainfo == "baomi") {
                    //苞米
                    let baomiddd = shuju.find(p => p.name == params.name).value
                    // 创建表格元素
                    var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;'></table>");
                    // 添加表头和表格内容
                    for (var i = 0; i < baomiddd.length; i++) {
                        var row = $("<tr></tr>");
                        for (var j = 0; j < baomiddd[i].length; j++) {
                            var cell = i === 0 ? "<th>" : "<td>";
                            cell += baomiddd[i][j];
                            cell += i === 0 ? "</th>" : "</td>";
                            row.append(cell);
                        }
                        table.append(row);
                    }
                    // 将表格添加到指定 div 中
                    div.append(table)
                    $("#mapmodel").append(div);
                }
                //放外面
                $(".modal-title").text(params.name);
                $('#customModal').on('hide.bs.modal', function (e) {
                    // alert("我这就关")
                    div.remove()
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

        optionmap = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (typeof (params.value)[2] == "undefined") {
                        // return params.name + ' : ' + params.value;
                        return params.name
                    } else {
                        // return params.name + ' : ' + params.value[2];
                        return params.name
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

        myChart.setOption(optionmap);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

})



