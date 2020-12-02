const clockContainer = document.querySelector(".js-clock"),
      clockTime = clockContainer.querySelector(".js-time");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    clockTime.innerText = `${hours > 12 ? `${hours - 12}` : hours
            } : ${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init()