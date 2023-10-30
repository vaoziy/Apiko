const URL = "https://jsonplaceholder.typicode.com";
const userID = 10;

async function fetchUserAlbums() {
    try {
        const response = await fetch(`${URL}/users/${userID}/albums`);
        if (!response.ok) throw new Error(`Помилка мережі: ${response.status}`);

        console.log(response.status);

        const userAlbums = await response.json();
        console.log(`Список альбомів користувача з id: ${userID}`);

        userAlbums.forEach(album => console.log(album));
    } catch (error) {
        console.error("Помилка:", { повідомлення: error.message, статус: error.status });
    }
}

fetchUserAlbums();
