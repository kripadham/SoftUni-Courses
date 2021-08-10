function numbers(sequence) {
    let nums = sequence.split(' ').map(Number);
    let sum = 0;
    for (n of nums) {
        sum += n;
    }

    let avNum = sum / Number(nums.length);
    let result = [];
    let countSmall = 0;
    for (n of nums) {
        if (n > avNum) {
            result.push(n);
        } else {
            countSmall++
        }
    }
    
    if (countSmall == nums.length) {
        console.log('No');
    } else {
        console.log(result.sort((a, b) => b - a).slice(0, 5).join(' '));
    }
}
// numbers('10 20 30 40 50');
console.log('-----------');
// numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log('-----------');
numbers('1')
console.log('-----------');
numbers('-1 -2 -3 -4 -5 -6')