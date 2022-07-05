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
        let fetchStatus;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(this),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            fetchStatus = response.status;
            return response.json();
        }).then(json => {
            if (fetchStatus === 201) {
                console.log(json);
            }
        }).catch((err) => {
            throw new Error(`An unexpected error ocurred: ${err}`);
        });
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
martha.sendData("https://jsonplaceholder.typicode.com/users");
