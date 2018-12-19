// today's forecast saved to a constant variable
const kelvin = prompt('What is the kelvin temperature today?')

// conversion for kelvin to celsius--celsius is 273 less than kelvin
const celsius = kelvin - 273;

// conversion for celsius to fahrenheit using formula
let fahrenheit = celsius * (9/5) + 32;

// rounding the decimal down
fahrenheit = Math.floor(fahrenheit);

// string interpolation to log the temperature in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit and ${celsius} degrees celsius.`);