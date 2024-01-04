const url =
  "https://api.open-meteo.com/v1/forecast?latitude=42.37614837272497&longitude=-87.88646801151233&hourly=temperature_2m&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=3";

function search() {
  fetch(url)
    .then((red) => red.json())
    .then((data) => {
      console.log(data);
    })
    .then((data) => {})
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

search();
