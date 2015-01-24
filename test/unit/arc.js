describe('Radial Area', function() {
	var arc;

	beforeEach(function() {
		arc = d3.canvas.arc();
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
			arc[key]().should.equal(_);
		});
	});
});
