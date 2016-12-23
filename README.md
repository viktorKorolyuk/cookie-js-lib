# cookie-js library

Cookie-js is a simple JavaScript library for the management of cookies.
It implements three simple methods:

```js
/* To set the cookie 'key' to 'value': */
cookie.set('key', 'value');

/* To get the value of 'key': */
cookie.get('key');

/* To delete the 'key' cookie: */
cookie.delete('key');

/* To set the cookie 'foo' to 'bar' - expires in 10 days. */
cookie.set('foo', 'bar', 10);

/* To set the cookie 'baz' to 'quux' - expires on Mar 4, 2020. */
cookie.set('baz', 'quux', 'Mar 4 2020');

/* To set the cookie 'ayy' to 'lmao' - expires on Jan 1, 2019. */
cookie.set('ayy', 'lmao', new Date(2019, 00, 01));
```

