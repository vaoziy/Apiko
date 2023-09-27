function getSeasonByMonth(month) {
  const months = {
      "january": 1,
      "february": 2,
      "march": 3,
      "april": 4,
      "may": 5,
      "june": 6,
      "july": 7,
      "august": 8,
      "september": 9,
      "october": 10,
      "november": 11,
      "december": 12
  };

  const normalizedMonth = month.toLowerCase();

  if (months[normalizedMonth]) {
      const monthNumber = months[normalizedMonth];
      if (monthNumber >= 3 && monthNumber <= 5) {
          return "Весна";
      } else if (monthNumber >= 6 && monthNumber <= 8) {
          return "Літо";
      } else if (monthNumber >= 9 && monthNumber <= 11) {
          return "Осінь";
      } else {
          return "Зима";
      }
  } else {
      return "Невідомий місяць";
  }
}

console.log(getSeasonByMonth("SEPTEMBER")); // Осінь
console.log(getSeasonByMonth("NOVEMBER"));  // Осінь
console.log(getSeasonByMonth("JULY"));      // Літо
console.log(getSeasonByMonth("APRIL"));     // Весна
