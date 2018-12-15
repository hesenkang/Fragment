const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// 功能管道
// Function composition enabling pipe functionality
const pipe = (...functions) => inputs => functions.reduce((acc, fn) => fn(acc),inputs);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);
console.log(multiply24(10))