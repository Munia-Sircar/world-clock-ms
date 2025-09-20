function displayCurrentTime() {
  //Dhaka

  let dhakaTimeElement = document.querySelector("#dhaka");
  let dhakaDate = dhakaTimeElement.querySelector(".date");
  let dhakaTime = dhakaTimeElement.querySelector(".time");

  let currentDhakaDate = moment().tz("Asia/Dhaka").format("MMMM Do YYYY");
  let currentDhakaTime = moment()
    .tz("Asia/Dhaka")
    .format("h:mm:ss [<small>]A[</small>]");

  dhakaDate.innerHTML = currentDhakaDate;
  dhakaTime.innerHTML = currentDhakaTime;

  // Bermuda

  let bermudaTimeElement = document.querySelector("#bermuda");
  let bermudaDate = bermudaTimeElement.querySelector(".date");
  let bermudaTime = bermudaTimeElement.querySelector(".time");

  let currentBermudaDate = moment()
    .tz("Atlantic/Bermuda")
    .format("MMMM Do YYYY");
  let currentBermudaTime = moment()
    .tz("Atlantic/Bermuda")
    .format("h:mm:ss [<small>]A[</small>]");

  bermudaDate.innerHTML = currentBermudaDate;
  bermudaTime.innerHTML = currentBermudaTime;

  // Darwin

  let darwinTimeElement = document.querySelector("#darwin");
  let darwinDate = darwinTimeElement.querySelector(".date");
  let darwinTime = darwinTimeElement.querySelector(".time");

  let currentDarwinDate = moment()
    .tz("Australia/Darwin")
    .format("MMMM Do YYYY");
  let currentDarwinTime = moment()
    .tz("Australia/Darwin")
    .format("h:mm:ss [<small>]A[</small>]");

  darwinDate.innerHTML = currentDarwinDate;
  darwinTime.innerHTML = currentDarwinTime;
}

displayCurrentTime();
setInterval(displayCurrentTime, 1000);

function showSelectedCity(event) {
  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
  }
  let cityTimeZone = moment().tz(city);
  let cityName = city.split("/")[1];

  let chosenCity = document.querySelector("#cities");
  chosenCity.innerHTML = `<div class="city" id="">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTimeZone.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTimeZone.format(
    "h:mm:ss"
  )}<small> ${cityTimeZone.format("A")}</small></div>
  </div>
  <a href="index.html">Home</a>
  `;
}

let selectCity = document.querySelector("#choose-city");
selectCity.addEventListener("change", showSelectedCity);
