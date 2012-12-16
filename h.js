// Escape HTML entities in the given string
// Returns new string with HTML-specific characters escaped
// http://github.com/moxley/hjs
// Written by Moxley Stratton
function h(str) {
  var i, c, out = "", trans, arr;
  if (typeof (str) === "number" || str === true || str === false) {
    return "" + str;
  }
  else if (!str || !str.length) {
    return "";
  }
  trans = {
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "&": "&amp;",
    "'": "&apos;"
  };

  arr = str.split("");
  i = 0;
  while (i < arr.length) {
    c = arr[i];
    if (trans.hasOwnProperty(c)) {
      out += trans[c];
    }
    else {
      out += c;
    }
    i += 1;
  }
  return out;
}
