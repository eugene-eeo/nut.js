describe('nut', function() {
  var $ = nut;
  var assert = chai.assert;

  it('supports classes', function() {
    assert.deepEqual(
      $('.nut'),
      [].slice.call($.el('#nut').children)
    );
  });
  it('supports selectors', function() {
    assert.deepEqual(
      $('#nut > span'),
      $('.nut')
    );
    assert.deepEqual(
      $('span.nut'),
      $('.nut')
    );
  });
  it('supports a context element', function() {
    assert.deepEqual(
      $('span', $.el('#nut')),
      $('.nut')
    );
  });
  it('supports a context string', function() {
    assert.deepEqual(
      $('span', 'div#nut'),
      $('.nut')
    );
  });
});

describe('nut.el', function() {
  var $ = nut;
  var assert = chai.assert;

  it('returns the first element matched', function() {
    assert.equal(
      $.el('#nut'),
      document.getElementById('nut')
    );
  });

  it('supports selectors', function() {
    assert.equal(
      $.el('#nut > span'),
      $('#nut > span')[0]
    )
  });
});
