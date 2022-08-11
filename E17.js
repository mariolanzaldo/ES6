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

const children = document.querySelector('#body > .info').childNodes;

const [text, div1, text2, div2, text3] = children;

div1.innerHTML = firstName;
div2.innerHTML = candidate.printName();
