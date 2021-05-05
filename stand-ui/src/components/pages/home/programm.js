import React from 'react'
import classes from './css/programm.module.css'
import DashboardIcon from "@material-ui/icons/Dashboard";
import Button from "@material-ui/core/Button";
import {Menu, MenuItem} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import SaveIcon from "@material-ui/icons/Save";
import GetAppIcon from "@material-ui/icons/GetApp";
import ProgramTable from "../../UI/table/programm/programTable";

const Program = props => {
    return (
        <div className={classes.Programs}>
            <div className={classes.TitleProgram} style={{
                backgroundColor: '#496949'
            }}>
                <div>
                    <span>
                        <DashboardIcon/>
                    </span>
                    <span style={{marginLeft: '1.5vmin'}}>
                        Программа
                    </span>
                </div>
                <div>
                    <span>
                        <Button
                            variant="contained"
                            size='small'
                            style={{
                                backgroundColor: '#c79121',
                                color: '#fff'
                            }}
                            onClick={event => props.programClick(event)}
                        >
                            Программа
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={props.program}
                            keepMounted
                            open={Boolean(props.program)}
                            onClose={() => props.programClose()}
                        >
                        <MenuItem onClick={() => props.programClose()}>
                            <AddIcon style={{
                                color: 'green'
                            }}/>
                            <span>
                                 Создать новую программу
                            </span>
                        </MenuItem>
                        <MenuItem onClick={() => props.programClose()}>
                            <CreateIcon style={{
                                color: 'green'
                            }}/>
                            <span>Переименовать программу</span>
                        </MenuItem>
                        <MenuItem onClick={() => props.programClose()}>
                            <AddIcon style={{
                                color: 'green'
                            }}/>
                            <span>Добавить этап</span>
                        </MenuItem>
                      </Menu>
                    </span>
                    <span style={{paddingLeft: '2vmin'}}>
                            <Button
                                variant="contained"
                                size='small'
                                color="secondary"
                                style={{
                                    backgroundColor: '#c79121',
                                    color: '#fff'
                                }}
                                onClick={event => props.templateClick(event)}
                            >
                                Шаблон
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={props.template}
                                keepMounted
                                open={Boolean(props.template)}
                                onClose={() => props.templateClose()}
                            >
                            <MenuItem onClick={() => props.templateClose()}>
                                <SaveIcon style={{
                                    color: 'green'
                                }}/>
                                <span>
                                     Сохранить шаблон программы
                                </span>
                            </MenuItem>
                            <MenuItem onClick={() => props.templateClose()}>
                                <GetAppIcon style={{
                                    color: 'green'
                                }}/>
                                <span>Загрузить шаблон</span>
                            </MenuItem>
                          </Menu>
                        </span>
                </div>
            </div>
            <div className={classes.Table}>
                <ProgramTable/>
            </div>
        </div>
    )
}

export default Program