// 4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

let { areaSquare, areaRectangle, areaCircle } = require('./area');

console.log(areaSquare(4), areaRectangle(2, 3), areaCircle(2));
