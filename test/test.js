describe('nut', function() {
  var $ = nut;
  var assert = chai.assert;

  it('returns a one element array if it is an id query', function() {
    assert.deepEqual(
      $('#nut'),
      document.getElementById('nut')
    );
  });
  it('supports classes', function() {
    assert.deepEqual(
      $('.nut'),
      [].slice.call($('#nut').children)
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
      $('span', $('#nut')),
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
