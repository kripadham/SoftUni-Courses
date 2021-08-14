function printCity(city) {

    for (let key of Object.keys(myCity)) {
       console.log(key,'->' ,myCity[key]);
   }
  

}
let myCity = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}

printCity()