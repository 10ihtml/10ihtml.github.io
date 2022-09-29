var make = type => document.createElement(type);
var add = (id, elem) => document.getElementById(id).appendChild(elem);

var constructor = (link, name) => {
    let frame = make("iframe");
    frame.src = link;

    let box = make("div");
    box.className = "box";
    box.appendChild(frame);

    let a = ((a) => {
        a.href = link;
        a.appendChild(make("span"));
        a.appendChild(document.createTextNode(name));
        return a;
    })(make("a"))

    let container = make("div");
    container.className = "container"
    container.appendChild(a);
    container.appendChild(box);    
    return container;
}

let websites = [
    ["https://jvakos431.github.io",       "J-V Ákos"      ], 
    ["https://theconqueror327.github.io", "Erdőhelyi Márk"], 
    ["https://sorsaron13.github.io",      "Sors Áron"     ], 
    ["https://lolkapi.github.io",         "Domonkos Zalán"],
    ["https://azu-kitsu.github.io",       "Arho"          ]
];

let constructors = websites.map(website => add("buttons", constructor(website[0], website[1])));