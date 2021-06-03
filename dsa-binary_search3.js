function k(arr, ele) { //O(log n)
    let start = 0
      , end = arr.length - 1
      , mid = Math.round(end / 2);

    while (ele != arr[mid]) {

        if (ele > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.round((start + end) / 2);

        if( start > end ) {
            return 'Element not found';
        }
    }

    return 'Element Found at index ' + mid;
}

let res = k([0,2,3,4,5,6,7,8,9], 00);
console.log(res, 'dsadsad');
