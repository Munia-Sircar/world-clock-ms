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
}

displayCurrentTime();
setInterval(displayCurrentTime, 1000);

function showSelectedCity(event) {
  let city = event.target.value;
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
  </div>`;
}

let selectCity = document.querySelector("#choose-city");
selectCity.addEventListener("change", showSelectedCity);
