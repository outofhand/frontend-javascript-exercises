var sumNumbers = function(array1) {
  var total = 0;
  if ( array1.length > 0 ) {
    for (var i = 0; i < array1.length; i++) {
      total += array1[i];
    }
  } 

  return total;
};

var splitAndLowerCaseString = function(inputString) {
  var returnString = inputString.toLowerCase();
  return returnString.split(",");
};

var addIndex = function(array1) {
  var newString = "";
  var newArray = [];
  var total = 0;
  for (var i = 0; i < array1.length; i++) {
    newString = i + " is " + array1[i];
    newArray.push(newString);
  }

  return newArray;
};

module.exports.sumNumbers = sumNumbers;
module.exports.splitAndLowerCaseString = splitAndLowerCaseString;
module.exports.addIndex = addIndex;
