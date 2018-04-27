nut = function(s, ctx) {
    ctx = nut.el(ctx);
    return [].slice.call(
        /^\.[\w\-]+$/.test(s)
            ? ctx.getElementsByClassName(s.slice(1))
            : ctx.querySelectorAll(s));
};

nut.el = function(s, ctx) {
    if (typeof s !== 'string') {
        return s || document;
    }
    return (/^#[\w\-]+$/.test(s))
        ? document.getElementById(s.slice(1))
        : nut.el(ctx).querySelector(s);
};
