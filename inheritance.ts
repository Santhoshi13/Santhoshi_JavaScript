class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}

let emp1 = new Employee('Santhoshi','Lakshmi','Front-end Developer');

let emp2 = new Employee('Santhu', 'XYZ', 'Web Developer');

console.log(emp1.getFullName());
console.log(emp2.describe());
