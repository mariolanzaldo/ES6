var candidate = {
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

console.log(candidate.printName());