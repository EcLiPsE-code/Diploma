import randomInteger from './randomizer/randomizer'
import {parseDate} from "./dateFormatter/formatter";

export function generateDataTest(){
    const count = randomInteger(20, 50)
    const arrData = []
    let date = new Date()
    date.setDate(date.getDay() - randomInteger(10, 40))
    date.setHours(date.getHours() - randomInteger(5, 10))
    date.setMinutes(date.getMinutes() - randomInteger(10, 50))
    let startMileage = 0
    let startSpeed = 0
    let startTemp = 0
    for (let i = 1; i < count; i++){
        date.setMinutes(date.getMinutes() + 1)
        startMileage += randomInteger(1, 15)
        startSpeed += randomInteger(0, 7)
        startTemp = randomInteger(27, 38)
        arrData.push({
            datetime: parseDate(date),
            duration: `00:${i}:00`,
            mileage: startMileage,
            speed: startSpeed,
            dynamicR: randomInteger(20, 40),
            temp: startTemp
        })
    }
    return arrData
}