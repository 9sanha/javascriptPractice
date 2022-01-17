function getChildrens(personArray) {
    let arr=[]
    personArray.forEach(v=>{
        if (v["age"]<=20){
           arr.push(v)
        }
    })
    return arr
}

var personArray = [
    {"name": "John Doe", "age": 10},
    {"name": "Jane Doe", "age": 29},
    {"name": "Fred Doe", "age": 13},
    {"name": "Chris Doe", "age": 22},
    {"name": "Layla Doe", "age": 8},
];

console.log(getChildrens(personArray));
// [
// 	{"name": "John Doe", "age": 10},
// 	{"name": "Fred Doe", "age": 13},
//  {"name": "Layla Doe", "age": 8},
// ]