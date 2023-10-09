console.log("Task №4");
function findUser(initialObject) {
    let result = Object.keys(initialObject).filter(name => initialObject[name].city === "London" && initialObject[name].age > 18);
    console.log(result);
}

const users = {
    Max: {age: 23, city: "London"},
    Mike: {age: 20, city: "NY"}
};

findUser(users); // Виведе: ["Max"]
