// check no of occurence of ele in string
function k(str, ele) { //O(n squared)
    let count = 0;
    for (let i = 0; i < (str.length - ele.length); i++) {
        let checkStr = '';

        for (let j = 0; j < ele.length; j++) {
            checkStr += str[i + j];
        }

        if (checkStr === ele)
            count += 1;
    }

    return count;
}

function k1(str, ele) { //O(n)
    let checkStr = ''
      , count = 0;
    for (let i = 0; i < (ele.length); i++) {
        checkStr += str[i];
    }

    for (let j = 1; j <= (str.length - ele.length + 1); j++) {
        if (checkStr === ele)
            count += 1;

        checkStr = checkStr.substring(1) + str[j + ele.length - 1];
        
    }

    return count;

}

let res = k1('sahahabh bhahad', 'h');
console.log(res);
