let seconds = 10;
const pauseVideo = () => {
    setInterval(() => {
        seconds--;
        if (seconds === 0) {
            stopFunc()
            document.getElementById("myVideo").pause();
            console.log("paused");
            divToggle()
        }
    }, 1000);
}
pauseVideo()
const divToggle = () => {
    $("#passwordDiv").toggle("swing")
}
const stopFunc = () => {
    clearInterval(pauseVideo())
}

$("#passSubmit").on("click", (e) => {
    e.preventDefault();
    console.log($("#passwordInput").val());
    if($("#passwordInput").val() === "1995") {
        location.replace("snake.html")
    } else {
        location.replace("index.html")
    }
})

