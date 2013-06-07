describe('Line', function() {
	var line = d3.canvas.line();

	it('should allow setting/getting of x/y accessors', function() {
		var x = function(d) { return d.x; },
		    y = function(d) { return d.y; };

		line.x(x).y(y);

		line.x().should.equal(x);
		line.y().should.equal(y);
	});

	it('should allow setting/getting of stroke options', function() {
		line
			.strokeStyle('steelBlue')
			.lineWidth('2px')
			.lineCap('butt')  // hehehe butts
			.lineJoin('miter')
			.miterLimit(42);

		line.strokeStyle().should.equal('steelBlue');
		line.lineWidth().should.equal('2px');
		line.lineCap().should.equal('butt');
		line.lineJoin().should.equal('miter');
		line.miterLimit().should.equal(42);
	});
});