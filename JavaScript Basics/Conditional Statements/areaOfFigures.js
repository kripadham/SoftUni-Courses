function areaFigures(input) {
    let figureType = input[0];
    let area = 0;
    if (figureType == "square") {
        let size = Number(input[1]);
//квадрат
        area = size * size;

    }else if (figureType=="rectangle") {
        let sizeA = Number(input[1]);
        let sizeB = Number(input[2]);
//правоъгълник
        area=sizeA*sizeB

    }else if (figureType == "circle") { 
        let radius = Number(input[1]);
//кръг
        area = Math.pow(radius, 2) * Math.PI;
        
    } else if (figureType == "triangle") {
        let TriangleSide = Number(input[1]);
        let h = Number(input[2]);
//триъгълник
        area = TriangleSide * h/2;
    }
    console.log(area.toFixed(3));
}

areaFigures(["triangle", "4.5", "20"])
