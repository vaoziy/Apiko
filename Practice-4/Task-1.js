function compose(...functions) {
    return function (input) {
        return functions.reduceRight((result, fn) => fn(result), input);
    };
}

function modifyArray(modifyCondition) {
    return function (data) {
        return data.map(modifyCondition);
    };
}

function allToLower(arr) {
    const modifyCondition = (str) => str.toLowerCase();
    const modifiedArray = compose(modifyArray(modifyCondition))(arr);
    const result = `Result: ${modifiedArray.join(" - ")} length: ${modifiedArray.join(" - ").length}`;
    return result;
}

function capitalizeAllFirst(arr) {
    const modifyCondition = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const modifiedArray = compose(modifyArray(modifyCondition))(arr);
    const result = `Result: ${modifiedArray.join("-")} length: ${modifiedArray.join("-").length}`;
    return result;
}

const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const capitalizedResult = capitalizeAllFirst(testArray);
const loweredResult = allToLower(testArray);

console.log(capitalizedResult); // виведе 'Result: Custom-Web-And-Mobile-Platforms length: 31'
console.log(loweredResult); // виведе 'Result: custom - web - and - mobile - platforms length: 39'
