function needForSpeed(input) {
    let n = Number(input.shift());
    let cars = {};
    let actions = {
        Drive: drive,
        Refuel: refuel,
        Revert: revert
    }
    //add to catalog -cars
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        if (cars.hasOwnProperty(car) == false) {
            cars[car] = {
                mileage: Number(mileage),
                fuel: Number(fuel)
            }
        } else {
            cars[car].mileage = Number(mileage);
            cars[car].fuel = Number(fuel);
        }
    }
    //command line
    while (input[0] != 'Stop') {
        let [command, car, p1, p2] = input.shift().split(' : ');
        action = actions[command];
        action(cars, car, p1, p2)
    }
    //sort and Print
    let sorted = Object.entries(cars).sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]));
    for (let [car, params] of sorted) {
        console.log(`${car} -> Mileage: ${params.mileage} kms, Fuel in the tank: ${params.fuel} lt.`);
    }

    function drive(object, car, distance, fuel) {
        if (object[car] != undefined) {
            let currentFuel = object[car].fuel;
            fuel = Number(fuel);
            distance = Number(distance);

            if (fuel > currentFuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                object[car].fuel -= fuel;
                object[car].mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (object[car].mileage >= 100000) {
                delete object[car];
                console.log(`Time to sell the ${car}!`);
            }
        }

    }

    function refuel(object, car, fuel) {
        if (object[car] != undefined) {
            let currentFuel = object[car].fuel;
            fuel = Number(fuel);
            let total = fuel + currentFuel;
            if (total >= 75) {
                total = 75 - currentFuel;
                object[car].fuel = 75;
                console.log(`${car} refueled with ${total} liters`);
            } else {
                object[car].fuel = total;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        }

    }

    function revert(object, car, kilometers) {
        if (object[car] != undefined) {
            let currentMileage = object[car].mileage;
            kilometers = Number(kilometers);
            let total = currentMileage - kilometers;
            if (total <= 10000) {
                object[car].mileage = 10000;
            } else {
                object[car].mileage = total;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
}
// needForSpeed([3
//     , 'Audi A6|38000|62'
//     , 'Mercedes CLS|11000|35'
//     , 'Volkswagen Passat CC|45678|5'
//     , 'Drive : Audi A6 : 543 : 47'
//     , 'Drive : Mercedes CLS : 94 : 11'
//     , 'Drive : Volkswagen Passat CC : 69 : 8'
//     , 'Refuel : Audi A6 : 50'
//     , 'Revert : Mercedes CLS : 500'
//     , 'Revert : Audi A6 : 30000'
//     , 'Stop'])
console.log('----');
needForSpeed([4
    , 'Lamborghini Veneno|11111|74'
    , 'Bugatti Veyron|12345|67'
    , 'Koenigsegg CCXR|67890|12'
    , 'Aston Martin Valkryie|99900|50'
    , 'Drive : Koenigsegg CCXR : 382 : 82'
    , 'Drive : Aston Martin Valkryie : 99 : 23'
    , 'Drive : Aston Martin Valkryie : 2 : 1'
    , 'Refuel : Lamborghini Veneno : 40'
    , 'Revert : Bugatti Veyron : 2000'
    , 'Stop'])