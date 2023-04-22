const express = require("express");
const expressApp = express();
expressApp.use(express.json());

var pwd = "H3H3B0Y";
var menu_data = {hot : [] , ice : []};

async function fetchMenu(type , max_menu_number) {
    var url_type = type;
    if ( type == "ice") {url_type = "iced";}
    for ( var menu_number = 1 ; menu_number < max_menu_number ; menu_number++ ) {
        await fetch("https://api.sampleapis.com/coffee/"+url_type+"/"+menu_number)
        .then(res => res.json())
        .then(menu => {
            console.log(menu);
            menu["price"] = menu["id"]*10;
            menu_data[type].push(menu);
        });
    }
}   

fetchMenu("hot" , (18)+1);
fetchMenu("ice" , (6)+1);

expressApp.get("/" , (req , res) => {
    console.log("Check status [202]");
    res.send("Status : OK [202]");
})

// TODO : Get Methods
expressApp.get("/api/menu/:type" , (req , res) => {
    var type = req.params.type;
    if (["hot","ice"].includes(type)) {
        console.log("202");
        res.send(menu_data[type]);
    } else {
        console.log("404");
        res.send("404");
    }
});
expressApp.get("/api/menu/:type/:id" , (req , res) => {
    var type = req.params.type;
    var id = Number(req.params.id)-1;
    if (["hot","ice"].includes(type) && !isNaN(id) && id >= 0 && id < menu_data[type].length) {
        console.log('202');
        res.send(menu_data[type][id]);
    } else {
        console.log("404");
        res.send("404");
    }
});

// TODO : Port setting
const port = 4000;
expressApp.listen(port, () => {
    // listen for connection request.
    console.log("Listening on port",port);
});

module.exports = expressApp;