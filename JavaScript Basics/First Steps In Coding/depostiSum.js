function demo(input) {
    let depositSum = Number(input[0]);
    let depositpPeriod = Number(input[1]);
    let yearPercent = Number(input[2]);
    let finalResult = depositSum + depositpPeriod * ((depositSum * yearPercent/100) / 12);
    // 
    console.log(finalResult)
}
demo(["200","3","5.7"])