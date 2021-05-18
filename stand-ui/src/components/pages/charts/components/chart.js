import React, {useEffect, useState} from 'react'
import Chart from "react-apexcharts"
import ApexChart from 'apexcharts'
import randomInteger from "../../../../helerps/randomizer/randomizer"
import formatterDate from "../../../../helerps/dateFormatter/formatter"
import moment from 'moment'

const UserChart = ({id, text, textY}) => {

    const [arrX, setArrX] = useState([])

    const [state, setState] = useState({
        options: {
            chart: {
                id: id,
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
                text: text
            },
            yaxis: [
                {
                    title: {
                        text: textY
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
                name: text,
                data: arrX
            }
        ]
    })

    useEffect( () => {
        setInterval(() => {
            if (arrX.length === 8){
                arrX.splice(0, 1)
            }
            let newArrX = arrX.push({
                x: formatterDate(new Date(Date.now())),
                y: randomInteger(1, 100)
            })
            setArrX(newArrX)

            ApexChart.exec(id, 'updateSeries', [{
                data: arrX
            }])

        }, 5000)
    }, [])

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="line"
            height='100%'
        />
    )
}

export default UserChart