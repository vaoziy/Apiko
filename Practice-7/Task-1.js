const URL = "https://jsonplaceholder.typicode.com";

async function fetchUsers() {
  try {
    const response = await fetch(`${URL}/users`);
    if (!response.ok) throw new Error(`Помилка мережі: ${response.status}`);
    const users = await response.json();
    console.log("Список користувачів:");
    users.forEach(user => console.log(user));
  } catch (error) {
    console.error("Помилка:", { повідомлення: error.message, статус: error.status });
  }
}

fetchUsers();
