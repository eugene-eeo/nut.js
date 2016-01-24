!function() {
  function _(ctx) {
    return typeof ctx == 'string'
      ? nut.el(ctx)
      : ctx || document;
  };

  nut = function(s, ctx) {
    ctx = _(ctx);
    return [].slice.call(
      /^\.[\w\-]+$/.test(s)
        ? ctx.getElementsByClassName(s.slice(1))
        : ctx.querySelectorAll(s));
  };

  nut.el = function(s, ctx) {
    ctx = _(ctx);
    return /^#[\w\-]+$/.test(s)
      ? ctx.getElementById(s.slice(1))
      : ctx.querySelector(s);
  };
}();
