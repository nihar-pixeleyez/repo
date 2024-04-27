import { ref } from 'vue';

export const userChartOptions = ref({
    chart: {
        height: 300,
        type: 'area',
        fontFamily: 'Inter, sans-serif',
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    series: [
        {
            name: 'Current Week',
            data: [0, 1000, 5000, 10000, 8000, 11000, 15000],
        },
        {
            name: 'Previous Week',
            data: [2000, 3000, 6000, 12000, 9000, 13000, 14000],
        },
    ],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        curve: 'smooth',
        width: 3,
        lineCap: 'square',
    },
    dropShadow: {
        enabled: false,
    },
    colors: ['#6a69f5', '#323a46'],
    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 4,
                fillColor: '#6a69f5',
                strokeColor: '#fff',
                size: 6,
            },
            {
                seriesIndex: 1,
                dataPointIndex: 5,
                fillColor: '#323a46',
                strokeColor: '#fff',
                size: 6,
            },
        ],
    },
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: true,
        },
        labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
                fontSize: '12px',
                cssClass: 'apexcharts-xaxis-title',
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: (value) => {
                return value / 1000 + 'M';
            },
            offsetX: -10,
            offsetY: 0,
            style: {
                fontSize: '12px',
                cssClass: 'apexcharts-yaxis-title',
            },
        },
        opposite: false,
    },
    grid: {
        borderColor: '#e0e6ed',
        strokeDashArray: 7,
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        marker: {
            show: true,
        },
        x: {
            show: false,
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [100, 100],
        },
    },
});

export const usersByDevice = ref({
    series: [44, 55, 67],
    chart: {
        height: 320,
        type: 'radialBar',
    },
    colors: ['#6a69f5', '#50cd89', '#323a46'],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        return 709;
                    },
                },
            },
        },
    },
    labels: ['Desktop', 'Mobile', 'Tablet'],
});

export const ChartOptions = ref({
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50cd89'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const ChartOptions2 = ref({
    series: [
        {
            data: [0, 82, 60, 65, 0, 10, 80, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50cd89'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const ChartOptions3 = ref({
    series: [
        {
            data: [0, 82, 60, 65, 0, 10, 80, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1416c'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const ChartOptions4 = ref({
    series: [
        {
            data: [10, 40, 40, 10, 20, 89, 70, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1416c'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const projectChartOptions = ref({
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50cd89'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const projectChartOptions2 = ref({
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#67cc8b'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const projectChartOptions3 = ref({
    series: [
        {
            data: [20, 10, 40, 40, 10, 89, 70, 20, 70, 98, 89, 20, 10],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1416c'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const projectChartOptions4 = ref({
    series: [
        {
            name: 'Development',
            type: 'line',
            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        },
        {
            name: 'UX Design',
            type: 'line',
            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        },
        {
            name: 'Web Design',
            type: 'line',
            data: [54, 37, 52, 69, 45, 61, 43, 44, 61, 43, 55]
        }
    ],
    chart: {
        height: 310,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    grid: {
        padding: {
            top: -15,
            right: -2,
            bottom: -10,
        },
    },
    stroke: {
        curve: 'smooth',
        width: [2, 2, 2]
    },
    fill: {
        type: 'solid',
        opacity: [0.35, 1],
    },
    labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
    markers: {
        size: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== 'undefined') {
                    return y.toFixed(0) + ' Task';
                }
                return y;
            }
        }
    }
});

export const ecommerceChartOptions1 = ref({
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50cd89'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const ecommerceChartOptions2 = ref({
    series: [
        {
            data: [10, 82, 40, 65, 20, 89, 40, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1416c'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const ecommerceChartOptions3 = ref({
    series: [
        {
            data: [10, 40, 40, 10, 20, 89, 70, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1416c'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const ecommerceChartOptions4 = ref({
    series: [
        {
            data: [0, 82, 60, 65, 0, 10, 80, 20, 70, 98],
        },
    ],
    chart: {
        height: 60,
        type: 'line',
        fontFamily: 'Nunito, sans-serif',
        sparkline: {
            enabled: true,
        },
        dropShadow: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50cd89'],
    grid: {
        padding: {
            top: 5,
            bottom: 5,
            left: 5,
            right: 5,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: () => '',
            },
        },
    },
});
export const ecommerceChartOptions5 = ref({
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
    ],
    chart: {
        type: 'bar',
        height: 270
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    colors: ["#6f5ef1", "#f1416c", "#50cd89"],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
});
export const ecommerceChartOptions6 = ref({
    series: [44, 55, 67],
    chart: {
        height: 320,
        type: "donut",
    },
    colors: ["#6a69f5", "#50cd89", "#323a46"],
    legend: {
        position: 'bottom'
    },
    labels: ["Offline", "Online", "Other"],
});
export const ecommerceChartOptions7 = ref({
    series: [{
        name: 'Orders',
        data: [20, 47, 40, 30, 50],
    }],
    chart: {
        height: 270,
        type: 'radar',
    },
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        radar: {
            size: 125,
            polygons: {
                strokeColors: '#e9e9e9',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
            }
        }
    },
    colors: ['#ffc700'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#ffc700',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val
            }
        }
    },
    xaxis: {
        categories: ['iPhone', 'Macbook', 'iPad', 'Airpods', 'iWatch']
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val, i) {
                if (i % 2 === 0) {
                    return val
                } else {
                    return ''
                }
            }
        }
    }
});