function YesterdayWas(date) {
    date.setDate(date.getDate() - 1)
    return date;
}

const date = new Date();
console.log(date);
const output = YesterdayWas(date);
console.log(output);
