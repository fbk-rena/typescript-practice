"use strict";
function greet(name) {
    return name ? `Holi, ${name}!` : "Hello, stranger!";
}
console.log(greet()); // "Hello, stranger!"
console.log(greet("Ricardo")); // "Holi, Ricardo!"
//
function configure(options) {
    var _a, _b, _c;
    const settings = {
        timeout: (_a = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a !== void 0 ? _a : 1000,
        retries: (_b = options === null || options === void 0 ? void 0 : options.retries) !== null && _b !== void 0 ? _b : 3,
        logger: (_c = options === null || options === void 0 ? void 0 : options.logger) !== null && _c !== void 0 ? _c : ((msg) => console.log(msg))
    };
    console.log("Configuration applied:", settings);
}
configure();
configure({ timeout: 2000 });
configure({ logger: (msg) => console.error(msg) });
