function delayedPromise(delay: number, message: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

delayedPromise(2000, "She's the tear in my heart").then((result) => {
    console.log(result); 
}); //возвращает Promise через 2 с

delayedPromise(5000, "I'm alive").then((result) => {
    console.log(result); 
}); //возвращает Promise через 5 с