var candidate = {
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

console.log(candidate.printName());
