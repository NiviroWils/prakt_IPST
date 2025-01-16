type IStatus = "true" | "false"; //или лучше было использовать boolean? 

interface User {
    id: number;
    name: string;
    email: string;
    isActive: IStatus;
}

function cleanUserData(users: User[]): Promise<User[]> {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.1) {
            reject(new Error("Ошибка обработки данных пользователей."));
            return;
        }

        const cleanedUsers: User[] = [];
        for (const user of users) {
            if (user.isActive === "true") { //отсеиваем некативных, оставляем активных 
                cleanedUsers.push({
                    id: user.id,
                    name: user.name.trim().toLowerCase(),
                    email: user.email.toLowerCase(),
                    isActive: user.isActive,
                });
            }
        }

        resolve(cleanedUsers);
    });
}

const users: User[] = [
    { id: 1, name: "User1", email: "user1@example.com", isActive: "true" },
    { id: 2, name: "User2", email: "user2@Example.com", isActive: "false" },
    { id: 3, name: "User3", email: "User3@EXAMPLE.com", isActive: "true" },
];

cleanUserData(users)
    .then((cleanedUsers) => {
        console.log("Обработанные данные пользователей:", cleanedUsers);
    })
    .catch((error) => {
        console.error("Ошибка:", error instanceof Error ? error.message : "Неизвестная ошибка");
    });
