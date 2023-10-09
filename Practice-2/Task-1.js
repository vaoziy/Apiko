console.log("Task №1");
function unicFn(initialArray) {
    let uniqueValues = [...new Set(initialArray)];
    console.log(uniqueValues);
}

unicFn([2, 3, 1, 3, 3, 7]); // Виведе: [2, 3, 1, 7]
