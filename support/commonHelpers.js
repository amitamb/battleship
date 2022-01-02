function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var ARRAY_PROPS = {
  length: 'number',
  sort: 'function',
  slice: 'function',
  splice: 'function'
};

/**
 * Determining if something is an array in JavaScript
 * is error-prone at best.
 */
function isArray(obj) {
  if (obj instanceof Array)
    return true;
  // Otherwise, guess:
  for (var k in ARRAY_PROPS) {
    if (!(k in obj && typeof obj[k] == ARRAY_PROPS[k]))
      return false;
  }
  return true;
}


function deepCopy(obj) {
  if (typeof obj == 'object') {
    if (isArray(obj)) {
      var l = obj.length;
      var r = new Array(l);
      for (var i = 0; i < l; i++) {
        r[i] = deepCopy(obj[i]);
      }
      return r;
    } else {
      var r = {};
      r.prototype = obj.prototype;
      for (var k in obj) {
        r[k] = deepCopy(obj[k]);
      }
      return r;
    }
  }
  return obj;
}

export { getRandomInt, deepCopy };