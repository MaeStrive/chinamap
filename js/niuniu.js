$(function () {
    var innerdiv1New = $("<div id='innerdiv1New' style='display: block;overflow: auto;height: 500px;'></div>")
    var innerdiv2New = $("<div id='innerdiv2New' style='display: none'></div>")
    var divbutton = $("<div style='text-align: center'><button class=\"btn btn-primary niubutton\" id='but1New'>奶牛养殖场环境参数</button>&emsp;&emsp;&emsp;" +
        "<button class=\"btn btn-info niubutton\" id='but2New'>生物危害数据库</button></div>")
    // var titleArr = niudata2[0]
    // console.log(titleArr)

    //第一行去重当搜索框
    var titleArr = niudata2[0].filter((item, index) => niudata2[0].indexOf(item) === index);
    console.log(titleArr)

    //取每列的选项
    // 获取每一列并去重打印
    var uniqueColumns = [];
    var titlesPushed = [];

    for (var i = 0; i < niudata2[0].length; i++) {
        if (niudata2[1][i] === niudata2[0][i]) {
            //取这列去重
            var column = niudata2.map(function (value) {
                return value[i];
            });

            var uniqueColumn = column.filter(function (item, index, self) {
                return self.indexOf(item) === index;
            });
            uniqueColumns.push(uniqueColumn.slice(2));
            // console.log(uniqueColumn.slice(2))
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
        $('#customModal').modal('show');
        var div = $("<div></div>")
        div.append(divbutton)
        var table = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
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
        var innerdiv1 = $("<div style='text-align: center;margin-top: 15px'></div>")
        var innerdiv2 = $("<div style='text-align: center;margin-top: 10px'></div>")
        var innerdiv3 = $("<div style='text-align: center;margin-top: 10px'></div>")
        var innerdiv4 = $("<div style='text-align: center;margin-top: 10px'></div>")
        var selectitem = new Array(15).fill(0);
        selectitem.forEach(function (value, index, array) {
            selectitem[index] = $("<select class=\"custom-select\" id='select" + index + "' aria-label=\"\" style='width: 10%;margin-right: 10px'></select>")
        })
        // uniqueColumns[0].forEach(function (option) {
        //     console.log(option)
        //     selectdiv1.append($('<option value=' + option + '">' + option + '</option>'));
        // })
        uniqueColumns.forEach(function (value, index, array) {
            uniqueColumns[index].forEach(function (option) {
                selectitem[index].append($('<option value=' + option + '>' + option + '</option>'));
            })
            if (index < 5) {
                innerdiv1.append($("<span>" + titleArr[index] + "：</span>"))
                innerdiv1.append(selectitem[index])
            } else if (index < 10) {
                innerdiv2.append($("<span>" + titleArr[index] + "：</span>"))
                innerdiv2.append(selectitem[index])
            } else if (index < 15) {
                innerdiv3.append($("<span>" + titleArr[index] + "：</span>"))
                innerdiv3.append(selectitem[index])
            } else if (index < 20) {
                innerdiv4.append($("<span>" + titleArr[index] + "：</span>"))
                innerdiv4.append(selectitem[index])
            }
        })

        var tabledata = []
        niudata2.forEach(function (value, index, array) {
            if (index !== 0)
                tabledata.push(value)
            // if (index == 0) tabledata.push(value)
            // else {
            //     let len = 0;
            //     for (let i = 0; i < value.length; i++) {
            //         if (value[i] == selectitem[i].val()) {
            //             len++
            //             if (len == 15) {
            //                 tabledata.push(value)
            //             }
            //         }
            //     }
            // }
        })
        var tableBoder = $("<div style='height: 500px;overflow: auto'></<div>");
        var tableddd = $("<table class=\"table table-bordered table-striped\" style='font-size: 16px;margin-top: 10px'></table>");
        // 添加表头和表格内容
        for (var i = 0; i < tabledata.length; i++) {
            var row = $("<tr></tr>");
            for (var j = 0; j < tabledata[i].length; j++) {
                var cell = i === 0 ? "<th>" : "<td>";
                cell += tabledata[i][j];
                cell += i === 0 ? "</th>" : "</td>";
                row.append(cell);
            }
            tableddd.append(row);
        }
        tableBoder.append(tableddd)


        outerdiv.append(innerdiv1)
        outerdiv.append(innerdiv2)
        outerdiv.append(innerdiv3)
        outerdiv.append(innerdiv4)
        outerdiv.append($("<div style='margin-top: 15px;text-align: center'><button class=\"btn btn-success query niubutton\" style='width: 10%'>查询</button>" +
            "&emsp;&emsp;<button class=\"btn btn-warning queryAll niubutton\" style='width: 10%'>显示全部</button></div>"))
        innerdiv2New.append(outerdiv)
        innerdiv2New.append(tableBoder)
        div.append(innerdiv1New)
        div.append(innerdiv2New)

        $("#mapmodel").append(div);

        $("#but1New").click(function () {
            innerdiv1New.css({display: "block"})
            innerdiv2New.css({display: "none"})
        });
        $(".query").click(function () {
            console.log("query")
            console.log(selectitem[0].val())
            tableddd.empty()
            tabledata = []
            niudata2.forEach(function (value, index, array) {
                if (index == 0) {}
                else  if (index == 1) tabledata.push(value)
                else {
                    let len = 0;
                    for (let i = 0; i < value.length; i++) {
                        if (value[i] == selectitem[i].val()) {
                            len++
                            if (len == 15) {
                                tabledata.push(value)
                            }
                        }
                    }
                }
            })
            console.log(tabledata)
            for (var i = 0; i < tabledata.length; i++) {
                var row = $("<tr></tr>");
                for (var j = 0; j < tabledata[i].length; j++) {
                    var cell = i === 0 ? "<th>" : "<td>";
                    cell += tabledata[i][j];
                    cell += i === 0 ? "</th>" : "</td>";
                    row.append(cell);
                }
                tableddd.append(row);
            }
        })


        $(".queryAll").click(function () {
            tableddd.empty()
            tabledata = []
            niudata2.forEach(function (value, index, array) {
                tabledata.push(value)
            })
            console.log(tabledata)
            for (var i = 0; i < tabledata.length; i++) {
                var row = $("<tr></tr>");
                for (var j = 0; j < tabledata[i].length; j++) {
                    var cell = i === 0 ? "<th>" : "<td>";
                    cell += tabledata[i][j];
                    cell += i === 0 ? "</th>" : "</td>";
                    row.append(cell);
                }
                tableddd.append(row);
            }
        })

        $("#but2New").click(function () {
            innerdiv2New.css({display: "block"})
            innerdiv1New.css({display: "none"})
        });
        $(".modal-title").text("牛");
        $('#customModal').on('hide.bs.modal', function (e) {
            // alert("我这就关")
            div.remove()
            outerdiv.remove()
            innerdiv1New.remove()
            innerdiv2New.remove()
            tableddd.remove()
            tableBoder.remove()
        });
    })


})