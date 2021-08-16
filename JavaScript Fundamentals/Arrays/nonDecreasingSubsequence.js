function nonDeSubSeq(list) {
    let current = list[0];
    let result = [];
    result.push(current);
    for (let i = 1; i < list.length; i++) {
        let next = list[i];
        // console.log(`${current}:${next}`);
        if (current < next) {
            current = next;
            result.push(current);
        }
    }
    console.log(result.join(' '));
}
nonDeSubSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDeSubSeq([1, 2, 3, 4]);
// nonDeSubSeq([20, 3, 2, 15, 6, 1])