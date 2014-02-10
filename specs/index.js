var rework = require('rework'),
    bem = require('../index'),
    fs = require('fs'),
    path = require('path');

function fixture(filename) {
  return fs.readFileSync(path.join(__dirname, filename), 'utf8').trim();
}

function transform(filename) {
  return rework(fixture(filename)).use(bem(filename, { root: 'fixture' })).toString();
}

describe('rework-bem', function() {

  it('should prefix selectors as block (.b-block)', function() {
    transform('fixture/block.css').should.equal(fixture('assertion/block.css'));
  });

  it('should prefix selectors as block modifier (.b-block--modifier)', function() {
    transform('fixture/block/modifier.css').should.equal(fixture('assertion/block/modifier.css'));
  });

  it('should prefix selectors as element (.b-block__element)', function() {
    transform('fixture/block/elements/element.css').should.equal(fixture('assertion/block/elements/element.css'));
  });

  it('should prefix selectors as element modifier (.b-block__element--modifier)', function() {
    transform('fixture/block/elements/element/modifier.css').should.equal(fixture('assertion/block/elements/element/modifier.css'));
  });

});
