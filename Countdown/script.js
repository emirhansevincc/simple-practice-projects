function countdown(){

    // In order : Days to count, now, difference
    const date = new Date("Sep 25, 2022 00:00:00").getTime()
    const today = new Date().getTime()
    const time = date - today

    const second = 1000;
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // Day, hour minute and second calculations
    const dayPart = Math.floor(time / day)
    const hourPart = Math.floor((time % day) / hour)
    const minutePart = Math.floor((time % hour) / minute)
    const secondPart = Math.floor((time % minute) / second)

    // console.log(dayPart, hourPart, minutePart, secondPart)

    document.querySelector(".day").innerText = dayPart
    document.querySelector(".hour").innerText = hourPart
    document.querySelector(".minute").innerText = minutePart
    document.querySelector(".second").innerText = secondPart

    finish = document.querySelector(".countdown")

    if(time < 100){
        finish.innerHTML = "<h1>COUNTDOWN IS STOPPED</h1>"
        clearInterval(interval)

    }

}
const interval = setInterval(countdown, 1000)