/* cookie-js
 * A simple library to manage JavaScript cookies.
 *
 * Contributors:
 *  - Viktor Korolyuk
 *    Original source code, repository, etc.
 *  - Ethan McTague
 *    Clean up, re-structure, fix/simplify getter method.
 */

/* The global 'cookies' object will hold the cookies. */
var cookies = {};

/* Create / set a cookie with the specified name and value. */
cookies.set = function(name, value, expires) {
  /* Expiry date string (if a Date() is passed.) */
  var additional = "";

  /* Expiry date string (if a new Date() is passed.) */
  if (expires && expires instanceof Date)
    additional += "; expires=" + expires;

  /* Expiry date string from date string. */
  else if (expires && typeof expires === "string")
    additional += "; expires=" + new Date(expires);

  /* Expiry date string (if a number is passed - n days into future. */
  else if (expires && typeof expires === "number") {
    var dayToExpire = new Date();
    dayToExpire.setDate(dayToExpire.getDate() + expires);
    additional += "; expires=";
  }

  /* Set the cookie. */
  document.cookie = name + "=" + value + additional;
};

/* Delete a cookie with the specified name and value. */
cookies.delete = function(name) {
  /* We delete the cookie by setting an expiry date from the past. */
  document.cookie = name + "=;expires=" + new Date(0);
};

/* Returns the text of the cookie with the desired name. */
cookies.get = function (name) {
  return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + name +
    "\\s*\\=\\s*([^;]*).*$)|^.*$", "g"), "$1"); 
};
