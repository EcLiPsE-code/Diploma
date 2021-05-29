import React, {useState} from 'react'
import classes from './css/programm.module.css'
import DashboardIcon from "@material-ui/icons/Dashboard"
import Button from "@material-ui/core/Button"
import {Menu, MenuItem} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import CreateIcon from "@material-ui/icons/Create"
import SaveIcon from "@material-ui/icons/Save"
import GetAppIcon from "@material-ui/icons/GetApp"
import ProgramTable from "../../UI/table/programm/programTable"
import NewProgram from "../../UI/dialog/program/newProgram";
import Auxiliary from "../../../hoc/auxiliary/auxiliary";
import ChangeNameProgram from "../../UI/dialog/program/changeNameProgram";
import TemplateProgram from "../../UI/dialog/program/templateProgram";
import LoadingTemplate from "../../UI/dialog/program/loadTemplate";

const Program = props => {

    const [program, setProgram] = useState(null)
    const [template, setTemplate] = useState(null)
    const [newProgramDialog, setNewProgramDialog] = useState(false)
    const [changeNameProgram, setChangeNameProgram] = useState(false)
    const [templateProgram, setTemplateProgram] = useState(false) //диалоговое окно сохранения шаблона
    const [loadingTemplate, setLoadingTemplate] = useState(false)

    const loadingTemplateOpenHandler = () => {
        setLoadingTemplate(true)
        handleTemplateClose()
    }
    const loadingTemplateCloseHandler = () => setLoadingTemplate(false)

    const templateProgramOpenHandler = () => {
        setTemplateProgram(true)
        handleTemplateClose()
    }
    const templateProgramCloseHandler = () => setTemplateProgram(false)

    const changeNameProgramOpenHandler = () => {
        setChangeNameProgram(true)
        handleProgramClose()
    }
    const changeNameProgramCloseHandler = () => setChangeNameProgram(false)

    const newProgramClickOpenHandler = () => {
        setNewProgramDialog(true)
        handleProgramClose()
    }
    const newProgramClickCloseHandler = () => setNewProgramDialog(false)

    const handleProgramClick = event => setProgram(event.currentTarget)
    const handleTemplateClick = event => setTemplate(event.currentTarget)

    const handleProgramClose = () => setProgram(null)
    const handleTemplateClose = () => setTemplate(null)

    return (
        <Auxiliary>
            <LoadingTemplate
                state={loadingTemplate}
                openHandler={loadingTemplateOpenHandler}
                closeHandler={loadingTemplateCloseHandler}
            />
            <TemplateProgram
                state={templateProgram}
                openHandler={templateProgramOpenHandler}
                closeHandler={templateProgramCloseHandler}
            />
            <NewProgram
                state={newProgramDialog}
                openHandler={newProgramClickOpenHandler}
                closeHandler={newProgramClickCloseHandler}
            />
            <ChangeNameProgram
                state={changeNameProgram}
                openHandler={changeNameProgramOpenHandler}
                closeHandler={changeNameProgramCloseHandler}
            />
            <div className={classes.Programs}>
                <div className={classes.TitleProgram} style={{
                    backgroundColor: '#496949'
                }}>
                    <div>
                    <span>
                        <DashboardIcon/>
                    </span>
                        <span style={{marginLeft: '1.5vmin'}}>
                            Программа: {props.programName? props.programName : <i>&nbsp;Наименование программы</i>}
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
                            onClick={event => handleProgramClick(event)}
                        >
                            Программа
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={program}
                            keepMounted
                            open={Boolean(program)}
                            onClose={() => handleProgramClose()}
                        >
                        <MenuItem onClick={() => handleProgramClose()}>
                            <AddIcon style={{
                                color: 'green'
                            }}/>
                            <span
                                onClick={() => newProgramClickOpenHandler()}
                            >
                                 Создать новую программу
                            </span>
                        </MenuItem>
                        <MenuItem onClick={() => changeNameProgramOpenHandler()}>
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
                                onClick={event => handleTemplateClick(event)}
                            >
                                Шаблон
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={template}
                                keepMounted
                                open={Boolean(template)}
                                onClose={() => handleTemplateClose()}
                            >
                            <MenuItem onClick={() => templateProgramOpenHandler()}>
                                <SaveIcon style={{
                                    color: 'green'
                                }}/>
                                <span>
                                     Сохранить шаблон программы
                                </span>
                            </MenuItem>
                            <MenuItem onClick={() => loadingTemplateOpenHandler()}>
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
                    <ProgramTable />
                </div>
            </div>
        </Auxiliary>
    )
}

export default Program