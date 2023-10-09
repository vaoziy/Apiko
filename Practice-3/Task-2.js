console.log("Task №2");
const car = {
    name: "Tesla",
    model: "X",
};

function showCarInfo() {
    const fullName = this.name + ' ' + this.model;
    console.log(fullName);
}

const boundShowCarInfo = showCarInfo.bind(car);
boundShowCarInfo(); // "Tesla X"