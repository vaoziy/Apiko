console.log("Task №3");
function filterArray(initialArray) {
    let stringArray = initialArray.filter(item => typeof item === "string");
    console.log(stringArray);
}

filterArray([2, "string", 3, , , "test"]); // Виведе: ["string", "test"]
