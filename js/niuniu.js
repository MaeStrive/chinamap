$(function () {
    // var innerdiv1New = $("<div id='innerdiv1New' style='display: block;overflow: auto;height: 500px;'></div>")
    // var innerdiv2New = $("<div id='innerdiv2New' style='display: none'></div>")
    // var divbutton = $("<div style='text-align: center'><button class=\"btn btn-primary niubutton\" id='but1New'>养殖场环境参数</button>&emsp;&emsp;&emsp;" +
    //     "<button class=\"btn btn-info niubutton\" id='but2New'>生物危害数据库</button></div>")
    // var titleArr = junzhudata1[0]
    // console.log(titleArr)

    //第一行去重当搜索框
    var titleArr = niudata2[0].filter((item, index) => niudata2[0].indexOf(item) === index);
    console.log(titleArr)

    var uniqueColumns = [];
    var titlesPushed = [];
    for (var i = 0; i < niudata2[0].length; i++) {
        if (niudata2[1][i] === niudata2[0][i]) {
            //取这列去重
            var column = niudata2.map(function (value) {
                return value[i];
            });

            var uniqueColumn = column.filter(function (item, index, self) {
                if (index == 0 || index == 1) return false;
                return item !== "" && self.indexOf(item) === index;
            });
            uniqueColumns.push(uniqueColumn);
        } else {
            //取第二行的值
            var teColumn = []
            var selectTitle = niudata2[0][i];
            if (!titlesPushed.includes(selectTitle)) {
                titlesPushed.push(selectTitle)
                for (let k = i; k < niudata2[0].length; k++) {
                    if (niudata2[0][k] === selectTitle) {
                        teColumn.push(niudata2[1][k])
                    }
                }
                uniqueColumns.push(teColumn);
            }
        }
    }
    console.log(uniqueColumns);
    $(".niuniu").click(function () {
        var innerdiv1New = $("<div id='innerdiv1New' style='display: block;overflow: auto;height: 500px;'></div>")
        var innerdiv2New = $("<div id='innerdiv2New' style='display: none'></div>")
        var divbutton = $("<div style='text-align: center'><button class=\"btn btn-primary niubutton\" id='but1New'>养殖场环境参数</button>&emsp;&emsp;&emsp;" +
            "<button class=\"btn btn-info niubutton\" id='but2New'>生物危害数据库</button></div>")

        $('#customModal').modal('show');
        var div = $("<div></div>")
        div.append(divbutton)
        var table = $("<table class=\"table table-bordered table-striped table-hover\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < niudata1.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < niudata1[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += niudata1[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            table.append(row);
        }
        innerdiv1New.append(table)
        var outerdiv = $("<div></div>")
        var innerdiv1 = $("<div style='text-align: left;margin-top: 15px;margin-left: 10%'></div>")
        var innerdiv2 = $("<div style='text-align: left;margin-top: 10px;margin-left: 10%'></div>")
        var innerdiv3 = $("<div style='text-align: left;margin-top: 10px;margin-left: 10%'></div>")
        var innerdiv4 = $("<div style='text-align: center;margin-top: 10px'></div>")
        var selectitem = new Array(15).fill(0);
        var checkbox = new Array(15).fill(0);

        selectitem.forEach(function (value, index, array) {
            if (index == 0)
                checkbox[index] = $("<input type='checkbox' id='checkbox" + index + "' style='margin-right: 5px' checked disabled></input>");
            else
                checkbox[index] = $("<input type='checkbox' id='checkbox" + index + "' style='margin-right: 5px'></input>");
            selectitem[index] = $("<select class=\"custom-select\" id='select" + index + "' aria-label=\"\" style='width: 10%;margin-right: 10px;font-size: 13px'></select>")
        })
        uniqueColumns.forEach(function (value, index, array) {
            uniqueColumns[index].forEach(function (option) {
                selectitem[index].append($('<option value=' + option + '>' + option + '</option>'));
            })
            if (index < 5) {
                innerdiv1.append(checkbox[index]);
                innerdiv1.append($("<span class='selecto" + index + "'>" + titleArr[index] + "：</span>"))
                innerdiv1.append(selectitem[index])
            } else if (index < 10) {
                innerdiv2.append(checkbox[index]);
                innerdiv2.append($("<span class='selecto" + index + "'>" + titleArr[index] + "：</span>"))
                innerdiv2.append(selectitem[index])
            } else if (index < 15) {
                innerdiv3.append(checkbox[index]);
                innerdiv3.append($("<span class='selecto" + index + "'>" + titleArr[index] + "：</span>"))
                innerdiv3.append(selectitem[index])
            } else if (index < 20) {
                innerdiv4.append($("<span>" + titleArr[index] + "：</span>"))
                innerdiv4.append(selectitem[index])
            }
        })

        var tabledata = []
        junzhudata1.forEach(function (value, index, array) {
            tabledata.push(value)
        })
        var tableBoder = $("<div style='height: 500px;overflow: auto'></<div>");

        var tableddd = $("<table class=\"table table-bordered table-striped table-fixed-header table-hover\" style='font-size: 16px;margin-top: 10px; table-layout: fixed;'></table>");
        var headerRow = $("<tr></tr>");

        // 添加表头
        for (var j = 0; j < tabledata[0].length; j++) {
            var headerCell = ''
            if (j >= 45 && j <= 106)
                headerCell = $("<th style='width: 220px;font-style: italic'>" + tabledata[0][j] + "</th>");
            else
                headerCell = $("<th style='width: 220px;'>" + tabledata[0][j] + "</th>");
            headerRow.append(headerCell);
        }
        tableddd.append($("<thead style='position: sticky;top:0;z-index:1;background-color: #fff3cd'></thead>").append(headerRow));
        // 将表头包在 thead 标签内
        // 添加表格内容
        var tbody = $("<tbody></tbody>");
        for (var i = 1; i < tabledata.length; i++) {
            var row = $("<tr  class='table-success'></tr>");
            for (var j = 0; j < tabledata[i].length; j++) {
                var cell = "<td style='width: 220px;'>" + tabledata[i][j] + "</td>";
                row.append(cell);
            }
            tbody.append(row);
        }
        tableddd.append(tbody);
        tableBoder.append(tableddd)


        outerdiv.append(innerdiv1)
        outerdiv.append(innerdiv2)
        outerdiv.append(innerdiv3)
        outerdiv.append(innerdiv4)
        outerdiv.append($("<div style='margin-top: 15px;text-align: center'><button class=\"btn btn-success query niubutton\" style='width: 10%'>查询</button>&emsp;&emsp;" +
            "<button class=\"btn btn-success yi danger niubutton\" style='width: 10%'>显示全部</button></div>"))
        innerdiv2New.append(outerdiv)
        innerdiv2New.append(tableBoder)
        innerdiv2New.append($("<div style='margin-top: 10px;text-align: center'>" +
            "<button class=\"btn btn-primary pagebtn yi\">第一页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn er\">第二页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn san\">第三页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn si\">第四页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn wu\">第五页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn liu\">第六页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn qi\">第七页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn ba\">第八页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn jiu\">第九页</button>&emsp;&emsp;" +
            "<button class=\"btn btn-primary pagebtn shi\">第十页</button>&emsp;&emsp;" +
            "</div>"))
        div.append(innerdiv1New)
        div.append(innerdiv2New)

        $("#mapmodel").append(div);

        $("#but1New").click(function () {
            innerdiv1New.css({display: "block"})
            innerdiv2New.css({display: "none"})
        });
        $(".query").click(function () {
            console.log("query")
            var checkboxArroo = new Array(14).fill(0);

            for (var i = 0; i < 14; i++) {
                var checkboxIsChecked = $("#checkbox" + i).is(":checked");
                if (checkboxIsChecked) {
                    checkboxArroo[i] = 1
                }
            }
            var allZeros = checkboxArroo.every(function (element) {
                return element === 0;
            });
            console.log(allZeros)
            if (allZeros) {
                alldataFunction(junzhudata1)
            } else {
                tableddd.empty()
                headerRow.empty()
                var onesCount = checkboxArroo.filter(function (element) {
                    return element === 1;
                }).length;
                tabledata = []
                var titlePush = []
                console.log(onesCount)
                niudata2.forEach(function (value, index, array) {
                    var j = 0;//标题的下标
                    if (index == 0) {
                    } else if (index == 1) tabledata.push(value)
                    else {
                        let len = 0;
                        for (let i = 0; i < value.length; i++) {
                            if (niudata2[0][i] === niudata2[1][i]) {
                                console.log(value[i])
                                console.log(selectitem[j].val())
                                if (value[i] === selectitem[j].val() && checkboxArroo[j]) {
                                    len++;
                                }
                                j++;
                            } else {
                                if (selectitem[j].val() === niudata2[1][i] && checkboxArroo[j]) {
                                    if (value[i] !== '-' && value[i] !== '')
                                        len++;
                                }
                                if (!titlePush.includes(niudata2[0][i])) {
                                    titlePush.push(niudata2[0][i]);
                                    j++;
                                }
                            }
                            if (len === onesCount) {
                                tabledata.push(value)
                                break;
                            }
                        }
                    }
                })
                console.log(tabledata)
                // 添加表头
                for (var j = 0; j < tabledata[0].length; j++) {
                    var headerCell = ''
                    if (j >= 45 && j <= 106)
                        headerCell = $("<th style='width: 220px;font-style: italic'>" + tabledata[0][j] + "</th>");
                    else
                        headerCell = $("<th style='width: 220px;'>" + tabledata[0][j] + "</th>");
                    headerRow.append(headerCell);
                }
                tableddd.append($("<thead style='position: sticky;top:0;z-index:1;background-color: #fff3cd'></thead>").append(headerRow));
                // 将表头包在 thead 标签内
                // 添加表格内容
                var tbody = $("<tbody></tbody>");
                for (var i = 1; i < tabledata.length; i++) {
                    var row = $("<tr  class='table-success'></tr>");
                    for (var j = 0; j < tabledata[i].length; j++) {
                        var cell = "<td style='width: 220px;'>" + tabledata[i][j] + "</td>";
                        row.append(cell);
                    }
                    tbody.append(row);
                }
                tableddd.append(tbody);
            }

            // 47-108   45-106

            // var checkbox0IsChecked = $("#checkbox0").is(":checked");
            // var checkbox1IsChecked = $("#checkbox1").is(":checked");
            // console.log(selectitem[0].val())

        })




        function alldataFunction(page) {
            tableddd.empty()
            headerRow.empty()
            tabledata = []

            page.forEach(function (value, index, array) {
                tabledata.push(value)
            })
            // 添加表头
            for (var j = 0; j < tabledata[0].length; j++) {
                var headerCell = ''
                if (j >= 45 && j <= 106)
                    headerCell = $("<th style='width: 220px;font-style: italic'>" + tabledata[0][j] + "</th>");
                else
                    headerCell = $("<th style='width: 220px;'>" + tabledata[0][j] + "</th>");
                headerRow.append(headerCell);
            }
            tableddd.append($("<thead style='position: sticky;top:0;z-index:1;background-color: #fff3cd'></thead>").append(headerRow));
            // 将表头包在 thead 标签内
            // 添加表格内容
            var tbody = $("<tbody></tbody>");
            for (var i = 1; i < tabledata.length; i++) {
                var row = $("<tr  class='table-success'></tr>");
                for (var j = 0; j < tabledata[i].length; j++) {
                    var cell = "<td style='width: 220px;'>" + tabledata[i][j] + "</td>";
                    row.append(cell);
                }
                tbody.append(row);
            }
            tableddd.append(tbody);
            tableBoder.append(tableddd)
        }

        $(".yi").click(function () {
            alldataFunction(junzhudata1)
        })
        $(".er").click(function () {
            alldataFunction(junzhudata2)
        })
        $(".san").click(function () {
            alldataFunction(junzhudata3)
        })
        $(".si").click(function () {
            alldataFunction(junzhudata4)
        })
        $(".wu").click(function () {
            alldataFunction(junzhudata5)
        })
        $(".liu").click(function () {
            alldataFunction(junzhudata6)
        })
        $(".qi").click(function () {
            alldataFunction(junzhudata7)
        })
        $(".ba").click(function () {
            alldataFunction(junzhudata8)
        })
        $(".jiu").click(function () {
            alldataFunction(junzhudata9)
        })
        $(".shi").click(function () {
            alldataFunction(junzhudata10)
        })


        $("#but2New").click(function () {
            innerdiv2New.css({display: "block"})
            innerdiv1New.css({display: "none"})
        });
        $(".modal-title").text("");
        $('#customModal').on('hide.bs.modal', function (e) {
            // alert("我这就关")
            div.remove()
            outerdiv.remove()
            innerdiv1New.remove()
            // innerdiv2New=''
            innerdiv2New.remove()
            tableddd.remove()
            tableBoder.remove()
            headerRow.remove()
            headerCell.remove()
            tbody.remove()
            console.log(innerdiv2New)
        });
        $("#checkbox0").on('change', function () {
            console.log(66666)
            if (selectitem[0].val()=='Salmonella') {
                $("#checkbox1").checked=true
                $("#checkbox1").disabled =true
            }
        })
    })


})

