// Merge two sorted arrays
function k(a1, a2) {
    let i = 0
      , j = 0
      , res = [];

    while (i < a1.length && j < a2.length) {
        //         console.log(i, j)
        if (a1[i] < a2[j]) {
            res.push(a1[i]);
            i += 1;
        } else {
            res.push(a2[j]);
            j += 1;
        }
    }
    if (i < a1.length) {
        res.push(...a1.slice(i));
    } else {
        res.push(...a2.slice(j));
    }

    return res;
}

let res = k( [1, 2], [3, 4, 8, 9, 55]);
console.log(res);
