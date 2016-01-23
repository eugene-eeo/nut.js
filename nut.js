nut = function(s, ctx) {
  ctx = ctx ?
    typeof ctx === "string"
      ? nut(ctx)[0]
      : ctx
    : document;
  return [].slice.call(
    /^\.[\w\-]+$/.test(s)
      ? ctx.getElementsByClassName(s.slice(1))
      : ctx.querySelectorAll(s));
};
nut.id = document.getElementById.bind(document);
