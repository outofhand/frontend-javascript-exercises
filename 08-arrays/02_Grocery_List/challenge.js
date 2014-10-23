var addItem = function(arg1, arg2) {
  if ( arg2.indexOf(arg1) == -1 ) {
    arg2.push(arg1);
  }

  return arg2;
};

var reverseSortedList = function(array1) {
  array1 = array1.sort();
  return array1.reverse();
};

module.exports.addItem = addItem;
module.exports.reverseSortedList = reverseSortedList;