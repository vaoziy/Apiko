class Person {
    constructor(name) {
        this.name = name;
        this._timer = setTimeout(() => {
            this.name = null;
        }, 5000);
    }

    stopTimer() {
        clearInterval(this._timer);
    }
}

const person = new Person("John Doe");
console.log(person.name); // "John Doe"

setTimeout(() => {
    person.stopTimer();
    console.log(person.name); // null
}, 5000);
