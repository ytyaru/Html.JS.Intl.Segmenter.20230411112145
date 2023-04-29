Number.prototype.isRange = function(start, end) { return (this <= end && start <= this) }
Number.prototype.range = function(start, end) { return [...Array((end - start) + 1)].map((_, i) => start + i) }

