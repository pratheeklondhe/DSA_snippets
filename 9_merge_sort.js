// Merge Sort function
// uses recursion
function mergeSort(arr) {
  //  break case for recursion
  if (arr.length < 2) { return arr };

  //  dividing array into two halves
  const half = Math.floor(arr.length / 2);
  const firstHalf = mergeSort(arr.slice(0, half));
  const secondHalf = mergeSort(arr.slice(half));
  
  // console.log(firstHalf, secondHalf);
  return mergerTwoSortedArrays(firstHalf, secondHalf);
};

// Merges two sorted arrays into one
function mergerTwoSortedArrays(a1, a2) {
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




let res = mergeSort( [1, 100, 4, 8, 9, 55]);
console.log('Sorted array is ', res);
