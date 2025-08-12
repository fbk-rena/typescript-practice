"use strict";
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            // Aquí TypeScript sabe que `shape` es `never`
            const _exhaustiveCheck = shape;
            throw new Error(`Shape type not supported: ${_exhaustiveCheck}`);
    }
}
