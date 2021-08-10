function toyShop(input){
//Prices
    let puzzlelPrice = Number(2.60);
    let dolyPrice = Number(3);
    let bearPrice = Number(4.10);
    let minionPrice = Number(8.20);
    let truckPrice = Number(2);

//rules
    let discount = 25/100;
    let rent = 10 / 100;
//Inputs
    let excursionPrice = Number(input[0]);

    let numOfPuzzle = Number(input[1]);
    let numOfdoly = Number(input[2]);
    let numOfBears = Number(input[3]);
    let numOfMinions = Number(input[4]);
    let numOfTrucks = Number(input[5]);

//Calculations 
    let bill = numOfPuzzle * puzzlelPrice + numOfdoly * dolyPrice + numOfBears * bearPrice + minionPrice * numOfMinions + truckPrice * numOfTrucks;
    let sumOfNumToys = numOfPuzzle + numOfdoly + numOfBears + numOfMinions + numOfTrucks;
   
    let finalPrice = 0;
    let remainMoney = 0;
    
    if (sumOfNumToys >= 50) {
        let discountCalc = bill * discount;
        finalBill = bill - discountCalc;
    } else {
        finalBill = bill;
    }

    let rentCalc = finalBill * rent;
    let profit = finalBill - rentCalc;

    if (profit >= excursionPrice) {
        remainMoney = profit - excursionPrice;
        console.log(`Yes! ${remainMoney.toFixed(2)} lv left.`);
    } else {
        remainMoney = excursionPrice - profit;
        console.log(`Not enough money! ${remainMoney.toFixed(2)} lv needed.`);
    }
   }
toyShop(["40.8", "20", "25", "30", "50", "10"])
//toyShop(["320", "8", "2", "5", "5", "1"])