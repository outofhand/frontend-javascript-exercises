var copy = function(obj) {
  var newObj = {};
  for ( var i in obj ) {
    if ( obj.hasOwnProperty(i) ) {
      newObj[i] = obj[i];
    }
  }  

  return newObj;
};

var extend = function(dest, src) {
  for ( var i in src ) {
    if ( src.hasOwnProperty(i) ) {
      dest[i] = src[i];
    }
  } 

  return dest;
};

var hasElems = function(obj, arr) {
  var search = "";
  var result = false;

  if ( arr.length === 0 ) {
    return true;
  }

  for (i = 0; i < arr.length; i++) {
    result = false;

    for ( var x in obj ) {
      if ( obj.hasOwnProperty(x) ) {
        if ( x == arr[i] )
          result = true;
      }
    } 

    if ( result === false ) {
      return false;
    }
  }

  return result;
};

module.exports.copy = copy;
module.exports.extend = extend;
module.exports.hasElems = hasElems;