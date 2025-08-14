"use strict";
//lastElement
function lastElement(arr) {
    return arr[arr.length - 1];
}
const lastNum = lastElement([1, 2, 3]); // number | undefined
const lastStr = lastElement(["a", "b"]); // string | undefined
//mergeObjects
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const merged = mergeObjects({ name: "Alice" }, { age: 30 }); // { name: string } & { age: number }
//totalLength
function totalLength(a, b) {
    return a.length + b.length;
}
const len1 = totalLength("hello", "world"); // 10
const len2 = totalLength([1, 2], [3, 4, 5]); // 5
//filterByKey
function filterByKey(arr, key, value) {
    return arr.filter(item => item[key] === value);
}
const users = [
    { id: 1, name: "Vero" },
    { id: 2, name: "Vane" }
];
const vero = filterByKey(users, "name", "Vero"); // [{ id: 1, name: "Vero" }]
function makePair(first, second) {
    return [first, second];
}
const pair1 = makePair(1, "two"); // [number, string]
const pair2 = makePair("one", 2); // [string, number]
//pluck 
function pluck(items, key) {
    return items.map(item => item[key]);
}
const auaners = [
    { name: "Vero", age: 21 },
    { name: "Selene", age: 23 }
];
const names = pluck(auaners, "name"); // string[]
const ages = pluck(auaners, "age"); // number[]
