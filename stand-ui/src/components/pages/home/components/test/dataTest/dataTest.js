import React, {useState} from 'react'
import Button from "@material-ui/core/Button"
import Input from "../../../../../UI/input/input"
import UserSelect from "../../../../../UI/select/select"
import Auxiliary from "../../../../../../hoc/auxiliary/auxiliary"

const DataTest = props => {

    return (
        <Auxiliary>
            <div>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: props.state? '#a90329' : '#739e73',
                        color: '#fff',
                    }}
                >
                    {props.text}
                </Button>
            </div>
            <div>
                <UserSelect
                    protocolsArr={props.protocols}
                    methodologysArr={props.methodologys}
                    title={'Протокол'}
                    style={{
                        width: '15vw',
                    }}
                    disabledType={props.state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Модель'}
                    key={'model'}
                    defaultValue={'Модель'}
                    onChange={changeDataHandler}
                    disabledType={props.state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Размер'}
                    key={'size'}
                    defaultValue={'0'}
                    onChange={changeDataHandler}
                    disabledType={props.state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Заводской номер'}
                    key={'number'}
                    defaultValue={'Заводской номер'}
                    onChange={changeDataHandler}
                    disabledType={props.state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Rdin min'}
                    key={'Rdin'}
                    defaultValue={'255'}
                    onChange={changeDataHandler}
                    disabledType={props.state}
                />
            </div>
            <div>
                <UserSelect
                    protocolsArr={props.protocols}
                    methodologysArr={props.methodologys}
                    title={'Методология'}
                    style={{
                        width: '15vw',
                    }}
                    disabledType={props.state}
                />
            </div>
        </Auxiliary>
    )
}

export default DataTest