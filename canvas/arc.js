module.exports = function() {
	var innerRadius = function(d) { return d.innerRadius; },
	    outerRadius = function(d) { return d.outerRadius; },
	    startAngle = function(d) { return d.startAngle; },
	    endAngle = function(d) { return d.endAngle; },
	    arcOffset = - Math.PI / 2,
	    strokeStyle = 'transparent',
	    fillStyle,
	    lineWidth,
	    lineCap,
	    lineJoin,
	    miterLimit,
	    translate;

	function arc(canvas, data) {
		canvas.each(function draw() {
			var ctx = this.getContext('2d'),
			    r0 = innerRadius(data),
			    r1 = outerRadius(data),
			    a0 = startAngle(data) + arcOffset,
			    a1 = endAngle(data) + arcOffset;

			ctx.strokeStyle = strokeStyle;
			ctx.fillStyle = fillStyle;
			ctx.lineWidth = lineWidth;
			ctx.lineCap = lineCap;
			ctx.lineJoin = lineJoin;
			ctx.miterLimit = miterLimit;
			ctx.translate.apply(ctx, translate);
			ctx.beginPath();

			ctx.moveTo.apply(ctx, ptoc(r0, a0));
			ctx.lineTo.apply(ctx, ptoc(r1, a0));
			ctx.arc(0, 0, r1, a0, a1);
			ctx.lineTo.apply(ctx, ptoc(r0, a1));
			ctx.arc(0, 0, r0, a1, a0, true);

			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		});

		function ptoc(r, a) {
			return [Math.cos(a) * r, Math.sin(a) * r];
		}
	}

	arc.innerRadius = function(_) {
		if (!arguments.length) return innerRadius;
		innerRadius = _;
		return arc;
	};

	arc.outerRadius = function(_) {
		if (!arguments.length) return outerRadius;
		outerRadius = _;
		return arc;
	};

	arc.startAngle = function(_) {
		if (!arguments.length) return startAngle;
		startAngle = _;
		return arc;
	};

	arc.endAngle = function(_) {
		if (!arguments.length) return endAngle;
		endAngle = _;
		return arc;
	};

	arc.centroid = function() {
		var r = (innerRadius.apply(this, arguments)
			+ outerRadius.apply(this, arguments)) / 2,
		    a = (startAngle.apply(this, arguments)
			+ endAngle.apply(this, arguments)) / 2 + arcOffset;
		return [Math.cos(a) * r, Math.sin(a) * r];
	};

	arc.strokeStyle = function(_) {
		if (!arguments.length) return strokeStyle;
		strokeStyle = _;
		return arc;
	};

	arc.fillStyle = function(_) {
		if (!arguments.length) return fillStyle;
		fillStyle = _;
		return arc;
	};

	arc.lineWidth = function(_) {
		if (!arguments.length) return lineWidth;
		lineWidth = _;
		return arc;
	};

	arc.lineCap = function(_) {
		if (!arguments.length) return lineCap;
		lineCap = _;
		return arc;
	};

	arc.lineJoin = function(_) {
		if (!arguments.length) return lineJoin;
		lineJoin = _;
		return arc;
	};

	arc.miterLimit = function(_) {
		if (!arguments.length) return miterLimit;
		miterLimit = _;
		return arc;
	};

	arc.translate = function(_) {
		if (!arguments.length) return translate;
		translate = _;
		return arc;
	};

	return arc;
};
