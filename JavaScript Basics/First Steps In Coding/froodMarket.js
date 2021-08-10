function foodMarket(input) {

    let strawberryPrice = Number(input[0]);
    let bananasKg = Number(input[1]);
    let orangeKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let strawberryKg = Number(input[4]);

    let raspberriesPrice = strawberryPrice / 2;
    let organgePrice = raspberriesPrice-(raspberriesPrice * 0.4);
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.8);
    
    let sumRaspberries = raspberriesPrice * raspberriesKg;
    let sumOrange = organgePrice * orangeKg;
    let sumBananas = bananasPrice * bananasKg;
    let sumStrawberries = strawberryPrice * strawberryKg;
    let total = sumBananas + sumOrange + sumRaspberries + sumStrawberries;




    console.log(total);
}

foodMarket(["48","10","3.3","6.5","1.7"])