function charityCamp(input) {
    let daysForCompaign = Number(input[0]);
    let  sweetCooks= Number(input[1]);
    let cakeCounts = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakeCount = Number(input[4]);
    
    let totalSumForCake = cakeCounts * 45;
    let totalSumForWaffles = wafflesCount * 5.80;
    let totalSumPancaces = pancakeCount * 3.20;
    
    let totalSumForAllProductsForDay = (totalSumForCake + totalSumForWaffles + totalSumPancaces) * sweetCooks;
    
    let totalSumAllDays = totalSumForAllProductsForDay * daysForCompaign;
    
    let pureSum = totalSumAllDays - (totalSumAllDays / 8);

    console.log(pureSum)

}
charityCamp(["23","8","14","30","16"])