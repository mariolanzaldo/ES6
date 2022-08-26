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
            const [...searchParams] = new URLSearchParams(paramsString);
            let urlQuery = `${url}/?`;
            let header = new Headers();

            header.append('Accept', 'application/json');

            for (const [key, value] of searchParams) {
                if (key && value) {
                    urlQuery = `${urlQuery}${key.replace(/\s+/g, '')}=${value.replace(/\s+/g, '')}`;
                }
            }

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
