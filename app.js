const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "",
        ital: "Pepsi zero",
        ar: 2000,
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 2,
        pizza: "Songoku",
        extra: "",
        ital: "",
        ar: 1750,
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 3,
        pizza: "Húsimádó",
        extra: "Csípős paprika",
        ital: "Ásványvíz",
        ar: 2500,
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 4,
        pizza: "Pikáns",
        extra: "",
        ital: "Nestea",
        ar: 1900,
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 5,
        pizza: "Korfu",
        extra: "Olivabogyó",
        ital: "Pespi",
        ar: 2340,
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: 6,
        pizza: "Bolognai",
        extra: "",
        ital: "",
        ar: 1700,
        kep: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

const result = document.getElementById("result");

let output = "";

orders.map(pizza => {

    output += `
    
        <div class="order">
        
            <div>
                <img src="${pizza.kep} alt="${pizza.pizza}" />
            </div>

           <h3>${pizza.pizza}</h3>
           <hr>
           <h4>Ár: ${pizza.ar} Ft</h4>
           <p>Extra: ${pizza.extra}</p>
           <p>Ital: ${pizza.ital}</p>

        </div>
    
    `;
})

result.innerHTML = output;