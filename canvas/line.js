function d3_canvas_line() {
	var x = d3_canvas_lineX,
	    y = d3_canvas_lineY,
	    strokeStyle,
	    lineWidth,
	    lineCap,
	    lineJoin,
	    miterLimit;

	function line(data) {
		return function(canvas) {
			var n = data.length;

			canvas.each(draw);
		};

		function draw() {
			var ctx = this.getContext('2d'),
			    i = 0;

			ctx.strokeStyle = strokeStyle;
			ctx.lineWidth = lineWidth;
			ctx.lineCap = lineCap;
			ctx.miterLimit = miterLimit;
			ctx.beginPath();
			ctx.moveTo.apply(null, coords(data[0], 0));
			while (++i < n) {
				ctx.lineTo.apply(null, coords(data[i], i));
			}
			ctx.stroke();
		}

		function coords() {
			return [+x.apply(this, arguments), +y.apply(this, arguments)];
		}
	}

	line.x = function(_) {
		if (!arguments.length) return x;
		x = _;
		return line;
	};

	line.y = function(_) {
		if (!arguments.length) return y;
		y = _;
		return line;
	};

	line.strokeStyle = function(_) {
		if (!arguments.length) return strokeStyle;
		strokeStyle = _;
		return line;
	};

	line.lineWidth = function(_) {
		if (!arguments.length) return lineWidth;
		lineWidth = _;
		return line;
	};

	line.lineCap = function(_) {
		if (!arguments.length) return lineCap;
		lineCap = _;
		return line;
	};

	line.lineJoin = function(_) {
		if (!arguments.length) return lineJoin;
		lineJoin = _;
		return line;
	};

	line.miterLimit = function(_) {
		if (!arguments.length) return miterLimit;
		miterLimit = _;
		return line;
	};

	return line;
}

// The default `x` property, which references d[0].
function d3_canvas_lineX(d) {
	return d[0];
}

// The default `y` property, which references d[1].
function d3_canvas_lineY(d) {
	return d[1];
}
