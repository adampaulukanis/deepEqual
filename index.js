'use strict';

let deepEqual = module.exports = function(obj1, obj2) {
  if (typeof obj1 == 'object'
  && typeof obj2 == 'object'
  && obj1 != null
  && obj2 != null) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    }

    let arr = Object.keys(obj1);
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i];
      if (Object.keys(obj2).indexOf(el) === -1)
        return false;

      if (!deepEqual(obj1[el], obj2[el])) {
        return false;
      }
    }

    return true;
  }
  else {
    return obj1 === obj2;
  }
};
