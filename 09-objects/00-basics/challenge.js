var createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
    title: courseTitle, 
    duration: courseDuration,
    students: courseStudents 
  };

  return course;
};

var addProperty = function(obj, prop, val) {
  if ( !obj.hasOwnProperty(prop) ) {
    obj[prop] = val;
  } 

  return obj;
};

var formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

var canIGet = function(item, money) {
  var priceTable = {};
  priceTable['MacBook Air'] = 999;
  priceTable['MacBook Pro'] = 1299;
  priceTable['Mac Pro'] = 2499;
  priceTable['Apple Sticker'] = 1;       

  return priceTable[item] <= money;
};

module.exports.createCourse = createCourse;
module.exports.addProperty = addProperty;
module.exports.formLetter = formLetter;
module.exports.canIGet = canIGet;