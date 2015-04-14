var assert = require('chai').assert;

var Arc = require('../canvas/arc');

describe('Arc', function() {
	var arc;

	beforeEach(function() {
		arc = Arc();
	});

	it('should support regular accessors', function() {
		var keys = [
			'innerRadius',
			'outerRadius',
			'startAngle',
			'endAngle',
			'strokeStyle',
			'fillStyle',
			'lineWidth',
			'lineCap',
			'lineJoin',
			'miterLimit',
			'translate'
		], _ = 'cool';

		keys.forEach(function(key) {
			arc[key](_);
			assert.equal(arc[key](), _);
		});
	});
});
