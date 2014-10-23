var newArray = function(arg1, arg2, arg3, arg4) {
  return [arg1, arg2, arg3, arg4];
};

var firstAndLast = function(array1) {
  var lastElementIndex = array1.length - 1;
  var newArray = [];
  newArray.push(array1[0]);
  newArray.push(array1[lastElementIndex]);
  return newArray;
};

module.exports.newArray = newArray;
module.exports.firstAndLast = firstAndLast;