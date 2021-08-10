function triangleNum(params) {
    for (let i = 1; i <= params; i++) {
        str = "";
        for (b = 1; b <= i; b++){
            str += " " + i;
        }
        console.log(str);   
    }
}
triangleNum(5)