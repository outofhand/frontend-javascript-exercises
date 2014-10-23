var getKeys = function(obj) {
  var newArray = [];
  for ( var i in obj ) {
    if ( obj.hasOwnProperty(i) ) {
      newArray.push(i);
    }
  }

  return newArray;
};

var getValues = function(obj) {
  var newArray = [];
  for ( var i in obj ) {
    if ( obj.hasOwnProperty(i) ) {
      newArray.push(obj[i]);
    }
  }

  return newArray;
};

var objectToArray = function(obj) {
  var newArray = [];
  for ( var i in obj ) {
    if ( obj.hasOwnProperty(i) ) {
      newString = i + " is " + obj[i];
      newArray.push(newString);
    }
  }  

  return newArray;
};

module.exports.getKeys = getKeys;
module.exports.getValues = getValues;
module.exports.objectToArray = objectToArray;