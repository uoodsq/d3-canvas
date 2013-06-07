(function() {
	d3.canvas = d3.canvas || {};

	d3.canvas.symbol = function() {
		var type = function() { return 64; },
		    size = function() { return 'circle'; };

		function symbol() {
			var s = symbols[type.apply(this, arguments)] || circle;

			return s.call(this, size.apply(this, arguments));
		}

		symbol.type = function(_) {
			if (!arguments.length) return type;
			type = _;
			return symbol;
		};

		symbol.size = function(_) {
			if (!arguments.length) return size;
			size = _;
			return symbol;
		};
	};

	function d3_canvas_symbolSize() {
		return 64;
	}

	function d3_svg_symbolType() {
		return 'circle';
	}

	function circle(size) {
		var ctx = this.getContext('2d'),
		    r = Math.sqrt(size / Math.PI);

		ctx.beginPath();
		ctx.arc(0, 0, r, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.endPath();
	}
}());