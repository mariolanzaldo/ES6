function secondsToMicroSeconds(value, type) {
    let output;
    if (type === 'µs' && typeof type === 'string') {
        output = value * 1000000;
    } else if (type === 's' && typeof type === 'string') {
        output = value / 1000000;
    } else {
        throw new Error('The type is only accepted in SI unit notation');
    }
    return output
}

function weekDaysNames() {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}

function to12HourTimeString() {
    let h = this.getHours();
    let m = "0" + this.getMinutes();
    let s = "0" + this.getSeconds();
    let ap = "am";
    if (h >= 12) {
        ap = "pm";
        if (h >= 13) h -= 12;
    } else if (h == 0) {
        h = 12;
    }
    h = "0" + h;
    return h.slice(-2) + ":" + m.slice(-2) + ":" + s.slice(-2) + " " + ap;
};

function modifyDate(modifiedProp, value) {
    Date.prototype[modifiedProp] = value;
}

modifyDate("µsToSConverter", secondsToMicroSeconds);
modifyDate("weekDaysNames", weekDaysNames);
modifyDate("to12HourTimeString", to12HourTimeString);

const date = new Date();
console.log(date.weekDaysNames());
console.log(date.to12HourTimeString());
console.log(date.µsToSConverter(100, "µs"));