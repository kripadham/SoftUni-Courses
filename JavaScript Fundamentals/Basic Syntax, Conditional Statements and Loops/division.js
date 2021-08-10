function division(params) {
    if (params % 10 == 0) {
        console.log("The number is divisible by 10");
    } else if (params % 7 == 0) {
        console.log("The number is divisible by 7");
    } else if (params % 6 == 0) {
        console.log("The number is divisible by 6");
    } else if (params % 3 == 0) {
        console.log("The number is divisible by 3");
    } else if (params % 2 == 0) {
        console.log("The number is divisible by 2");
    } else {
        console.log("Not divisible")
    }
}
division(30);
console.log("-----");
division(15);
console.log("-----");
division(12);
console.log("-----");
division(1643);
