var get = id => document.getElementById(id);
var make = type => document.createElement(type);
var add = (id, elem) => get(id).appendChild(elem);
var text = text => document.createTextNode(text);

var constructor = (link, name) => {
    let container = make("div");
    container.setAttribute("class", "container");
    
    let a = make("a");
    a.setAttribute("href", link)
    a.appendChild(make("span"));
    a.appendChild(text(name));
    
    container.appendChild(a);

    let box = make("div");
    box.setAttribute("class", "box");

    let frame = make("iframe");
    frame.setAttribute("src", link);
    frame.setAttribute("width", "1280px");
    frame.setAttribute("height", "720px");

    box.appendChild(frame);
    
    container.appendChild(box);
    return container;
}


d = "1000px"
let websites = [
    ["https://jvakos431.github.io",       "J-V Ákos"      ], 
    ["https://theconqueror327.github.io", "Erdőhelyi Márk"], 
    ["https://sorsaron13.github.io",      "Sors Áron"     ], 
    ["https://lolkapi.github.io",         "Domonkos Zalán"],
    ["https://azu-kitsu.github.io",       "Arho"          ]
];

let constructors = websites.map(website => add("buttons", constructor(website[0], website[1])));