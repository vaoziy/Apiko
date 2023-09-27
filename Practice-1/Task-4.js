console.log("Task №4"); 
function calculateWordsInString(string) {

    const words = string.split(/\s+/);
    const nonEmptyWords = words.filter(word => word !== "");

    return `кількість слів: ${nonEmptyWords.length}`;
}

console.log(calculateWordsInString("Easy string for count"));  // "кількість слів: 4"
console.log(calculateWordsInString("Easy"));                    // "кількість слів: 1"
console.log(calculateWordsInString("Some string with a triple   space"));  // "кількість слів: 6"
console.log(calculateWordsInString("Some?  string, with a triple   space"));  // "кількість слів: 6"
