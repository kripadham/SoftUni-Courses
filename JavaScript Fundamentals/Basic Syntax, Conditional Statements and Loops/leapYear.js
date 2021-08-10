function leapYear(params) {

    if (params % 100 !== 0 && params % 4 == 0 || params % 400 == 0) {
        console.log(`yes`);
    } else {

    console.log(`no`);
}
}


leapYear(4)