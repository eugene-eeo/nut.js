nut = function(s, ctx) {
  ctx = nut.el(ctx);
  return [].slice.call(
    /^\.[\w\-]+$/.test(s)
      ? ctx.getElementsByClassName(s.slice(1))
      : ctx.querySelectorAll(s));
};

nut.el = function(s, ctx) {
  return typeof s != 'string'
    ? (s || document)
    : (ctx = nut.el(ctx),
       /^#[\w\-]+$/.test(s)
        ? ctx.getElementById(s.slice(1))
        : ctx.querySelector(s));
};
