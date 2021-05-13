import React from 'react'
import Button from "@material-ui/core/Button"
import Input from "../../../../../UI/input/input"
import UserSelect from "../../../../../UI/select/select"
import Auxiliary from "../../../../../../hoc/auxiliary/auxiliary"

const DataTest = ({state, text}) => {

    return (
        <Auxiliary>
            <div>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: state? '#a90329' : '#739e73',
                        color: '#fff',
                    }}
                >
                    {text}
                </Button>
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Протокол'}
                    defaultValue={'Протокол'}
                    disabledType={state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Модель'}
                    defaultValue={'Модель'}
                    disabledType={state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Размер'}
                    defaultValue={'0'}
                    disabledType={state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Заводской номер'}
                    defaultValue={'Заводской номер'}
                    disabledType={state}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Rdin min'}
                    defaultValue={'255'}
                    disabledType={state}
                />
            </div>
            <div>
                <UserSelect
                    style={{width: '10vw'}}
                    disabledType={state}
                />
            </div>
        </Auxiliary>
    )
}

export default DataTest