function isString(callback, value) {
    if (typeof value === "string" && typeof callback === "function") {
        callback(value);
    } else {
        console.error("Value is not a string or callback is not a function");
    }
}

isString((value) => console.log(value), "Hello, world!"); // "Hello, world!"
isString((value) => console.log(value), 123); // "Value is not a string or callback is not a function"
