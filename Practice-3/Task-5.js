console.log("Task №5");
const convert = (bytes) => {
    const mb = bytes / 1048576;
    return `${mb.toFixed(2)} Mb`;
};

// Call the function
console.log(convert(10000)); // 0.01 Mb