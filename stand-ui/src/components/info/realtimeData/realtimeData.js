import React from 'react'
import classes from './realtimeData.module.css'
import Button from '@material-ui/core/Button';

const RealtimeData = props => {
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
                        }}>
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
                        }}>
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
                                <span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Скорость <i style={{color: 'red'}}>км/ч</i></div>
                            <div>
                                <span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Пробег <i style={{color: 'red'}}>км</i></div>
                            <div>
                                <span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Этап</div>
                            <div>
                                <span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Длит. этапа</div>
                            <div>
                                <span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Пробег этапа <i style={{color: 'red'}}>км</i></div>
                            <div>
                                <span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Кр. момент <i style={{color: 'red'}}>Н.м</i></div>
                            <div>
                                <span> 一 </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Нагрузка П1 <i style={{color: 'red'}}>H</i></div>
                            <div>
                                <span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Давление П1 <i style={{color: 'red'}}>кПа</i></div>
                            <div><span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Дин радиус П1 <i style={{color: 'red'}}>мм</i></div>
                            <div><span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> камеры П1 <i style={{color: 'red'}}>°C</i></div>
                            <div><span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> прот-ра П1 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span> 一 </span></div>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> борта П1 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span> 一 </span></div>
                            </div>
                        </td>
                        <td>
                            <div>TPMS П1 <i style={{color: 'red'}}>кПа/°C</i></div>
                            <div>
                                <span> 一 </span> /
                                <span> 一 </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Нагрузка П2 <i style={{color: 'red'}}>H</i></div>
                            <div><span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Давление П2 <i style={{color: 'red'}}>кПа</i></div>
                            <div><span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div>Дин радиус П2 <i style={{color: 'red'}}>мм</i></div>
                            <div><span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> камеры П2 <i style={{color: 'red'}}>°C</i></div>
                            <div><span> 一 </span>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> прот-ра П2 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span> 一 </span></div>
                            </div>
                        </td>
                        <td>
                            <div><span>t.</span> борта П2 <i style={{color: 'red'}}>°C</i></div>
                            <div>
                                <div><span> 一 </span></div>
                            </div>
                        </td>
                        <td>
                            <div>TPMS П2 <i style={{color: 'red'}}>кПа/°C</i></div>
                            <div>
                                <span> 一 </span> /
                                <span> 一 </span>
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