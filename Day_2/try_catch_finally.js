console.log("Try Catch finally throw");
console.log("It only handles runtime error not parse time errors");
try {
    console.log("Try");
    errVar;

} catch (error) {
    console.log("Catch");
    console.log("Error has occured " + error);
} finally {
    console.log("Finally");
}

console.log("Code continues to excute after try catch")



let json =  { "age":30 }

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name")
    }

    console.log(user.name);

} catch (error) {
    console.log("JSON Error: " + error);
}