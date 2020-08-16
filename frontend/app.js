// // var json = require('./first.json'); //with path
// import * as data from 'first.json';
// console.log(data);

// $.getJSON("first.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

const data = JSON.parse('[{"legendText":"Afghanistan","indexLabel":1950,"y":7752118.0},{"legendText":"Afghanistan","indexLabel":1951,"y":7840156.0},{"legendText":"Afghanistan","indexLabel":1952,"y":7935996.9999999991},{"legendText":"Afghanistan","indexLabel":1953,"y":8039694.0},{"legendText":"Afghanistan","indexLabel":1954,"y":8151316.9999999991},{"legendText":"Afghanistan","indexLabel":1955,"y":8270991.0},{"legendText":"Afghanistan","indexLabel":1956,"y":8398875.0},{"legendText":"Afghanistan","indexLabel":1957,"y":8535163.0},{"legendText":"Afghanistan","indexLabel":1958,"y":8680101.0},{"legendText":"Afghanistan","indexLabel":1959,"y":8833946.0},{"legendText":"Afghanistan","indexLabel":1960,"y":8996973.0},{"legendText":"Afghanistan","indexLabel":1961,"y":9169410.0},{"legendText":"Afghanistan","indexLabel":1962,"y":9351440.9999999981},{"legendText":"Afghanistan","indexLabel":1963,"y":9543205.0},{"legendText":"Afghanistan","indexLabel":1964,"y":9744780.9999999981},{"legendText":"Afghanistan","indexLabel":1965,"y":9956320.0},{"legendText":"Afghanistan","indexLabel":1966,"y":10174836.0},{"legendText":"Afghanistan","indexLabel":1967,"y":10399926.0},{"legendText":"Afghanistan","indexLabel":1968,"y":10637063.0},{"legendText":"Afghanistan","indexLabel":1969,"y":10893776.0000000019},{"legendText":"Afghanistan","indexLabel":1970,"y":11173642.0},{"legendText":"Afghanistan","indexLabel":1971,"y":11475445.0},{"legendText":"Afghanistan","indexLabel":1972,"y":11791215.0},{"legendText":"Afghanistan","indexLabel":1973,"y":12108963.0},{"legendText":"Afghanistan","indexLabel":1974,"y":12412950.0},{"legendText":"Afghanistan","indexLabel":1975,"y":12689160.0},{"legendText":"Afghanistan","indexLabel":1976,"y":12943093.0},{"legendText":"Afghanistan","indexLabel":1977,"y":13171306.0},{"legendText":"Afghanistan","indexLabel":1978,"y":13341198.0},{"legendText":"Afghanistan","indexLabel":1979,"y":13411056.0},{"legendText":"Afghanistan","indexLabel":1980,"y":13356511.0},{"legendText":"Afghanistan","indexLabel":1981,"y":13171673.0},{"legendText":"Afghanistan","indexLabel":1982,"y":12882528.0},{"legendText":"Afghanistan","indexLabel":1983,"y":12537730.0},{"legendText":"Afghanistan","indexLabel":1984,"y":12204292.0},{"legendText":"Afghanistan","indexLabel":1985,"y":11938208.0},{"legendText":"Afghanistan","indexLabel":1986,"y":11736178.9999999981},{"legendText":"Afghanistan","indexLabel":1987,"y":11604534.0},{"legendText":"Afghanistan","indexLabel":1988,"y":11618005.0},{"legendText":"Afghanistan","indexLabel":1989,"y":11868877.0},{"legendText":"Afghanistan","indexLabel":1990,"y":12412308.0},{"legendText":"Afghanistan","indexLabel":1991,"y":13299017.0},{"legendText":"Afghanistan","indexLabel":1992,"y":14485546.0},{"legendText":"Afghanistan","indexLabel":1993,"y":15816603.0000000019},{"legendText":"Afghanistan","indexLabel":1994,"y":17075727.0},{"legendText":"Afghanistan","indexLabel":1995,"y":18110657.0},{"legendText":"Afghanistan","indexLabel":1996,"y":18853436.9999999963},{"legendText":"Afghanistan","indexLabel":1997,"y":19357126.0},{"legendText":"Afghanistan","indexLabel":1998,"y":19737765.0},{"legendText":"Afghanistan","indexLabel":1999,"y":20170843.9999999963},{"legendText":"Afghanistan","indexLabel":2000,"y":20779953.0},{"legendText":"Afghanistan","indexLabel":2001,"y":21606987.9999999963},{"legendText":"Afghanistan","indexLabel":2002,"y":22600770.0},{"legendText":"Afghanistan","indexLabel":2003,"y":23680871.0},{"legendText":"Afghanistan","indexLabel":2004,"y":24726683.9999999963},{"legendText":"Afghanistan","indexLabel":2005,"y":25654277.0},{"legendText":"Afghanistan","indexLabel":2006,"y":26433049.0},{"legendText":"Afghanistan","indexLabel":2007,"y":27100536.0},{"legendText":"Afghanistan","indexLabel":2008,"y":27722276.0},{"legendText":"Afghanistan","indexLabel":2009,"y":28394813.0},{"legendText":"Afghanistan","indexLabel":2010,"y":29185507.0},{"legendText":"Afghanistan","indexLabel":2011,"y":30117412.9999999963},{"legendText":"Afghanistan","indexLabel":2012,"y":31161376.0},{"legendText":"Afghanistan","indexLabel":2013,"y":32269589.0},{"legendText":"Afghanistan","indexLabel":2014,"y":33370794.0},{"legendText":"Afghanistan","indexLabel":2015,"y":34413602.9999999925},{"legendText":"Afghanistan","indexLabel":2016,"y":35383032.0},{"legendText":"Afghanistan","indexLabel":2017,"y":36296113.0},{"legendText":"Afghanistan","indexLabel":2018,"y":37171921.0},{"legendText":"Albania","indexLabel":1950,"y":1263174.0},{"legendText":"Albania","indexLabel":1951,"y":1287500.0},{"legendText":"Albania","indexLabel":1952,"y":1316092.9999999998},{"legendText":"Albania","indexLabel":1953,"y":1348112.0},{"legendText":"Albania","indexLabel":1954,"y":1382898.0},{"legendText":"Albania","indexLabel":1955,"y":1419994.0},{"legendText":"Albania","indexLabel":1956,"y":1459120.0},{"legendText":"Albania","indexLabel":1957,"y":1500181.0},{"legendText":"Albania","indexLabel":1958,"y":1543255.0},{"legendText":"Albania","indexLabel":1959,"y":1588513.0},{"legendText":"Albania","indexLabel":1960,"y":1636090.0},{"legendText":"Albania","indexLabel":1961,"y":1685936.0000000002},{"legendText":"Albania","indexLabel":1962,"y":1737686.0000000002},{"legendText":"Albania","indexLabel":1963,"y":1790572.9999999998},{"legendText":"Albania","indexLabel":1964,"y":1843634.0},{"legendText":"Albania","indexLabel":1965,"y":1896171.0},{"legendText":"Albania","indexLabel":1966,"y":1947830.0},{"legendText":"Albania","indexLabel":1967,"y":1998740.0},{"legendText":"Albania","indexLabel":1968,"y":2049210.0},{"legendText":"Albania","indexLabel":1969,"y":2099729.0},{"legendText":"Albania","indexLabel":1970,"y":2150707.0000000005},{"legendText":"Albania","indexLabel":1971,"y":2202189.0},{"legendText":"Albania","indexLabel":1972,"y":2254056.0},{"legendText":"Albania","indexLabel":1973,"y":2306290.0},{"legendText":"Albania","indexLabel":1974,"y":2358846.0},{"legendText":"Albania","indexLabel":1975,"y":2411732.0},{"legendText":"Albania","indexLabel":1976,"y":2464982.9999999995},{"legendText":"Albania","indexLabel":1977,"y":2518685.0},{"legendText":"Albania","indexLabel":1978,"y":2572850.0},{"legendText":"Albania","indexLabel":1979,"y":2627505.0},{"legendText":"Albania","indexLabel":1980,"y":2682690.0},{"legendText":"Albania","indexLabel":1981,"y":2737026.0},{"legendText":"Albania","indexLabel":1982,"y":2790275.0},{"legendText":"Albania","indexLabel":1983,"y":2844870.9999999995},{"legendText":"Albania","indexLabel":1984,"y":2904140.0},{"legendText":"Albania","indexLabel":1985,"y":2969672.0},{"legendText":"Albania","indexLabel":1986,"y":3044212.0},{"legendText":"Albania","indexLabel":1987,"y":3124894.0},{"legendText":"Albania","indexLabel":1988,"y":3200977.0000000005},{"legendText":"Albania","indexLabel":1989,"y":3257925.0},{"legendText":"Albania","indexLabel":1990,"y":3286073.0},{"legendText":"Albania","indexLabel":1991,"y":3280395.0},{"legendText":"Albania","indexLabel":1992,"y":3245886.0},{"legendText":"Albania","indexLabel":1993,"y":3195199.0},{"legendText":"Albania","indexLabel":1994,"y":3146519.0},{"legendText":"Albania","indexLabel":1995,"y":3112935.9999999995},{"legendText":"Albania","indexLabel":1996,"y":3098700.0},{"legendText":"Albania","indexLabel":1997,"y":3099752.0},{"legendText":"Albania","indexLabel":1998,"y":3110682.0000000005},{"legendText":"Albania","indexLabel":1999,"y":3122697.0},{"legendText":"Albania","indexLabel":2000,"y":3129243.0},{"legendText":"Albania","indexLabel":2001,"y":3129704.0},{"legendText":"Albania","indexLabel":2002,"y":3126187.0},{"legendText":"Albania","indexLabel":2003,"y":3118022.9999999995},{"legendText":"Albania","indexLabel":2004,"y":3104892.0000000005},{"legendText":"Albania","indexLabel":2005,"y":3086810.0},{"legendText":"Albania","indexLabel":2006,"y":3063020.9999999995},{"legendText":"Albania","indexLabel":2007,"y":3033998.0},{"legendText":"Albania","indexLabel":2008,"y":3002678.0},{"legendText":"Albania","indexLabel":2009,"y":2973048.0},{"legendText":"Albania","indexLabel":2010,"y":2948022.9999999995},{"legendText":"Albania","indexLabel":2011,"y":2928592.0},{"legendText":"Albania","indexLabel":2012,"y":2914095.9999999995},{"legendText":"Albania","indexLabel":2013,"y":2903790.0},{"legendText":"Albania","indexLabel":2014,"y":2896305.0},{"legendText":"Albania","indexLabel":2015,"y":2890513.0},{"legendText":"Albania","indexLabel":2016,"y":2886438.0},{"legendText":"Albania","indexLabel":2017,"y":2884169.0000000005},{"legendText":"Albania","indexLabel":2018,"y":2882740.0},{"legendText":"Algeria","indexLabel":1950,"y":8872247.0},{"legendText":"Algeria","indexLabel":1951,"y":9023269.0},{"legendText":"Algeria","indexLabel":1952,"y":9186138.0},{"legendText":"Algeria","indexLabel":1953,"y":9364371.0},{"legendText":"Algeria","indexLabel":1954,"y":9560149.0},{"legendText":"Algeria","indexLabel":1955,"y":9774283.0000000019},{"legendText":"Algeria","indexLabel":1956,"y":10006146.9999999981},{"legendText":"Algeria","indexLabel":1957,"y":10253778.0},{"legendText":"Algeria","indexLabel":1958,"y":10514080.0},{"legendText":"Algeria","indexLabel":1959,"y":10783223.9999999981},{"legendText":"Algeria","indexLabel":1960,"y":11057863.0000000019},{"legendText":"Algeria","indexLabel":1961,"y":11336339.0},{"legendText":"Algeria","indexLabel":1962,"y":11619828.0000000019},{"legendText":"Algeria","indexLabel":1963,"y":11912803.0},{"legendText":"Algeria","indexLabel":1964,"y":12221675.0},{"legendText":"Algeria","indexLabel":1965,"y":12550885.0},{"legendText":"Algeria","indexLabel":1966,"y":12902627.0},{"legendText":"Algeria","indexLabel":1967,"y":13275026.0000000019},{"legendText":"Algeria","indexLabel":1968,"y":13663583.0},{"legendText":"Algeria","indexLabel":1969,"y":14061722.0},{"legendText":"Algeria","indexLabel":1970,"y":14464985.0},{"legendText":"Algeria","indexLabel":1971,"y":14872250.0},{"legendText":"Algeria","indexLabel":1972,"y":15285990.0},{"legendText":"Algeria","indexLabel":1973,"y":15709825.0},{"legendText":"Algeria","indexLabel":1974,"y":16149025.0},{"legendText":"Algeria","indexLabel":1975,"y":16607706.9999999981},{"legendText":"Algeria","indexLabel":1976,"y":17085801.0},{"legendText":"Algeria","indexLabel":1977,"y":17582904.0},{"legendText":"Algeria","indexLabel":1978,"y":18102266.0},{"legendText":"Algeria","indexLabel":1979,"y":18647815.0},{"legendText":"Algeria","indexLabel":1980,"y":19221665.0},{"legendText":"Algeria","indexLabel":1981,"y":19824301.0},{"legendText":"Algeria","indexLabel":1982,"y":20452902.0},{"legendText":"Algeria","indexLabel":1983,"y":21101875.0},{"legendText":"Algeria","indexLabel":1984,"y":21763575.0},{"legendText":"Algeria","indexLabel":1985,"y":22431502.0},{"legendText":"Algeria","indexLabel":1986,"y":23102389.0},{"legendText":"Algeria","indexLabel":1987,"y":23774284.0},{"legendText":"Algeria","indexLabel":1988,"y":24443467.0},{"legendText":"Algeria","indexLabel":1989,"y":25106190.0},{"legendText":"Algeria","indexLabel":1990,"y":25758869.0},{"legendText":"Algeria","indexLabel":1991,"y":26400479.0},{"legendText":"Algeria","indexLabel":1992,"y":27028326.0},{"legendText":"Algeria","indexLabel":1993,"y":27635515.0},{"legendText":"Algeria","indexLabel":1994,"y":28213773.9999999963},{"legendText":"Algeria","indexLabel":1995,"y":28757785.0},{"legendText":"Algeria","indexLabel":1996,"y":29266405.0},{"legendText":"Algeria","indexLabel":1997,"y":29742979.0},{"legendText":"Algeria","indexLabel":1998,"y":30192754.0},{"legendText":"Algeria","indexLabel":1999,"y":30623406.0000000037}]');
var chart = new CanvasJS.Chart("chartContainer1",
    {
        animationEnabled: true,
        title: {
            text: "Spline Area Chart"
        },
        axisX: {
            interval: 10,
        },
        data: [
        {
            type: "splinelegendText",
            color: "rgba(255,12,32,.3)",
            dataPoints: [
                { x: new Date(1992, 0), y: 2506000 },
                { x: new Date(1993, 0), y: 2798000 },
                { x: new Date(1994, 0), y: 3386000 },
                { x: new Date(1995, 0), y: 6944000 },
                { x: new Date(1996, 0), y: 6026000 },
                { x: new Date(1997, 0), y: 2394000 },
                { x: new Date(1998, 0), y: 1872000 },
                { x: new Date(1999, 0), y: 2140000 },
                { x: new Date(2000, 0), y: 7289000 },
                { x: new Date(2001, 0), y: 4830000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 }
            ]
        },
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer2",
    {
        animationEnabled: true,
        title: {
            text: "Pie Chart",
        },
        data: [
        {
            type: "pie",
            showInLegend: true,
            dataPoints: [
                { y: 4181563, legendText: "PS 3", indexLabel: "PlayStation 3" },
                { y: 2175498, legendText: "Wii", indexLabel: "Wii" },
                { y: 3125844, legendText: "360", indexLabel: "Xbox 360" },
                { y: 1176121, legendText: "DS", indexLabel: "Nintendo DS" },
                { y: 1727161, legendText: "PSP", indexLabel: "PSP" },
                { y: 4303364, legendText: "3DS", indexLabel: "Nintendo 3DS" },
                { y: 1717786, legendText: "Vita", indexLabel: "PS Vita" }
            ]
            // dataPoints : data
        },
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer3",
    {
        animationEnabled: true,
        title: {
            text: "Line Chart"
        },
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month"
        },
        axisY: {
            includeZero: false
        },
        data: [
        {
          type: "line",
          dataPoints: [
              { x: new Date(2012, 00, 1), y: 450 },
              { x: new Date(2012, 01, 1), y: 414 },
              { x: new Date(2012, 02, 1), y: 520, indexLabel: "highest", markerColor: "red", markerType: "triangle" },
              { x: new Date(2012, 03, 1), y: 460 },
              { x: new Date(2012, 04, 1), y: 450 },
              { x: new Date(2012, 05, 1), y: 500 },
              { x: new Date(2012, 06, 1), y: 480 },
              { x: new Date(2012, 07, 1), y: 480 },
              { x: new Date(2012, 08, 1), y: 410, indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
              { x: new Date(2012, 09, 1), y: 500 },
              { x: new Date(2012, 10, 1), y: 480 },
              { x: new Date(2012, 11, 1), y: 510 }
            ]
        }
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer4",
    {
        animationEnabled: true,
        title: {
            text: "Column Chart"
        },
        axisX: {
            interval: 10,
        },
        data: [
        {
            type: "column",
            legendMarkerType: "triangle",
            legendMarkerColor: "green",
            color: "rgba(255,12,32,.3)",
            showInLegend: true,
            legendText: "Country wise population",
            dataPoints: [
                { x: 10, y: 297571, label: "India" },
                { x: 20, y: 267017, label: "Saudi" },
                { x: 30, y: 175200, label: "Canada" },
                { x: 40, y: 154580, label: "Iran" },
                { x: 50, y: 116000, label: "Russia" },
                { x: 60, y: 97800, label: "UAE" },
                { x: 70, y: 20682, label: "US" },
                { x: 80, y: 20350, label: "China" }
            ]
        },
        ]
    });
chart.render();