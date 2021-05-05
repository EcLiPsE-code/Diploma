import React from 'react'
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
                        backgroundColor: '#739e73',
                        color: '#fff',
                    }}
                >
                    Поз.1
                </Button>
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Протокол'}
                    defaultValue={'Протокол'}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Модель'}
                    defaultValue={'Модель'}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Размер'}
                    defaultValue={'0'}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Заводской номер'}
                    defaultValue={'Заводской номер'}
                />
            </div>
            <div>
                <Input
                    variant={'outlined'}
                    label={'Rdin min'}
                    defaultValue={'255'}
                />
            </div>
            <div>
                <UserSelect style={{width: '10vw'}}/>
            </div>
        </Auxiliary>
    )
}

export default DataTest