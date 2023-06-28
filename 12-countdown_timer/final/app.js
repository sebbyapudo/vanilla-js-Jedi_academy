const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2023, 6, 23, 11, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

let day = weekdays[futureDate.getDay()];
console.log(day);
giveaway.textContent = `Give away ends on ${day}, ${date}, ${month} ${year} ${hours}:${mins}am`;

// Get time in miliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const t = futureTime -currentTime
  console.log(t);
  // 1s --> 1000ms
  // 1m --> 60s
  // 1hr --> 60m
  // 1day --> 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin)
  let seconds = Math.floor((t % oneMin) / 1000)

  // set values array
  const values = [days,hours,minutes,seconds];

  function format(item) {
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }


  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
  if(t<0) {
    clearInterval(countDown)
    deadline.innerHTML = `<h4 class="expired">Sorry, this give away has expired!</h4>`
  }
}
// coutdown
let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime();