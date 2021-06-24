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
                    arr={props.protocols}
                    title={'Протокол'}
                    style={{
                        width: '15vw',
                    }}
                    keyInput={'protocol'}
                    keyPosition={props.keyPosition}
                    onChange={props.setDataTestHandler}
                    disabledType={props.state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Модель'}
                    keyInput={'model'}
                    keyPosition={props.keyPosition}
                    disabledType={props.state}
                    onChange={props.setDataTestHandler}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Размер'}
                    keyInput={'size'}
                    keyPosition={props.keyPosition}
                    disabledType={props.state}
                    onChange={props.setDataTestHandler}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Заводской номер'}
                    keyInput={'number'}
                    keyPosition={props.keyPosition}
                    disabledType={props.state}
                    onChange={props.setDataTestHandler}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Rdin min'}
                    keyInput={'rDin'}
                    keyPosition={props.keyPosition}
                    disabledType={props.state}
                    onChange={props.setDataTestHandler}
                />
            </div>
            <div>
                <UserSelect
                    arr={props.methodologys}
                    title={'Методология'}
                    style={{
                        width: '15vw',
                    }}
                    keyInput={'methodology'}
                    keyPosition={props.keyPosition}
                    onChange={props.setDataTestHandler}
                    disabledType={props.state}
                />
            </div>
        </Auxiliary>
    )
}

export default DataTest