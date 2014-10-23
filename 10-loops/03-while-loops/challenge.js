var stream = function(conditionalFn, actionFn) {
  while ( conditionalFn() ) {
    actionFn();
  }
};

var sumNumbers = function(numArray) {
  var i = 0;
  var total = 0;
  while ( i < numArray.length ) {
    total += numArray[i];
    i++;
  }

  return total;
};

module.exports.stream = stream;
module.exports.sumNumbers = sumNumbers;