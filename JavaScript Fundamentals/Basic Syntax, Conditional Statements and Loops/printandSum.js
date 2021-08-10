function printSum(num1, num2) {
    str = "";
    sum = 0;
    for (i = num1; i <= num2; i++){
        str += `${i} `
        sum += i;
    }
    console.log(str);
    console.log(`Sum: ${sum}`);
}
printSum(5, 10)
console.log(`----`);
printSum(0, 26)
console.log(`----`);
printSum(50, 60)
console.log(`----`);