import React, {useState} from 'react'
import classes from './realtimeData.module.css'
import Button from '@material-ui/core/Button';

const RealtimeData = props => {

    const [idInterval, setIdInterval] = useState(null)

    const startTest = () => {
        setIdInterval(setInterval(() => {
            props.startTestHandler()
        }, 1000))
    }

    const stopTest = () => {
        clearInterval(idInterval)
    }

    return (
        <div className={classes.Data}>
            <div className={classes.Buttons}>
                <div>
                    <Button
                        variant="contained"
                        style={{
                            width: '90%',
                            backgroundColor: '#356e35',
                            color: '#fff'
                        }}
                        onClick={() => startTest()}
                    >
                        <strong style={{fontSize: '2vmin'}}>СТАРТ</strong>
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        style={{
                            width: '90%',
                            backgroundColor: '#a90329',
                            color: '#fff'
                        }}
                        onClick={() => stopTest()}
                    >
                        <strong style={{fontSize: '2vmin'}}>СТОП</strong>
                    </Button>
                </div>
            </div>
            <div className={classes.Info}>
                <table style={{width: '70vw'}}>
                    <tbody>
                    <tr>
                        <td>
                            <div>Длительность</div>
                            <div>
                                <span>{props.realTimeData.duration}</span>
                            </div>
                        </td>
                        <td>
                            <div>Скорость <i style={{color: 'red'}}>км/ч</i></div>
                            <div>
                                <span>{props.realTimeData.speed}</span>
                            </div>
                        </td>
                        <td>
                            <div>Пробег <i style={{color: 'red'}}>км</i></div>
                            <div>
                                <span>{props.realTimeData.mileage}</span>
                            </div>
                        </td>
                        <td>
                            <div>Этап</div>
                            <div>
                                <span>{props.realTimeData.step}</span>
                            </div>
                        </td>
                        <td>
                            <div>Длит. этапа</div>
                            <div>
                                <span>{props.realTimeData.durationStep}</span>
                            </div>
                        </td>
                        <td>
                            <div>Пробег этапа <i style={{color: 'red'}}>км</i></div>
                            <div>
                                <span>{props.realTimeData.mileageStep}</span>
                            </div>
                        </td>
                        <td>
                            <div>Кр. момент <i style={{color: 'red'}}>Н.м</i></div>
                            <div>
                                <span>{props.realTimeData.torque}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Нагрузка П1 <i style={{color: 'red'}}>H</i></div>
                            <div>
                                <span>{props.realTimeData.load1}</span>
                            </div>
                        </td>
                        <td>
                            <div>Давление П1 <i style={{color: 'red'}}>кПа</i></div>
                            <div><span>{props.realTimeData.pressure1}</span>
                            </div>
                        </td>
                        <td>
                            <div>Дин радиус П1 <i style={{color: 'red'}}>мм</i></div>
                            <div><span>{props.realTimeData.dynamicR1}</span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> камеры П1 <i style={{color: 'red'}}>°C</i></div>
                            <div><span>{props.realTimeData.temperatureChamber1}</span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> прот-ра П1 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span>{props.realTimeData.temperatureTread1}</span></div>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> борта П1 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span>{props.realTimeData.temperatureBoard1}</span></div>
                            </div>
                        </td>
                        <td>
                            <div>TPMS П1 <i style={{color: 'red'}}>кПа/°C</i></div>
                            <div>
                                <span>{props.realTimeData.TMPS1}</span> /
                                <span>{props.realTimeData.TMPS1}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Нагрузка П2 <i style={{color: 'red'}}>H</i></div>
                            <div><span>{props.realTimeData.load2}</span>
                            </div>
                        </td>
                        <td>
                            <div>Давление П2 <i style={{color: 'red'}}>кПа</i></div>
                            <div><span>{props.realTimeData.pressure2}</span>
                            </div>
                        </td>
                        <td>
                            <div>Дин радиус П2 <i style={{color: 'red'}}>мм</i></div>
                            <div><span>{props.realTimeData.dynamicR1}</span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> камеры П2 <i style={{color: 'red'}}>°C</i></div>
                            <div><span>{props.realTimeData.temperatureChamber2}</span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> прот-ра П2 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span>{props.realTimeData.temperatureTread2}</span></div>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> борта П2 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span>{props.realTimeData.temperatureBoard2}</span></div>
                            </div>
                        </td>
                        <td>
                            <div>TPMS П2 <i style={{color: 'red'}}>кПа/°C</i></div>
                            <div>
                                <span>{props.realTimeData.TMPS2}</span> /
                                <span>{props.realTimeData.TMPS2}</span>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RealtimeData