import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts"
import ApexChart from 'apexcharts'
import formatterDateChart from "../../../../helerps/dateFormatter/formatter"
import {connect} from 'react-redux'

const UserChart = props => {

    const [arrX, setArrX] = useState([])
    const [state, setState] = useState({
        options: {
            chart: {
                id: props.id,
                type: 'line',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000
                    }
                },
            },
            legend: {
                position: "right",
                verticalAlign: "top",
                containerMargin: {
                    left: 35,
                    right: 60
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: props.text
            },
            yaxis: [
                {
                    title: {
                        text: props.textY
                    }
                }
            ],
            xaxis: {
                title: {
                    text: 'Интервал времени',
                    style: {
                        fontSize: '2vmin'
                    }
                }
            },
        },
        series: [
            {
                name: props.text,
                data: arrX
            }
        ]
    })

    const parameter = {
        'speed' : props.speed,
        'load1' : props.load1,
        'load2' : props.load2,
        'pressure2' : props.pressure2,
        'pressure1' : props.pressure1,
        'temperatureChamber1' : props.temperatureChamber1,
        'temperatureChamber2' : props.temperatureChamber2
    }

    useEffect( () => {
        if (arrX.length === 8){
            arrX.splice(0, 1)
        }
        arrX.push({
            x: formatterDateChart(new Date(Date.now())),
            y: parseInt(parameter[props.keyData])
        })
        ApexChart.exec(props.id, 'updateSeries', [{
            data: arrX
        }])
    }, [parameter[props.keyData]])

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="line"
            height='100%'
        />
    )
}

function mapStateToProps(state){
    return {
        speed: state.testReducer.realTimeData.speed,
        load1: state.testReducer.realTimeData.load1,
        load2: state.testReducer.realTimeData.load2,
        pressure1: state.testReducer.realTimeData.pressure1,
        pressure2: state.testReducer.realTimeData.pressure2,
        temperatureChamber1: state.testReducer.realTimeData.temperatureChamber1,
        temperatureChamber2: state.testReducer.realTimeData.temperatureChamber2
    }
}

export default connect(mapStateToProps, null)(UserChart)