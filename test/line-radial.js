var assert = require('chai').assert;

var LineRadial = require('../canvas/line-radial');

describe('Radial Line', function() {
	var radial;

	beforeEach(function() {
		radial = LineRadial();
	});

	it('should support regular accessors', function() {
		var keys = [
			'angle',
			'radius',
			'strokeStyle',
			'lineWidth',
			'lineCap',
			'lineJoin',
			'miterLimit'
		], _ = 'cool';

		keys.forEach(function(key) {
			radial[key](_);
			assert.equal(radial[key](), _);
		});
	});
});
