function addNextMonth(str) {
    let months = {
        December: 'January',
        January: 'February',
        February: 'March',
        March: 'April',
        April: 'May',
        May: 'June',
        June: 'July',
        July: 'August',
        August: 'September',
        September: 'October',
        October: 'November',
        November: 'December'
    };

    let temporary = [];
    let monthArray = str.split(' ');

    for (let i = 0; i < monthArray.length; i++) {
        if (monthArray[i + 1] !== months[monthArray[i + 1]] && monthArray.length === new Set(monthArray).size) {
            temporary.push(monthArray[i]);
        }
        if (!temporary.includes(monthArray[i])) {
            temporary.push(monthArray[i]);
            temporary.push(months[monthArray[i]]);
        }
    }

    if (monthArray.length !== new Set(monthArray).size) {
        temporary = [...temporary, ...temporary]
    }

    temporary = temporary.join(' ');

    return temporary;
}

const str = `June July August June July August`;
let output = addNextMonth(str);
console.log(output);
