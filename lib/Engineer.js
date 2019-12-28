const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

const rick = new Engineer("rick", 33, "rick@rick.com", "RickHub");
console.log(rick.getRole());

module.exports = Engineer;
