(function() {
	d3.canvas = d3.canvas || {};

	d3.canvas.area = function() {
		var x0 = function(d) { return d[0]; },
		    x1 = function(d) { return d[0]; },
		    y0 = 0,
		    y1 = function(d) { return d[1]; },
		    strokeStyle = 'transparent',
		    fillStyle,
		    lineWidth,
		    lineCap,
		    lineJoin,
		    miterLimit;

		function area(canvas, data) {
			var n = data.length;

			canvas.each(function draw() {
				var ctx = this.getContext('2d'),
				    i = 0;

				ctx.strokeStyle = strokeStyle;
				ctx.fillStyle = fillStyle;
				ctx.lineWidth = lineWidth;
				ctx.lineCap = lineCap;
				ctx.lineJoin = lineJoin;
				ctx.miterLimit = miterLimit;
				ctx.beginPath();
				ctx.moveTo.apply(ctx, coords0(data[0], 0));
				while (++i < n) {
					ctx.lineTo.apply(ctx, coords0(data[i], i));
				}
				while (--i > -1) {
					ctx.lineTo.apply(ctx, coords1(data[i], i));
				}
				ctx.lineTo.apply(ctx, coords0(data[0], 0));
				ctx.stroke();
				ctx.fill();
				ctx.closePath();
			});

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

		area.strokeStyle = function(_) {
			if (!arguments.length) return strokeStyle;
			strokeStyle = _;
			return area;
		};

		area.fillStyle = function(_) {
			if (!arguments.length) return fillStyle;
			fillStyle = _;
			return area;
		};

		area.areaWidth = function(_) {
			if (!arguments.length) return lineWidth;
			lineWidth = _;
			return area;
		};

		area.areaCap = function(_) {
			if (!arguments.length) return lineCap;
			lineCap = _;
			return area;
		};

		area.areaJoin = function(_) {
			if (!arguments.length) return lineJoin;
			lineJoin = _;
			return area;
		};

		area.miterLimit = function(_) {
			if (!arguments.length) return miterLimit;
			miterLimit = _;
			return area;
		};

		return area;
	};
}());

(function() {
	d3.canvas = d3.canvas || {};

	d3.canvas.line = function() {
		var x = function(d) { return d[0]; },
		    y = function(d) { return d[1]; },
		    strokeStyle,
		    lineWidth,
		    lineCap,
		    lineJoin,
		    miterLimit;

		function line(canvas, data) {
			var n = data.length;

			canvas.each(function draw() {
				var ctx = this.getContext('2d'),
				    i = 0;

				ctx.strokeStyle = strokeStyle;
				ctx.lineWidth = lineWidth;
				ctx.lineCap = lineCap;
				ctx.miterLimit = miterLimit;
				ctx.beginPath();
				ctx.moveTo.apply(ctx, coords(data[0], 0));
				while (++i < n) {
					ctx.lineTo.apply(ctx, coords(data[i], i));
				}
				ctx.stroke();
			});

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
	};
}());
