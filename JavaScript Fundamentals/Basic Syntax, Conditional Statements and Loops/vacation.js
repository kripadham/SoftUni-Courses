function vacation(group, type, weekDay) {

    let price = 0;
    let total = 0;
    switch (type) {
        case "Students":
            switch (weekDay) {
                case "Friday": price = 8.45; break;
                case "Saturday": price = 9.80; break;
                case "Sunday": price = 10.46; break;
                default: break;
            }
            total = group * price;
            if (group >= 30) {
                total *= 0.85;
            }
            break;

        case "Business":
            switch (weekDay) {
                case "Friday": price = 10.90; break;
                case "Saturday": price = 15.60; break;
                case "Sunday": price = 16; break;
                default: break;
            }

            if (group >= 100) {
                group -= 10;
            }
            total = group * price;
            break;

        case "Regular":
            switch (weekDay) {
                case "Friday": price = 15; break;
                case "Saturday": price = 20; break;
                case "Sunday": price = 22.50; break;
                default: break;
            }
            total = group * price;
            if (group >= 10 && group <= 20) {
                total *= 0.95;
            }
            break;
        default:
            break;
    }//end switch

    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"

)