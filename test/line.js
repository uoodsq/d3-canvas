var assert = require('chai').assert;

var Line = require('../canvas/line');

describe('Line', function() {
	var line;

	beforeEach(function() {
		line = Line();
	});

	it('should support regular accessors', function() {
		var keys = [
			'x',
			'y',
			'strokeStyle',
			'lineWidth',
			'lineCap',
			'lineJoin',
			'miterLimit'
		], _ = 'hi';

		keys.forEach(function(key) {
			line[key](_);
			assert.equal(line[key](), _);
		});
	});
});
