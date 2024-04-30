function seconds() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
const timer = setInterval(seconds, 1000);
