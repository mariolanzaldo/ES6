function formatTime(date, format) {
    const m = "0" + date.getMinutes();
    const s = "0" + date.getSeconds();
    if (format === '12h') {
        let h = date.getHours();
        let ap = "am";
        if (h >= 12) {
            ap = "pm";
            if (h >= 13) h -= 12;
        } else if (h == 0) {
            h = 12;
        }
        h = "0" + h;
        return `${h.slice(-2)}:${m.slice(-2)}:${s.slice(-2)} ${ap}`;
    } else if (format === '24h') {
        const h = '0' + date.getHours();
        return `${h.slice(-2)}:${m.slice(-2)}:${s.slice(-2)}`;
    } else {
        throw new Error('Introduce a valid format');
    }
}

const date = new Date();
const output = formatTime(date, '24h');
console.log(output);
