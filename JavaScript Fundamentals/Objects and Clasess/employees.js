function employees(arr) {
 
    for (i in arr) {
        let employeeName = arr[i];
        let personalNum = employeeName.length;
        let objectList = {
            employeeName,
            personalNum
        }   
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)