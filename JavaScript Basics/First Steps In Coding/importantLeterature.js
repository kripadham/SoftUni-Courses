function page(input) {
    let pageNumInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let dayNum = Number(input[2]);
    let TimePerBook = (pageNumInBook / pagesPerHour)/dayNum;
    
    console.log(TimePerBook.toFixed(1));
}
page(["212", "20", "2"]);