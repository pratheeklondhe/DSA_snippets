// Selection sort
function k(arr) {

    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;

        for (let j = arr.length; j >= i; j--) {

            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }

        }
        ;[arr[i],arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

let res = k([4, 3, 5, 4, 2, 7, 6, 9, 3]);
console.log(res);
