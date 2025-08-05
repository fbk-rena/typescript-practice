"use strict";
//Arrays
// Array name "strings"
const sibilings = ["Karla", "Carlos", "Andres", "Angel", "Emanuel"];
// Add a new Name
sibilings.push("Veronica");
// Iterate the array and display on uppercase
sibilings.forEach((sibiling) => {
    console.log(sibiling.toUpperCase());
});
//Tuples
// A tuple that contains a product name (string) and its price (number)
const product = ["Espresso", 35];
// Array where each element is a tuple [productName, price]
const menu = [
    ["Capuchino", 45],
    ["Mocha", 50],
    ["Latte", 45],
];
// Log pproducts and  prices
menu.forEach(([product, price]) => {
    console.log(`Producto: ${product}, Precio: $${price}`);
});
