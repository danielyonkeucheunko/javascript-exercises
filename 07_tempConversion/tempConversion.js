const convertToCelsius = function (celsius) {
    return Math.round((celsius - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (fahrenheit) {
    return Math.round((fahrenheit * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
