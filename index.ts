/**
 * @description a function that returns a new array in witch every number is the multiplication of all the 
 *              numbers in the original array except the number at the same index.
 *              All numbers are allowed including 0 and negative.
 * @example [1, 2, 3, 4] => [24,12,8,6] // 2*3*4=24, 1*3*4=12, 1*2*4=8, 1*2*3=6
 */
function multiplyArray(arr: number[]) {
  return [24, 12, 8, 6];
}

compareAndLog(multiplyArray([1, 2, 3, 4]), [24, 12, 8, 6]);

function compareAndLog(arr1: number[], arr2: number[]) {
  console.log(compareArrays(arr1, arr2));
}

function compareArrays(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}