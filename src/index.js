
exports.min = function min (arr) {
  if (typeof(arr) == 'undefined' || arr.length == 0) {
    return 0;
  }
  return Math.min(...arr);
}

exports.max = function max (arr) {
  if (typeof(arr) == 'undefined' || arr.length == 0) {
    return 0;
  }
  return Math.max(...arr)
}

exports.avg = function avg (arr) {
  if (typeof(arr) == 'undefined' || arr.length == 0) {
    return 0;
  }
  var num = 0
  for (let i=0; i < arr.length; i++) {
      num += arr[i]
      }
return num/arr.length;
}
