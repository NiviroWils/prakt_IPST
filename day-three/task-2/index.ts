async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка! Статус: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        throw error; // Проброс ошибки, если нужно обработать её дальше
    }
}

// Пример использования с успешой отработкой запроса

fetchData("https://pokeapi.co/api/v2/evolution-chain/10")
    .then((data) => {
        console.log("Данные получены:", data);
    })
    .catch((error) => {
        console.error("Обработка ошибки в вызове функции:", error);
    });


// Пример использования с неудачной отработкой запроса (проверить, выдается ли ошибка)

fetchData("https://pokeapi.co/api/v2/evolution-chain/1050")
    .then((data) => {
        console.log("Данные получены:", data);
    })
    .catch((error) => {
        console.error("Обработка ошибки в вызове функции:", error);
    });
