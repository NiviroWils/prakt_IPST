function fakeApi(): Promise<
    { id: number; name: string; phone: string; email: string; location: string; status: "active" | "delete" }[]
> {
    const fakeData: { id: number; name: string; phone: string; email: string; location: string; status: "active" | "delete" }[] = [
        {
            id: 1,
            name: "Sam Winchester",
            phone: "+123456789",
            email: "sam.winchester@hunter.com",
            location: "Lawrence, Kansas, USA",
            status: "active", 
        },
        {
            id: 2,
            name: "Dean Winchester",
            phone: "+987654321",
            email: "dean.winchester@hunter.com",
            location: "Lawrence, Kansas, USA",
            status: "active", 
        },
        {
            id: 3,
            name: "Castiel",
            phone: "+192837465",
            email: "castiel@heaven.com",
            location: "Heaven",
            status: "active", 
        },
        {
            id: 4,
            name: "Crowley",
            phone: "+111222333",
            email: "crowley@hell.com",
            location: "Hell",
            status: "delete", 
        },
        {
            id: 5,
            name: "Bobby Singer",
            phone: "+444555666",
            email: "bobby.singer@hunter.com",
            location: "South Dakota, USA",
            status: "active", 
        },
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData);
        }, 2000); 
    });
}


fakeApi().then((data) => {
    console.log("Данные от API:", data);
});
