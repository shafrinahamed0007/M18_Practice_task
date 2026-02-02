/**
 * Write a function to convert temperature from Celsius to Fahrenheit
 */

function celsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return (
    celsius +
    " " +
    "degree celsius equal to " +
    fahrenheit +
    " " +
    "degree fahrenheit"
  );
}

let currentCelsius = 20;
let fahrenheit = celsiusToFahrenheit(currentCelsius);
console.log(fahrenheit);
