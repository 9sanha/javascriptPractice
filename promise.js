const isReady = true
// 1. producer
const promise = new Promise((resolve, reject) => {
    //excutor
    console.log("promise is craated")
    if (isReady){
        resolve("It's ready")
    }else {
        reject("NOt ready")
    }
})

//Promise is created!

//function 앞에 async를 붙이면 함수는 항상 promise를 반환
// promise가 아닌 값을 반환하더라도 이행 상태의 promise로 값을 감싸 반환
async function f(){
    return 1;
}