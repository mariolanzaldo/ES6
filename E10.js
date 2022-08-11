class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    }

    sendData(url) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(JSON.stringify(this.getFullName()));
    }
}

class Medic extends Person {
    constructor(name, lastName, specialty) {
        super(name, lastName);
        this.specialty = specialty;
    }

    getFullData() {
        const fullName = this.getFullName();
        const specialty = `${this.specialty}`;

        return { fullName, specialty };
    }
}

const martha = new Medic('Martha', 'Rodrigue', 'Dermatologist');
console.log(martha.getFullData());
const pacientList = martha.sendData("https://jsonplaceholder.typicode.com/users");
