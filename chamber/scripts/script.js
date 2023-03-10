const options = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', options)

// shows the last time the code was modified
const date = new Date(document.lastModified);
const lastModifiedDate = date.toLocaleDateString();
const lastModifiedTime = date.toLocaleTimeString();
document.getElementById('date').textContent = lastModifiedDate
document.getElementById("time").textContent = lastModifiedTime


const navBtn = document.querySelector("#nav-btn");
const navEl = document.querySelector("nav");
const dateEl = document.querySelector("#header-date");
const footerEl = document.querySelector("#footer-year")
const modEl = document.querySelector(".last-modification")

navBtn.addEventListener("click", function(){
    navEl.classList.toggle("open")
    navBtn.classList.toggle("open")
});

const curDate = new Date()
const curDay = function(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[curDate.getDay()]}
const curDayofMonth = curDate.getDate()
const curMonth = function(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"]
    return months[curDate.getMonth()]}
const curYear = curDate.getFullYear()

dateEl.innerHTML = `${curDay()}, ${curDayofMonth} ${curMonth()} ${curYear}`;

footerEl.innerHTML = `&copy${curYear} Inland Valley Chamber`

// const lastModifiedDate = new Date(document.lastModified)

// let modYear = lastModifiedDate.getFullYear();
// let modDay = lastModifiedDate.getDay();
// let modMonth = lastModifiedDate.getMonth();
// let modminute = lastModifiedDate.getMinutes();
// let modsecond = lastModifiedDate.getSeconds()
// let modhour = lastModifiedDate.getHours(); 

// modEl.innerHTML = `Last Updated: ${modMonth}/${modDay}/${modYear} ${modhour}:${modminute}:${modsecond}`

// set active

function active() {
    switch (document.title) {
      case "Inland Chamber of Commerce":
        document.querySelector("#home").classList.add("active");
        break;
  
      case "Inland Chamber of Commerce - Discover":
        document.querySelector("#discover").classList.add("active");
        break;
  
      case "Inland Chamber of Commerce - Join":
        document.querySelector("#join").classList.add("active");
        break;
  
      case "Inland Chamber of Commerce - Directory":
        document.querySelector("#directory").classList.add("active");
        break;
  
      case "Inland Chamber of Commerce - Contact":
        document.querySelector("#contact").classList.add("active");
        break;
    }
  }