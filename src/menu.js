function createMenuOption(name, price){

    return {name, price};
}


const currentMenu = [createMenuOption("Cheese Enchilladas", 15), 
                    createMenuOption("Mac & Cheese", 10),
                    createMenuOption("California Burrito", 10),
                    createMenuOption("Chicken-fried Steak & Eggs", 14),
                    createMenuOption("Beef Stew", 10),
                    createMenuOption("Asparagus with Hollandaise Sauce & Potatos", 17),
                    createMenuOption("Garlic Noodles with Mixed Vegetables", 9),
                    createMenuOption("Out of Ideas", 1000),
                    ];

export default function menu(view){
    view.className = "menu";
    const main = view.getElementsByClassName("main")[0];
    main.replaceChildren();

    currentMenu.forEach(entry =>{
       main.appendChild(createMenuEntry(entry)); 
    });
}


function createMenuEntry(menuEntry){
    const entry = document.createElement("div");
    const title = document.createElement("div");
    const priceBox = document.createElement("div");

    entry.className = "dish";
    title.innerText = menuEntry.name;
    priceBox.innerText = `$${menuEntry.price}`; 

    entry.appendChild(title);
    entry.appendChild(priceBox);

    return entry;
        
}
