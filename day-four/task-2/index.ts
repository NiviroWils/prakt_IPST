type PriceStatus = string | undefined;

type UserWithGadget = {  //пользователь с одним гаджетом
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: PriceStatus;
    };

};

type UserWithGadgets = { //пользователь со множеством гаджетов 
    id: string;
    name: string;
    gadgets: UserWithGadget["gadget"][]; 
};

function aggregateUsersWithGadgets(input: UserWithGadget[]) {

    const userMap = new Map<string, UserWithGadgets>(); //решила использовать Map, так как, если бы данных было больше, он был бы оптимальным вариантом

    for (const entry of input) {
        const { id, name, gadget } = entry;

    
        if (userMap.has(id)) {
            userMap.get(id)?.gadgets.push(gadget);
        } else {
            userMap.set(id, { id, name, gadgets: [gadget] });
        }
    }

   
    return Array.from(userMap.values()); //обратно в массив
}


const input: UserWithGadget[] = [
    { id: "1", name: "Khalid Kashmiri", gadget: { id: "101", name: "Phone", price: "1000" } },
    { id: "2", name: "Khidir Karawita", gadget: { id: "102", name: "Tablet", price: undefined } },
    { id: "1", name: "Khalid Kashmiri", gadget: { id: "103", name: "Laptop", price: "1500" } },
];

const output = aggregateUsersWithGadgets(input);
console.log(output);
