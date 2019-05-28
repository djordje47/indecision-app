const square = (a, b) => a * b;
const substract = (a, b) => a - b;
// Named exports
export const add = (a, b) => a + b;
// export { square };

// Default exports
export { square, substract as default };
