// Selection sort
function k(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i; j >= 0; j--) {

            if (arr[j] > arr[j + 1]) {
                [arr[j + 1],arr[j]] = [arr[j], arr[j + 1]];
            } else
                break;

        }
        ;
    }
    return arr;
}

let res = k([3, 2, 5, 1, 9, 8, 6, 7, 5, 0, 2]);
console.log(res);
