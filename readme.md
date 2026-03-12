1. Basic Idea

Data is stored as key : value pairs.

Example:

username : "chanchal"
theme : "dark"

The data stays in the browser until you delete it manually or clear the browser storage.

2. Save Data

Use localStorage.setItem().

localStorage.setItem("username", "Chanchal");

Here:

"username" → key

"Chanchal" → value

3. Get Data

Use localStorage.getItem().

let user = localStorage.getItem("username");
console.log(user);

Output:

Chanchal 4. Remove Data

Remove one item:

localStorage.removeItem("username"); 5. Clear Everything

Delete all stored data:

localStorage.clear(); 6. Store Objects (Important)

Local storage only stores strings, so objects must be converted.

Store object
let user = {
name: "Chanchal",
age: 22
};

localStorage.setItem("user", JSON.stringify(user));
Retrieve object
let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);
