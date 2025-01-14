function countFilledValues(obj: Record<string, unknown>): number {
    
    let count = 0;

    for (const key in obj) {
        const value = obj[key];
        if (value !== null && value !== undefined && value !== "") {
            count++;
        }
    }

    return count;
}

const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "alice@example.com",
    notes: null,
};

console.log(countFilledValues(data)); 
