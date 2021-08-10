function bonusScrollSys(input) {
    //calculate Bonus Points for each student..
    //1. line - count of Students
    // 2. count of lectures.
    //3. every course hase bonus. 3 line
    //afer we recive attendences of each student
    //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})

    let countOfStudents = Number(input.shift());
    let countOfLectures = Number(input.shift());
    let bonus = Number(input.shift());
    maxBonus = 0;
    maxAttendance = 0;
    for (const attendances of input) {
        let totalBonus = attendances / countOfLectures * (5 + bonus);
        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxAttendance = attendances;
        }

    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScrollSys([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
console.log('---------');
bonusScrollSys([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])