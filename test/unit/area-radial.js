describe('Radial Area', function() {
	var area;

	beforeEach(function() {
		area = d3.canvas.area.radial();
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
			area[key](_);
			area[key]().should.equal(_);
		});
	});
});
