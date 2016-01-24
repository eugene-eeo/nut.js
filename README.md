# nut.js

`querySelectorAll` and friends are fast enough. Nut.js is a
super tiny (216 bytes) wrapper around the DOM query methods
that returns an Array to allow you to write JQuery-esque code
by abusing native ES5 array methods. If you don't have to play
along with other selector libraries you can alias the `nut`
global to `$`.

```js
$ = nut;
$('span.octicon')
  .map(/**/)
  .filter(/**/)
  .reduce(/**/);

// optimisations
$('#id') === document.getElementById('id')
$('.klass')    // getElementsByClassName

// context
$('query', element);
$('query', '#id');
```
