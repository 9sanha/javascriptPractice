function checkName(person) {
    return person["name"]=="John Doe"

}

var personArray = [
    {"name": "Mark Bae", "age": 30},
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];

for (var person of personArray) {
    if (checkName(person)) {
        console.log("Here is your beer! ", person["name"]);
    } else {
        console.log("Get out! ", person["name"]);
    }
}