console.log("Task №2");
function isEvenArray(initialArray) {
    const isAllEven = initialArray.every(num => num % 2 === 0);
    if (isAllEven) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

isEvenArray([1, 2, 3, 9]); // Виведе: NO
isEvenArray([2, 4, 6]); // Виведе: YES
