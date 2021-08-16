function rotateArray(list) {
    let numRotation = list.pop();

    for (let i =0; i<numRotation; i++) {
        list.unshift(list[(list.length-1)]);
        list.pop();
    }
    console.log(list.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
