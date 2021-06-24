export default function formatterDateChart(date){
    const hours = +date.getHours() < 10? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes()
    const seconds = date.getSeconds() < 10? `0${date.getSeconds()}` : date.getSeconds()

    return `${hours}:${minutes}:${seconds}`
}

export function parseDate(date){
    const year = date.getFullYear()
    const day = ('0' + date.getDay()).slice(-2)
    const month = ('0' + date.getMonth()).slice(-2)
    const hours = ('0' + date.getHours()).slice(-2)
    const minutes = ('0' + date.getMinutes()).slice(-2)
    const seconds = ('0' + date.getSeconds()).slice(-2)

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
}

export function parseTime(time){
    const [hours, minutes, seconds] = time.split(':')

    let date = new Date()
    date.setHours(hours)
    date.setMinutes(minutes)
    date.setSeconds(seconds)

    const newHours = ('0' + date.getHours()).slice(-2)
    const newMinutes = ('0' + date.getMinutes()).slice(-2)
    const newSeconds = ('0' + date.getSeconds()).slice(-2)

    return `${newHours}:${newMinutes}:${newSeconds}`
}

export function formatterDate(time){

}