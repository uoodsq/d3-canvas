var assert = require('chai').assert;

var Symbol = require('../canvas/symbol');

describe('Symbol', function() {
	var symbol, _ = 'foo';

	beforeEach(function() {
		symbol = Symbol();
	});

	it('should support regular accessors', function() {
		symbol.type(_);
		assert.equal(symbol.type(), _);
		symbol.size(_);
		assert.equal(symbol.type(), _);
	});
});
