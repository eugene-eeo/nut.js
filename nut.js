nut = function(s, ctx) {
  ctx = nut.el(ctx);
  return [].slice.call(
    /^\.[\w\-]+$/.test(s)
      ? ctx.getElementsByClassName(s.slice(1))
      : ctx.querySelectorAll(s));
};

nut.el = function(s, ctx) {
  if (typeof s != 'string') {
    return s || document;
  }
  ctx = nut.el(ctx);
  return /^#[\w\-]+$/.test(s) && ctx.getElementById
    ? ctx.getElementById(s.slice(1))
    : ctx.querySelector(s);
};
