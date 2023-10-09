console.log("Task №6");
const Person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
};

const testArgs = ["sushi", "hiking"];

const logPersonNameAndInterests = (person, ...interests) => {
    console.log(`${person.getFullName()} loves: ${interests.join(", ")}`);
};

logPersonNameAndInterests(Person, ...testArgs);