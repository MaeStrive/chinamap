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



