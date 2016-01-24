nut = function(s, ctx) {
  ctx = typeof ctx == 'string'
    ? document.querySelector(ctx)
    : ctx || document;
  return /^#[\w\-]+$/.test(s)
    ? ctx.getElementById(s.slice(1))
    : [].slice.call(
        /^\.[\w\-]+$/.test(s)
          ? ctx.getElementsByClassName(s.slice(1))
          : ctx.querySelectorAll(s));
};
