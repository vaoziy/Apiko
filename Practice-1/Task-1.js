console.log("Task №1");
function printPowsOf2(number) {
    if (typeof number !== "number") {
      console.error("incorrect type");
      return;
    }
  
    let pow = 1;
  
    while (pow <= number) {
      console.log(pow);
  
      pow *= 2;
    }
  }
  
  printPowsOf2("302"); // "incorrect type"
  printPowsOf2(null); // "incorrect type"
  printPowsOf2(128); // 1, 2, 4, 8, 16, 32, 64
  printPowsOf2(60); // 1, 2, 4, 8, 16, 32