var personArray = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
];
let name
let age
// 위에서 배운 4가지 for문을 이용해서 아래 문장을 출력해봅시다 (console.log)
console.log('일반 for문')
for (let i = 0; i <personArray.length ; i++) {
    name = personArray[i]["name"]
    age = personArray[i]["age"]
    console.log(`his/her name is ${name}. He/She is ${age} years old.`)
}

console.log('for in문')
for (const arrKey in personArray) {
    name = personArray[arrKey]["name"]
    age = personArray[arrKey]["age"]
    console.log(`his/her name is ${name}. He/She is ${age} years old.`)
}

console.log('for of문')
for (const arrElement of personArray) {
    name = arrElement["name"]
    age = arrElement["age"]
    console.log(`his/her name is ${name}. He/She is ${age} years old.`)
}

console.log('for each문')
personArray.forEach(value => {
    name = value["name"]
    age = value["age"]
    console.log(`his/her name is ${name}. He/She is ${age} years old.`)
})