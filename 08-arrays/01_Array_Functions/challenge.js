var reversePlusOne = function(array1) {
  array1.reverse();
  array1.unshift(1);
  return array1;
};

var plusesEverywhere = function(array1) {
  var returnString = '';
  var i;
  for (i = 0; i < array1.length; ++i) {
    returnString += array1[i] + '+';
  }
  returnString = returnString.substr(0,returnString.length-1);
  return returnString;
};

var arrayQuantityPlusOne = function(array1) {
  return array1.length + 1;
};

module.exports.reversePlusOne = reversePlusOne;
module.exports.plusesEverywhere = plusesEverywhere;
module.exports.arrayQuantityPlusOne = arrayQuantityPlusOne;