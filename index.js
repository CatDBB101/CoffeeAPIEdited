const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressApp = express();
const mongoose = require("mongoose");

const url =
    "mongodb+srv://CoderCafeDatabase:H3H3B0Y_DB@codercafedatabase.feej77b.mongodb.net/CoderCafe";
mongoose.set("strictQuery", false);
mongoose.connect(
    url, // TODO : Connect to mongoDB database
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true,
    },
    (err) => {
        if (err) {
            console.log(err);
            console.log("Connect faild (Hmm... something wrong)");
        } else {
            console.log("Connected to mongoDB");
        }
    }
);

const UserDataPatern = new mongoose.Schema({
    username: String,
    password: String,
});

const UserData = mongoose.model("user_datas", UserDataPatern);

expressApp.use(
    cors({
        origin: "http://127.0.0.1:5500",
        credentials: true,
        SameSite: "None",
        secure: true,
    })
);

// expressApp.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5500");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

expressApp.use(cookieParser());
expressApp.use(express.json());

var pwd = "H3H3B0Y";
var menu_data = {
    hot: [
        {
            title: "Espresso",
            description:
                "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
            ingredients: [
                "Espresso",
                "Whiskey",
                "Ice cream",
                "Chocolate",
                "Foamed milk",
            ],
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
            id: 1,
        },
        {
            title: "Doppioo",
            description:
                "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
            ingredients: ["Espresso"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/2560px-Doppio.jpg",
            id: 2,
        },
        {
            title: "Cortado",
            description:
                "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.",
            ingredients: ["Espresso", "Steamed Milk"],
            image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg",
            id: 3,
        },
        {
            title: "Red Eye",
            description:
                "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
            ingredients: ["Coffee", "Espresso"],
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Linea_doubleespresso.jpg",
            id: 4,
        },
        {
            title: "Galão",
            description:
                "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
            ingredients: ["Espresso", "Foamed milk"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gal%C3%A3o.jpg/1280px-Gal%C3%A3o.jpg",
            id: 5,
        },
        {
            title: "Lungo",
            description:
                "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
            ingredients: ["Long pulled espresso"],
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Caff%C3%A8_lungo.JPG",
            id: 6,
        },
        {
            title: "Macchiato",
            description:
                "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.",
            ingredients: ["Espresso", "Foamed milk"],
            image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg",
            id: 7,
        },
        {
            title: "Mocha",
            description:
                "For all you chocolate lovers out there, you’ll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
            ingredients: ["Espresso", "Steamed Milk", "Chocolate"],
            image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Mocaccino-Coffee.jpg",
            id: 8,
        },
        {
            title: "Ristretto",
            description:
                "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
            ingredients: ["Short pulled espresso"],
            image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Doppio_ristretto_Chiang_Mai.jpg",
            id: 9,
        },
        {
            title: "Flat White",
            description:
                "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It’s an espresso drink with steamed milk.",
            ingredients: ["Espresso", "Steamed Milk"],
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg",
            id: 10,
        },
        {
            title: "Affogato",
            description:
                "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
            ingredients: ["Espresso", "Ice cream"],
            image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Vinoteca%2C_Smithfield%2C_London_%284485849609%29.jpg",
            id: 11,
        },
        {
            title: "Café au Lait",
            description:
                "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you’re all set!",
            ingredients: ["Coffee", "Steamed Milk"],
            image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Latte_art.jpg",
            id: 12,
        },
    ],
    ice: [
        {
            title: "Iced Coffee",
            description:
                "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
            ingredients: ["Coffee", "Ice", "Sugar*", "Cream*"],
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
            id: 1,
        },
        {
            title: "Iced Espresso",
            description:
                "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
            ingredients: ["Espresso", "Ice", "Sugar*", "Cream*"],
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Home_Made_Ice_Coffee.jpg",
            id: 2,
        },
        {
            title: "Cold Brew",
            description:
                "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.",
            ingredients: ["Long steeped coffee", "Ice"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ColdBrewCoffeein_Cans.png/640px-ColdBrewCoffeein_Cans.png",
            id: 3,
        },
        {
            title: "Frappuccino",
            description:
                "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. ",
            ingredients: ["Espresso", "Blended ice", "Whip*"],
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Strawberry_Delight_Frappuccino.JPG",
            id: 4,
        },
        {
            title: "Nitro",
            description:
                "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)",
            ingredients: ["Coffee", "Nitrogen bubbles", "Sugar*", "Cream*"],
            image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg",
            id: 5,
        },
        {
            title: "Mazagran",
            description:
                "Mazagran coffee is a cross between iced coffee, tea and your favorite rum drink. It typically consists of espresso, lemon, sugar and (sometimes) rum.",
            ingredients: ["Coffee", "Sugar", "Lemon", "Rum*"],
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Caf%C3%A9_mazagran.jpg",
            id: 6,
        },
    ],
};

for (var i = 0; i < menu_data.hot.length; i++) {
    menu_data.hot[i].price = menu_data.hot[i].id * 10;
}
for (var i = 0; i < menu_data.ice.length; i++) {
    menu_data.ice[i].price = menu_data.ice[i].id * 10;
}

expressApp.get("/get-cookie", (req, res) => {
    res.cookie("Username", "BruhGmail@gmail.com", { maxAge: 1000 * 60 * 60 });
    console.log(req.cookies["Username"]);
    res.end();
});

expressApp.get("/", (req, res) => {
    console.log("Check status [202]");
    res.send("Status : OK [202]");
});

// TODO : Menu : Get Methods
expressApp.get("/api/menu/:type", (req, res) => {
    console.log(req.cookies);
    var type = req.params.type;
    if (["hot", "ice"].includes(type)) {
        console.log("202");
        res.send(menu_data[type]);
    } else {
        console.log("404");
        res.send(["404"]);
    }
});
expressApp.get("/api/menu/:type/:id", (req, res) => {
    var type = req.params.type;
    var id = Number(req.params.id) - 1;
    if (
        ["hot", "ice"].includes(type) &&
        !isNaN(id) &&
        id >= 0 &&
        id < menu_data[type].length
    ) {
        console.log("202");
        res.send(menu_data[type][id]);
    } else {
        console.log("404");
        res.send(["404"]);
    }
});

// TODO : Account : Register / Create : Post Methods
// expressApp.options('/api/account/register', cors());
expressApp.post("/api/account/register", async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var pwd_input = req.body.pwd;

    if (pwd_input == pwd) {
        var username_used = false;
        await UserData.find({ username: username })
            .then((data) => {
                if (data.length) {
                    username_used = true;
                }
            })
            .catch((err) => {
                console.log(err);
                console.log("Ops something wrong with find function.");
            });

        if (!username_used) {
            // ? Can create
            await UserData.create({
                // TODO : Create new account to database
                username: username,
                password: password,
            })
                .then((result) => {
                    res.cookie("LoginKey", "Hello, World!", {
                        maxAge: 86400000,
                        httpOnly: true,
                        domain: "http://127.0.0.1:5500",
                        SameSite: "None",
                        sercure: true,
                    });
                    res.send(["Created"]);
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Ops something wrong.");
                    res.send(["401"]);
                });
        } else {
            // ? Username used
            if (username_used) {
                // ? Password rule wrong
                res.send(["UsernameUsed"]);
            } else {
                res.send(["SomethingWrong"]);
            }
        }
    } else {
        console.log("402");
        res.send(["402"]);
    }

    res.end();
});

// TODO : Account : Login : Get Methods
expressApp.get("/api/account/login", async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var pwd_input = req.body.pwd;
    if (pwd_input == pwd) {
        var username_correct = false; // TODO : Check username correct
        await UserData.find({ username: username })
            .then((data) => {
                if (data.length) {
                    username_correct = true;
                }
            })
            .catch((err) => {
                console.log(err);
                console.log("Ops something wrong with find function");
            });

        var password_correct = false; // TODO : Check password correct
        await UserData.find({ username: username, password: password })
            .then((data) => {
                if (data.length) {
                    password_correct = true;
                }
            })
            .catch((err) => {
                console.log(err);
                console.log("Ops something wrong with find function");
            });

        console.log(username_correct, password_correct);

        if (username_correct && password_correct) {
            await UserData.find({ username: username, password: password })
                .then((data) => {
                    console.log(data);
                    res.cookie("LoginKey", data[0]._id, {
                        maxAge: 1000 * 60 * 60,
                    });
                    res.send(["Logined"]);
                })
                .catch((err) => {
                    console.log(err);
                    res.send(["SomethingWrong"]);
                });
        } else {
            if (!username_correct) {
                res.send(["UsernameNotFound"]);
            } else if (!password_correct) {
                res.send(["PasswordWrong"]);
            } else {
                res.send(["SomethingWrong"]);
            }
        }
    } else {
        console.log("402");
        res.send(["402"]);
    }
});

// TODO : Port setting
const port = 4000;
expressApp.listen(port, () => {
    // listen for connection request.
    console.log("Listening on port", port);
});

module.exports = expressApp;
