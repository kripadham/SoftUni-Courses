function petsShop(input) {
    let petsNum = Number(input[0]);
    let petsOtherAnimals = Number(input[1]);
    let sumPetsNum = petsNum * 2.50;
    let sumPetsOtherAnimals = petsOtherAnimals * 4;
    let total = sumPetsNum + sumPetsOtherAnimals;
    console.log(total+" lv.");
}
petsShop(["13","9"]) 