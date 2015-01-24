describe('Symbol', function() {
	var symbol, _ = 'foo';

	beforeEach(function() {
		symbol = d3.canvas.symbol();
	});

	it('should support regular accessors', function() {
		symbol.type(_);
		symbol.type().should.equal(_);
		symbol.size(_);
		symbol.type().should.equal(_);
	});
});
