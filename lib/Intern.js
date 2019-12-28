const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

const jim = new Intern("Jim", 988, "jim@jim.com", "UNCC");
console.log(jim.getSchool());

module.exports = Intern;
