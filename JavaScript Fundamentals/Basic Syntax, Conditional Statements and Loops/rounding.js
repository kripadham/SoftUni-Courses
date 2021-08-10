function rounding(num1, num2) {
    if (num2 >= 15) {
        num2 =15;
    }
    let newNum = num1.toFixed(num2)
    // parseFloat(newNum);
    console.log(parseFloat(newNum));
    
}
rounding(3.1415926535897932384626433832795, 2)
rounding(10.5, 3)