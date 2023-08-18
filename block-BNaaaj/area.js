// Q. Create 2 files
//   1. area.js
//   2. app.js
//   3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
//   4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

function areaSquare(side) {
  return side * side;
}

function areaRectangle(l, b) {
  return l * b;
}
function areaCircle(radius) {
  const PI = 3.14;
  return PI * radius * radius;
}

module.exports = {
  areaSquare: areaSquare,
  areaRectangle: areaRectangle,
  areaCircle: areaCircle,
};
