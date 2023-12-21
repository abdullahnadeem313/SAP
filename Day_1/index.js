console.log("Assignment 1");
//Assignment 1
// 1. Create an array of String having values "Dell","HP","ACER","SONY","PANASONIC","OTHER".
// 2. Sort this array by ascending order and put other at the end.

let brands = ["Dell", "HP", "ACER", "SONY", "PANASONIC", "OTHER"];

let sortedBrands = brands
  .filter(brand => brand !== "OTHER") // Exclude "OTHER" from the array
  .sort((a, b) => a.localeCompare(b)) // Sort in ascending order
  .concat("OTHER"); // Add "OTHER" at the end of the sorted array

console.log(sortedBrands);

