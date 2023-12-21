console.log("Assignment 1");
//Assignment 1
// 1. Create an array of String having values "Dell","HP","ACER","SONY","PANASONIC","OTHER".
// 2. Sort this array by ascending order and put other at the end.

let brands = ["Dell", "HP", "ACER", "SONY", "PANASONIC", "OTHER"];

let sortedBrands = brands
  .filter(brand => brand !== "OTHER") 
  .sort() 
  .concat("OTHER"); 

console.log(sortedBrands);


console.log("Assignment 2");
// Assignment 2
// 1. Create an array of String having values "Ali@test.COM", "Umair@test.com","Ahmad@test.com","Umair@Test.Com"
// 2. Remove duplicate from the list.

let emails = ["Ali@test.COM", "Umair@test.com", "Ahmad@test.com", "Umair@Test.Com"];
    
let uniqueEmailsSet = new Set();

emails.forEach( 
    email =>{
      // convert each element of array in lowercase
      uniqueEmailsSet.add(email.toLowerCase());
    }
  )

let uniqueEmails = Array.from(uniqueEmailsSet);

console.log(uniqueEmails);

console.log("Assignment 3");
// Assignment 3
// 1. let a = "[{Name:”umair”,Id:0 }{Nme:”ali”,Id:1}]"
// 	change name of ID 1 from ali to Ali Chawla also
// 	add attribute "Edit" with value true.

let a = [
  {
    Name:"umair",
    Id:0 
  },
  {
    Name:"ali",
    Id:1
  }];
  a[1].Name="Ali Chawla";
  a[1].Edit=true;

  console.log(a);