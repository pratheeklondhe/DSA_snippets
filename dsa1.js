// Return pair that sums to zero
function k(arr) { //O(n squared)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (!(arr[i] + arr[j])) {
                return [arr[i], arr[j]]
            }
        }
    }

    return undefined;
}

function k1(arr) { //O(n)
    let isFlagI = false;
    let i = 0;
    let j = arr.length - 1;

    while ((arr[i] + arr[j] !== 0) && (i < j)) {

        if (isFlagI) {
            j = j - 1;
        } else {
            i = i + 1;
        }
        isFlagI = !isFlagI;
    }

    if (i > j - 1)
        return undefined;

    else
        return [arr[i], arr[j]];
}

let res = k1([-3, -2, -1, 0, 1, 2, -1]);
console.log(res);
