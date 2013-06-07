describe('Line', function() {
	it('should allow setting/getting of x/y accessors', function() {
		var x = function(d) { return d.x; },
		    y = function(d) { return d.y; };

		var line = d3.canvas.line().x(x).y(y);

		line.x().should.equal(x);
		line.y().should.equal(y);
	});
});