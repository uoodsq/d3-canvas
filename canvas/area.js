function d3_canvas_area() {
	var x0 = d3_canvas_lineX,
	    x1 = d3_canvas_lineX,
	    y0 = 0,
	    y1 = d3_canvas_lineY,
	    strokeStyle,
	    fillStyle,
	    lineWidth,
	    lineCap,
	    lineJoin,
	    miterLimit;

	function area(data) {
		return function(canvas) {
			var n = data.length;

			canvas.each(draw);
		};

		function draw() {
			var ctx = this.getContext('2d'),
			    i = 0;

			ctx.strokeStyle = strokeStyle;
			ctx.fillStyle = fillStyle;
			ctx.lineWidth = lineWidth;
			ctx.lineCap = lineCap;
			ctx.lineJoin = lineJoin;
			ctx.miterLimit = miterLimit;
			ctx.beginPath();
			ctx.moveTo.apply(null, coords0(data[0], 0));
			while (++i < n) {
				ctx.lineTo.apply(null, coords0(data[i], i));
			}
			ctx.lineTo.apply(null, coords1(data[i], i));
			while (i-- > 0) {
				ctx.lineTo.apply(null, coords1(data[i], i));
			}
			ctx.stroke();
			ctx.closePath();
		}

		function coords0() {
			return [+x0.apply(this, arguments), +y0.apply(this, arguments)];
		}

		function coords1() {
			return [+x1.apply(this, arguments), +y1.apply(this, arguments)];
		}
	}

	area.x = function(_) {
		if (!arguments.length) return x1;
		x0 = x1 = _;
		return area;
	};

	area.x0 = function(_) {
		if (!arguments.length) return x0;
		x0 = _;
		return area;
	};

	area.x1 = function(_) {
		if (!arguments.length) return x1;
		x1 = _;
		return area;
	};

	area.y = function(_) {
		if (!arguments.length) return y1;
		y0 = y1 = _;
		return area;
	};

	area.y0 = function(_) {
		if (!arguments.length) return y0;
		y0 = _;
		return area;
	};

	area.y1 = function(_) {
		if (!arguments.length) return y1;
		y1 = _;
		return area;
	};

	return area;
}