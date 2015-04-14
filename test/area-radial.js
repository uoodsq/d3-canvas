var assert = require('chai').assert;

var AreaRadial = require('../canvas/area-radial');

describe('Radial Area', function() {
	var radial;

	beforeEach(function() {
		radial = AreaRadial();
	});

	it('should support regular accessors', function() {
		var keys = [
			'angle',
			'radius',
			'startAngle',
			'endAngle',
			'innerRadius',
			'outerRadius',
			'strokeStyle',
			'fillStyle',
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
