// Return no of unique elements in d array

function k(arr) { // O(n)
    let res=0, obj={};
    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
            res += 1;
        }
    }

    return res;
}



let res = k([1,-1,0,1,2,2,10]);
console.log(res);