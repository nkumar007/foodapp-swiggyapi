let arr = [1, 3, 7, 9, 2];
let target = 5;

function twoSum(array, target) {
  let valMap = {};
  for (let i = 0; i < array.length; i++) {
    n = array[i];
    diff = target - n;
    if (diff in valMap) {
      return [valMap[diff], i];
    } else {
      valMap[n] = i;
    }
  }
}

console.log(twoSum(arr, target));
