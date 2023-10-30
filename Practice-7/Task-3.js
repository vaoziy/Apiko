const URL = "https://jsonplaceholder.typicode.com";

const newUser = {
  name: "Valeriy",
  username: "vaoziy",
  email: "va.oziychuk@gmail.com"
};

async function createNewUser() {
  try {
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) throw new Error(`Помилка мережі: ${response.status}`);

    const createdUser = await response.json();
    console.log("Новий користувач створений:");
    console.log(createdUser);
  } catch (error) {
    console.error("Помилка:", { повідомлення: error.message, статус: error.status });
  }
}

createNewUser();
