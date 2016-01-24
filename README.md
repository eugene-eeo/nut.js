# nut.js

`querySelectorAll` and friends are fast enough. Nut.js is a
super tiny (216 bytes) wrapper around the DOM query methods
that returns an Array to allow you to write JQuery-esque code
by abusing native ES5 array methods.

```js
nut('span.octicon')
  .map(/**/)
  .filter(/**/)
  .reduce(/**/);
```

Nut.js also performs some optimisations:

```js
nut('#id') === document.getElementById('id')
nut('.klass')    // getElementsByClassName
```

You can also pass in an optional context:

```js
nut('query', element);
nut('query', '#id');
```

If you use a string as the context argument it will be passed
to the `nut` function, and the first element matched will be
used as the context.
