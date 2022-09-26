class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    }

    async sendData(url) {

        try {
            const paramsString = `fullName=${this.getFullName()}`;
            const urlQuery = new URL(url);
            let header = new Headers();

            urlQuery.searchParams.append('fullName', this.getFullName());

            header.append('Accept', 'application/json');

            let request = new Request(urlQuery, {
                method: 'GET',
                headers: header,
            })
            const response = await fetch(request);
            if (!response.ok) {
                throw { status: response.status, statusText: response.statusText };
            }
            const json = await response.json();
            return json;
        } catch (err) {
            throw new Error(`Error with status: ${err}`);
        }
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
