// Bubble sort
function k(arr) {
    // O{}
    let noSwaps; // for nearly sorted arrays
    for (let i = 0; i < arr.length; i++) {
        noSwaps = true;
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[arr.length - 1 - j] > arr[arr.length - j]) {
                // swap logic
                [arr[arr.length - 1 - j],arr[arr.length - j]] = [arr[arr.length - j], arr[arr.length - 1 - j]];
                noSwaps = false;
                
            }
        }
        if (noSwaps)
            break;
    }
    ;
    return arr;
}

let res = k([1, 3, 5, 4, 2, 7, 6, 9, 3]);
console.log(res);
