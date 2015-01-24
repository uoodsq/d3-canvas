describe('Area', function() {
	var area;

	beforeEach(function() {
		area = d3.canvas.area();
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
			area[key]().should.equal(_);
		});
	});
});
