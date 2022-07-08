let candidate = {
    name: {
        firstName: 'John',
        lastName: 'Galt',
        phone: '123-456-7890'
    },
    printName: function () {
        const fullName = `The full name is: ${this.name.firstName} ${this.name.lastName}`;
        return fullName;
    }
}

const { name: { firstName, lastName } } = candidate

const body = document.querySelector('#body');
const info = body.querySelector('.info');
const children = info.querySelectorAll('div');

const [div1, div2] = children;

div1.innerHTML = firstName;
div2.innerHTML = candidate.printName();