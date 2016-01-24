# nut.js

Modern 'selector engine'.

 - Comes in at ~0.3kB minified
 - Uses `querySelectorAll` and friends
 - Returns Arrays - abuse ES5 array methods
 - Optimises query methods
 - Support for contexts

Works great with [evee.js](https://github.com/eugene-eeo/evee.js).
If you don't have to play along with other selector libraries
you can alias the `nut` global to `$`.

### Usage

```html
<script src='/path/to/nut.js'></script>
```

```js
$ = nut;
$('span.octicon')
  .map(/**/)
  .filter(/**/)
  .reduce(/**/);

// optimisations
$('.klass')    // getElementsByClassName
$.el('#id')    // getElementById

// context
$('query', element);
$('query', '#nut');
$('query', $.el('#nut'));
```

### Installation

```sh
$ bower install eugene-eeo/nut.js
```
