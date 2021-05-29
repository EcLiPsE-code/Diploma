import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import classes from './css/loadTemplate.module.css'
import Input from '../../input/input'
import TemplateTable from '../../table/template/templatesTable'
import UserCalendar from "../../calendar/calender"

const LoadingTemplate = props => {

    const [selectedBeginDate, setSelectedBeginDate] = React.useState(null);
    const [selectedEndDate, setSelectedEndDate] = React.useState(null)

    const handleBeginDateChange = date => {
        setSelectedBeginDate(date)
    }

    const handleEndDateChange = date => {
        setSelectedEndDate(date)
    }

    return (
        <div>
            <Dialog open={props.state} onClose={props.closeHandler} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <span>
                        Загрузка шаблона программы
                    </span>
                </DialogTitle>
                <DialogContent
                    style={{
                        minHeight: '50vh'
                    }}
                >
                    <div className={classes.StringSearch}>
                        <span>
                            <Button
                                size='small'
                                variant="contained"
                                style={{
                                    backgroundColor: '#356e35',
                                    color: '#fff',
                                    padding: '1vmin 2vmin',
                                    marginRight: '2vmin'
                                }}
                            >
                                Поиск
                            </Button>
                        </span>
                        <span>
                            <Input
                                label={'Программа'}
                                defaultValue={'Программа'}
                                variant={'outlined'}
                            />
                        </span>
                        <span>
                            <UserCalendar
                                onChange={handleBeginDateChange}
                                minDate={new Date()}
                                value={selectedBeginDate}
                                style={{
                                    width: '90%',
                                    marginLeft: '2vmin'
                                }}
                            />
                        </span>
                        <span>
                            <UserCalendar
                                onChange={handleEndDateChange}
                                minDate={new Date(+(new Date()) + 3600 * 24 * 1000)}
                                value={selectedEndDate}
                                style={{
                                    width: '90%',
                                    marginLeft: '2vmin'
                                }}
                            />
                        </span>
                    </div>
                    <div>
                        <TemplateTable/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeHandler} color="primary">
                        Загрузить
                    </Button>
                    <Button onClick={props.closeHandler} color="primary">
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default LoadingTemplate