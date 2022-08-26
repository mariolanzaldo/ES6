let candidate = {
    name: {
        firstName: 'John',
        lastName: 'Galt',
        phone: '123-456-7890'
    },
    printName: function () {
        const fullName = `${this.name.firstName} ${this.name.lastName}`;
        return fullName;
    }
}

const { name: { firstName, lastName } } = candidate

const [div1, div2] = document.querySelector('#body > .info').children;

div1.innerHTML = firstName;
div2.innerHTML = candidate.printName();
