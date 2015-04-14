var assert = require('chai').assert;

var Area = require('../canvas/area');

describe('Area', function() {
	var area;

	beforeEach(function() {
		area = Area();
	});

	it('should support regular accessors', function() {
		var keys = [
			'x0',
			'x1',
			'y0',
			'y1',
			'strokeStyle',
			'fillStyle',
			'lineWidth',
			'lineCap',
			'lineJoin',
			'miterLimit'
		], _ = 'hi';

		keys.forEach(function(key) {
			area[key](_);
			assert.equal(area[key](), _);
		});
	});
});
