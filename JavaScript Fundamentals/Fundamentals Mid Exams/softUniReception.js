function softUniReception(input) {
    let studentsForHour = 0;
    let studentCount = Number(input[3]);
    for (let i = 0; i < 3; i++) {
        studentsForHour += Number(input[i]);
    }
    let time = 0;
    while (studentCount > 0) {
        time++
        if (time % 4 !== 0) {
            studentCount -= studentsForHour;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
softUniReception(['5', '6', '4', '20']);
console.log('------');
softUniReception(['1', '2', '3', '45'])
console.log('------');
softUniReception(['3', '2', '5', '40'])