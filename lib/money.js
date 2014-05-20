(function () {
	window.Money = (function() {
		Money.prototype.amount = 0.0;
		Money.prototype.fraction_count = 2;
		Money.prototype.fraction_separator = ",";
		Money.prototype.separate_thousands = true;
		Money.prototype.symbol = "R$";
		Money.prototype.symbol_position = "front";
		Money.prototype.symbol_spacing = false;
		Money.prototype.thousands_separator = ".";

		function Money(amount, options) {
			var o;
			if (options == null) {
				options = {};
			}
			for (o in options) {
				this[o] = options[o];
			}
			amount = parseFloat(amount);
			if (!isNaN(amount)) {
				this.amount = amount;
			}
			this.format();
		}

		Money.prototype.format = function() {
			this.string_amount = this.amount.toFixed(this.fraction_count);
			if (this.separate_thousands) {
				this.string_amount = this.separateThousands();
			}
			return this.string = this.addSymbol();
		};

		Money.prototype.separateThousands = function() {
			var after_dot, before_dot, pattern, _ref;
			_ref = this.string_amount.split("."), before_dot = _ref[0], after_dot = _ref[1];
			pattern = /(-?\d+)(\d{3})/;
			while (pattern.test(before_dot)) {
				before_dot = before_dot.replace(pattern, "$1" + this.thousands_separator + "$2");
			}
			return [before_dot, after_dot].join(this.fraction_separator);
		};

		Money.prototype.addSymbol = function() {
			var string;
			string = [this.string_amount];
			string.splice((this.symbol_position === "front" ? 0 : 1), 0, this.symbol);
			return string.join(this.symbol_spacing ? " " : "");
		};

		Money.prototype.toString = function() {
			return this.string;
		};

		return Money;

	})();

}).call(this);


Number.prototype.toMoney = function(options) {
	return new Money(this, options);
};

String.prototype.toMoney = function(options) {
	return new Money(this, options);
};
