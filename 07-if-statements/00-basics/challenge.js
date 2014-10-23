var favoriteNumber = function(fav, guess) {
  if ( guess > fav) {
    return "Too high";
  } 
  else if ( guess < fav ) {
    return "Too low";
  } 
  else {
    return "You got it!";
  }
};

var checkLock = function(first, second, third, fourth) {
  var answer = "incorrect";
  if ( first === 3 || first === 5 || first === 7 ) {
    if ( second === 2 ) {
      if ( third >= 5 && third <= 100 ) {
        if ( fourth < 9 || fourth > 20 ) {
          answer = "correct";
        }
      }
    }
  }

  return answer;
};

var canIGet = function(item, money) {
  if ( item === 'MacBook Air' && money >= 999 ) {
    return true;
  }
   if ( item === 'MacBook Pro' && money >= 1299 ) {
    return true;
  }
  if ( item === 'Mac Pro' && money >= 2499 ) {
    return true;
  }
  if ( item === 'Apple Sticker' && money >= 1 ) {
    return true;
  }  

  return false;
};

module.exports.favoriteNumber = favoriteNumber;
module.exports.checkLock = checkLock;
module.exports.canIGet = canIGet;