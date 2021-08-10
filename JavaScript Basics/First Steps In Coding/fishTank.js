function fishTank(input) {
    
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let precent = Number(input[3]);

    let volume = length * width * height;
    let sumOfLiters = volume / 1000;
    let precentCount = precent/ 100;
    let LitersTotal = sumOfLiters - (sumOfLiters * precentCount);

    console.log(LitersTotal);
   
}
fishTank(["105", "77", "89", "18.5"])