Date.prototype.getNextDay = function getNextDay() {
    let nextDay = new Date(this.valueOf());
    nextDay.setDate(this.getDate() + 1);
    return nextDay;
}



const date = new Date();
const nextDay = date.getNextDay();
console.log(date);
console.log(nextDay)