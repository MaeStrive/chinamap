$(function () {
   var myChart = echarts.init(document.getElementById('contextmenu'));

    var struct_colors = [
        "#ed6f6d",
        "#f3765d",
        "#f77a57",
        "#f98866",
        "#f99579",
        "#ff9f3b",
        "#f0a732",
        "#e6a840",
        "#e9b253",
        "#ebbb66",
        "#78b7e8",
        "#59b1f3",
        "#66bbf5",
        "#6ec3f2",
        "#75cae2",
        "#70cccc",
        "#5dc4c4",
        "#4dbebd",
        "#4cc1a7",
        "#4fca96",
        "#4cc686",
    ];
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
    var info2 = {
        name: "flare",
        children: [
            {
                name: "analytics",
                children: [
                    {
                        name: "cluster",
                        children: [
                            { name: "AgglomerativeCluster", value: 3938 },
                            { name: "CommunityStructure", value: 3812 },
                            { name: "HierarchicalCluster", value: 6714 },
                            { name: "MergeEdge", value: 743 },
                        ],
                    },
                    {
                        name: "graph",
                        children: [
                            { name: "BetweennessCentrality", value: 3534 },
                            { name: "LinkDistance", value: 5731 },
                            { name: "MaxFlowMinCut", value: 7840 },
                            { name: "ShortestPaths", value: 5914 },
                            { name: "SpanningTree", value: 3416 },
                        ],
                    },
                    {
                        name: "optimization",
                        children: [{ name: "AspectRatioBanker", value: 7074 }],
                    },
                ],
            },
            {
                name: "animate",
                children: [
                    { name: "Easing", value: 17010 },
                    { name: "FunctionSequence", value: 5842 },
                    {
                        name: "interpolate",
                        children: [
                            { name: "ArrayInterpolator", value: 1983 },
                            { name: "ColorInterpolator", value: 2047 },
                            { name: "DateInterpolator", value: 1375 },
                            { name: "Interpolator", value: 8746 },
                            { name: "MatrixInterpolator", value: 2202 },
                            { name: "NumberInterpolator", value: 1382 },
                            { name: "ObjectInterpolator", value: 1629 },
                            { name: "PointInterpolator", value: 1675 },
                            { name: "RectangleInterpolator", value: 2042 },
                        ],
                    },
                    { name: "ISchedulable", value: 1041 },
                    { name: "Parallel", value: 5176 },
                    { name: "Pause", value: 449 },
                    { name: "Scheduler", value: 5593 },
                    { name: "Sequence", value: 5534 },
                    { name: "Transition", value: 9201 },
                    { name: "Transitioner", value: 19975 },
                    { name: "TransitionEvent", value: 1116 },
                    { name: "Tween", value: 6006 },
                ],
            },
            {
                name: "data",
                children: [
                    {
                        name: "converters",
                        children: [
                            { name: "Converters", value: 721 },
                            { name: "DelimitedTextConverter", value: 4294 },
                            { name: "GraphMLConverter", value: 9800 },
                            { name: "IDataConverter", value: 1314 },
                            { name: "JSONConverter", value: 2220 },
                        ],
                    },
                    { name: "DataField", value: 1759 },
                    { name: "DataSchema", value: 2165 },
                    { name: "DataSet", value: 586 },
                    { name: "DataSource", value: 3331 },
                    { name: "DataTable", value: 772 },
                    { name: "DataUtil", value: 3322 },
                ],
            },
            {
                name: "display",
                children: [
                    { name: "DirtySprite", value: 8833 },
                    { name: "LineSprite", value: 1732 },
                    { name: "RectSprite", value: 3623 },
                    { name: "TextSprite", value: 10066 },
                ],
            },
            {
                name: "flex",
                children: [{ name: "FlareVis", value: 4116 }],
            },
            {
                name: "physics",
                children: [
                    { name: "DragForce", value: 1082 },
                    { name: "GravityForce", value: 1336 },
                    { name: "IForce", value: 319 },
                    { name: "NBodyForce", value: 10498 },
                    { name: "Particle", value: 2822 },
                    { name: "Simulation", value: 9983 },
                    { name: "Spring", value: 2213 },
                    { name: "SpringForce", value: 1681 },
                ],
            },
            {
                name: "query",
                children: [
                    { name: "AggregateExpression", value: 1616 },
                    { name: "And", value: 1027 },
                    { name: "Arithmetic", value: 3891 },
                    { name: "Average", value: 891 },
                    { name: "BinaryExpression", value: 2893 },
                    { name: "Comparison", value: 5103 },
                    { name: "CompositeExpression", value: 3677 },
                    { name: "Count", value: 781 },
                    { name: "DateUtil", value: 4141 },
                    { name: "Distinct", value: 933 },
                    { name: "Expression", value: 5130 },
                    { name: "ExpressionIterator", value: 3617 },
                    { name: "Fn", value: 3240 },
                    { name: "If", value: 2732 },
                    { name: "IsA", value: 2039 },
                    { name: "Literal", value: 1214 },
                    { name: "Match", value: 3748 },
                    { name: "Maximum", value: 843 },
                    {
                        name: "methods",
                        children: [
                            { name: "add", value: 593 },
                            { name: "and", value: 330 },
                            { name: "average", value: 287 },
                            { name: "count", value: 277 },
                            { name: "distinct", value: 292 },
                            { name: "div", value: 595 },
                            { name: "eq", value: 594 },
                            { name: "fn", value: 460 },
                            { name: "gt", value: 603 },
                            { name: "gte", value: 625 },
                            { name: "iff", value: 748 },
                            { name: "isa", value: 461 },
                            { name: "lt", value: 597 },
                            { name: "lte", value: 619 },
                            { name: "max", value: 283 },
                            { name: "min", value: 283 },
                            { name: "mod", value: 591 },
                            { name: "mul", value: 603 },
                            { name: "neq", value: 599 },
                            { name: "not", value: 386 },
                            { name: "or", value: 323 },
                            { name: "orderby", value: 307 },
                            { name: "range", value: 772 },
                            { name: "select", value: 296 },
                            { name: "stddev", value: 363 },
                            { name: "sub", value: 600 },
                            { name: "sum", value: 280 },
                            { name: "update", value: 307 },
                            { name: "variance", value: 335 },
                            { name: "where", value: 299 },
                            { name: "xor", value: 354 },
                            { name: "-", value: 264 },
                        ],
                    },
                    { name: "Minimum", value: 843 },
                    { name: "Not", value: 1554 },
                    { name: "Or", value: 970 },
                    { name: "Query", value: 13896 },
                    { name: "Range", value: 1594 },
                    { name: "StringUtil", value: 4130 },
                    { name: "Sum", value: 791 },
                    { name: "Variable", value: 1124 },
                    { name: "Variance", value: 1876 },
                    { name: "Xor", value: 1101 },
                ],
            },
            {
                name: "scale",
                children: [
                    { name: "IScaleMap", value: 2105 },
                    { name: "LinearScale", value: 1316 },
                    { name: "LogScale", value: 3151 },
                    { name: "OrdinalScale", value: 3770 },
                    { name: "QuantileScale", value: 2435 },
                    { name: "QuantitativeScale", value: 4839 },
                    { name: "RootScale", value: 1756 },
                    { name: "Scale", value: 4268 },
                    { name: "ScaleType", value: 1821 },
                    { name: "TimeScale", value: 5833 },
                ],
            },
            {
                name: "util",
                children: [
                    { name: "Arrays", value: 8258 },
                    { name: "Colors", value: 10001 },
                    { name: "Dates", value: 8217 },
                    { name: "Displays", value: 12555 },
                    { name: "Filter", value: 2324 },
                    { name: "Geometry", value: 10993 },
                    {
                        name: "heap",
                        children: [
                            { name: "FibonacciHeap", value: 9354 },
                            { name: "HeapNode", value: 1233 },
                        ],
                    },
                    { name: "IEvaluable", value: 335 },
                    { name: "IPredicate", value: 383 },
                    { name: "IValueProxy", value: 874 },
                    {
                        name: "math",
                        children: [
                            { name: "DenseMatrix", value: 3165 },
                            { name: "IMatrix", value: 2815 },
                            { name: "SparseMatrix", value: 3366 },
                        ],
                    },
                    { name: "Maths", value: 17705 },
                    { name: "Orientation", value: 1486 },
                    {
                        name: "palette",
                        children: [
                            { name: "ColorPalette", value: 6367 },
                            { name: "Palette", value: 1229 },
                            { name: "ShapePalette", value: 2059 },
                            { name: "SizePalette", value: 2291 },
                        ],
                    },
                    { name: "Property", value: 5559 },
                    { name: "Shapes", value: 19118 },
                    { name: "Sort", value: 6887 },
                    { name: "Stats", value: 6557 },
                    { name: "Strings", value: 22026 },
                ],
            },
            {
                name: "vis",
                children: [
                    {
                        name: "axis",
                        children: [
                            { name: "Axes", value: 1302 },
                            { name: "Axis", value: 24593 },
                            { name: "AxisGridLine", value: 652 },
                            { name: "AxisLabel", value: 636 },
                            { name: "CartesianAxes", value: 6703 },
                        ],
                    },
                    {
                        name: "controls",
                        children: [
                            { name: "AnchorControl", value: 2138 },
                            { name: "ClickControl", value: 3824 },
                            { name: "Control", value: 1353 },
                            { name: "ControlList", value: 4665 },
                            { name: "DragControl", value: 2649 },
                            { name: "ExpandControl", value: 2832 },
                            { name: "HoverControl", value: 4896 },
                            { name: "IControl", value: 763 },
                            { name: "PanZoomControl", value: 5222 },
                            { name: "SelectionControl", value: 7862 },
                            { name: "TooltipControl", value: 8435 },
                        ],
                    },
                    {
                        name: "data",
                        children: [
                            { name: "Data", value: 20544 },
                            { name: "DataList", value: 19788 },
                            { name: "DataSprite", value: 10349 },
                            { name: "EdgeSprite", value: 3301 },
                            { name: "NodeSprite", value: 19382 },
                            {
                                name: "render",
                                children: [
                                    { name: "ArrowType", value: 698 },
                                    { name: "EdgeRenderer", value: 5569 },
                                    { name: "IRenderer", value: 353 },
                                    { name: "ShapeRenderer", value: 2247 },
                                ],
                            },
                            { name: "ScaleBinding", value: 11275 },
                            { name: "Tree", value: 7147 },
                            { name: "TreeBuilder", value: 9930 },
                        ],
                    },
                    {
                        name: "events",
                        children: [
                            { name: "DataEvent", value: 2313 },
                            { name: "SelectionEvent", value: 1880 },
                            { name: "TooltipEvent", value: 1701 },
                            { name: "VisualizationEvent", value: 1117 },
                        ],
                    },
                    {
                        name: "legend",
                        children: [
                            { name: "Legend", value: 20859 },
                            { name: "LegendItem", value: 4614 },
                            { name: "LegendRange", value: 10530 },
                        ],
                    },
                    {
                        name: "operator",
                        children: [
                            {
                                name: "distortion",
                                children: [
                                    { name: "BifocalDistortion", value: 4461 },
                                    { name: "Distortion", value: 6314 },
                                    { name: "FisheyeDistortion", value: 3444 },
                                ],
                            },
                            {
                                name: "encoder",
                                children: [
                                    { name: "ColorEncoder", value: 3179 },
                                    { name: "Encoder", value: 4060 },
                                    { name: "PropertyEncoder", value: 4138 },
                                    { name: "ShapeEncoder", value: 1690 },
                                    { name: "SizeEncoder", value: 1830 },
                                ],
                            },
                            {
                                name: "filter",
                                children: [
                                    { name: "FisheyeTreeFilter", value: 5219 },
                                    { name: "GraphDistanceFilter", value: 3165 },
                                    { name: "VisibilityFilter", value: 3509 },
                                ],
                            },
                            { name: "IOperator", value: 1286 },
                            {
                                name: "label",
                                children: [
                                    { name: "Labeler", value: 9956 },
                                    { name: "RadialLabeler", value: 3899 },
                                    { name: "StackedAreaLabeler", value: 3202 },
                                ],
                            },
                            {
                                name: "layout",
                                children: [
                                    { name: "AxisLayout", value: 6725 },
                                    { name: "BundledEdgeRouter", value: 3727 },
                                    { name: "CircleLayout", value: 9317 },
                                    { name: "CirclePackingLayout", value: 12003 },
                                    { name: "DendrogramLayout", value: 4853 },
                                    { name: "ForceDirectedLayout", value: 8411 },
                                    { name: "IcicleTreeLayout", value: 4864 },
                                    { name: "IndentedTreeLayout", value: 3174 },
                                    { name: "Layout", value: 7881 },
                                    { name: "NodeLinkTreeLayout", value: 12870 },
                                    { name: "PieLayout", value: 2728 },
                                    { name: "RadialTreeLayout", value: 12348 },
                                    { name: "RandomLayout", value: 870 },
                                    { name: "StackedAreaLayout", value: 9121 },
                                    { name: "TreeMapLayout", value: 9191 },
                                ],
                            },
                            { name: "Operator", value: 2490 },
                            { name: "OperatorList", value: 5248 },
                            { name: "OperatorSequence", value: 4190 },
                            { name: "OperatorSwitch", value: 2581 },
                            { name: "SortOperator", value: 2023 },
                        ],
                    },
                    { name: "Visualization", value: 16540 },
                ],
            },
        ],
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
    myChart.setOption(
        (option = {
            // title: {
            //     text: "树图构建组织结构",
            //     subtext: "2020-02-19",
            //     left: "leafDepth",
            // },
            tooltip: {
                formatter: function (info) {
                    console.log("tool------", info);
                    var val = info.data.value;
                    var name = info.name;
                    return ["<h4>" + name + "</>", "<div>Value:" + val + "</>"].join("\n");
                    // return [
                    //     '{name|' + name + '}',
                    //     '{basic| 资产数量：' + asset_num + '}',
                    // ].join('\n');
                },
                // rich: RICH, tooltip不支持富文本
            },

            series: [
                {
                    name: "flare",
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
                                    "}" +
                                    "\n\n" +
                                    "{basic|Value: " +
                                    a.data.value +
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
                        //         return a.name + "\n\n" + "资产数量 : " + a.data.value + "\n等级得分";
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
    myChart.on("contextmenu", showMenu);

})