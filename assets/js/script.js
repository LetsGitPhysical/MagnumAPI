const d = new Date();
// // dte prints:  Mon Oct 10 2022 12:34:10 GMT-0400 (Eastern Daylight Time)
// getDate()	Returns the day of the month (from 1-31)
// const d = new Date();
const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let moNum = d.getMonth(); // 0  to 11: (jan to dec)
let moName = monthArr[d.getMonth()];

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let dayNum = d.getDay();
let dayName = weekday[d.getDay()]; //(from 0-6)

// getDay()	Returns the day of the week (from 0-6)
// getFullYear()	Returns the year
// getHours()	Returns the hour (from 0-23)
let hrNum = d.getHours();

// getMilliseconds()	Returns the milliseconds (from 0-999)
// getMinutes()	Returns the minutes (from 0-59)
// getMonth()	Returns the month (from 0-11)
// getSeconds()	Returns the seconds (from 0-59)
// getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date

console.log(`full date     ${d}`);

console.log('month num: ',moNum, 'month name: ',moName);

console.log('weekday num: ',dayNum, 'weekday name: ',dayName);

console.log('the hour number: ',hrNum);