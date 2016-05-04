var $ = nut;
var assert = chai.assert;
var qs  = document.querySelector.bind(document);
var qsa = document.querySelectorAll.bind(document);
var toa = [].slice;


describe('nut.el', function() {
  it('supports id queries', function() {
    assert.equal(
      $.el('#nut'),
      qs('#nut')
    );
  });

  it('supports selectors', function() {
    assert.equal(
      $.el('.nut'),
      qs('.nut')
    );
  });

  it('accepts element as selector argument', function() {
    assert.equal(
      $.el(qs('#nut')),
      qs('#nut')
    );
  });

  it('supports context argument', function() {
    var div = qs('#nut');
    var span = qs('#nut .nut');
    assert.equal($.el('.nut', '#nut'), span);
    assert.equal($.el('.nut', div), span);
  });
});


describe('nut', function() {
  it('supports class queries', function() {
    assert.deepEqual(
      $('.nut'),
      toa.call(qsa('.nut'))
    );
  });

  it('supports selectors', function() {
    assert.deepEqual(
      $('#nut .nut'),
      toa.call(qs('#nut').children)
    );
  });

  describe('context argument', function() {
    it('can be a string', function() {
      assert.deepEqual(
        $('.nut', '#nut'),
        toa.call(qs('#nut').children)
      );
    });

    it('can be an element', function() {
      assert.deepEqual(
        $('*', qs('#nut')),
        toa.call(qs('#nut').children)
      );
    });
  });
});
