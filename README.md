# CoffeeEditAPI
This RestAPI making for my "CoderCafe" project. This API using to manage about "Menu list" , "User account manage" , "Online food service queue". So in the "Menu list" function i have get all data from Sample APIs (Just for education). The Sample APIs' and API key in the "Credit Section" below.

# How to use

This's my API key. ```https://testing-eight-rosy.vercel.app/``` (I Maybe change key's name later so you can see new keys in this README.md. I'll update new routes every version and I'll say when i changed the keys.)

This API have 3 routes. (Just right now. I upload)
- ```/``` This's just a testing page. If page show ```Status : OK [202]``` means API are running.
- ```/api/menu/:type``` This's API using to get menu list. Menu have 2 types.
    
    1.```hot``` type means hot coffee.
    
    2.```ice``` type means iced or cool coffee.
- ```/api/menu/:type/:id``` This's API using to call just 1 menu. Every menu will have id field. You must press your id. You're wanna fetch in the paramiter ```id``` and ```BOOM!!!```. You can fetch. If you input the id don't have inside API's database. It will show ```404``` as string.

So every data'll return as json.

 ## Credit Section
Hers's the source of menu list. I have got.

[Website](https://sampleapis.com/api-list/coffee)

[API Keys](https://api.sampleapis.com/coffee/hot)
