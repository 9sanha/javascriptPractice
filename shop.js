class Cloth {
    constructor(color,size, price ) {
        this.color=color
        this.size=size
        this.price =price
    }
    printInfo(){
        console.log(`색상: ${this.color}, 사이즈: ${this.size}, 가격: ${this.price}`)
    }
}
const shop1 = new Cloth("노랑",85,50000)
shop1.printInfo();