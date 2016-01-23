# nut.js

`querySelectorAll` and friends are fast enough. Nut.js is a
super tiny (229 bytes) wrapper around the DOM query methods
that returns an Array to allow you to write JQuery-esque code
by abusing native ES5 array methods.

```js
nut('span.octicon')
  .map(/**/)
  .filter(/**/)
  .reduce(/**/);
```

You can also pass in an optional context:

```js
nut('query', element);
nut('query', '#id');
nut('query', nut.id('id'));
```

If you use a string as a context it will be evaluated as
a selector, and the first element matched will be used as
the context.
