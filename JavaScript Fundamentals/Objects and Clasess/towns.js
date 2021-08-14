function towns(input) {
    for (string of input) {
        let [town, latitude, longitude] = string.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObject = {
            town,
            latitude,
            longitude,
        };
        console.log(townObject);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
