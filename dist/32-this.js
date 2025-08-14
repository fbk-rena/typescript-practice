"use strict";
class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
    getCount() {
        return this.count;
    }
}
const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
