module.exports = function toReadable (number) {
const unitsNumbers = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const decadesNumbers = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
if (number < 20) return unitsNumbers[number];
else if (number >= 20 && number < 100) {
    if  (number %  10 === 0) return decadesNumbers[number / 10 - 1];
    else return `${decadesNumbers[Math.trunc(number / 10) - 1]} ${unitsNumbers[number % 10]}`;
}
else if (number >= 100 && number < 1000) {
    if (number % 100 === 0) return `${unitsNumbers[number / 100]} hundred`;
    else if (number % 100 < 20) return `${unitsNumbers[Math.trunc(number / 100)]} hundred ${unitsNumbers[number % 100]}`;
    else if (number % 10) return `${unitsNumbers[Math.trunc(number / 100)]} hundred ${decadesNumbers[number % 100 / 10 - 1]}`
    else return `${unitsNumbers[Math.trunc(number / 100)]} hundred ${decadesNumbers[Math.trunc(number / 10) % 10 - 1])} ${unitsNumbers[number % 10]}`
}  
}
