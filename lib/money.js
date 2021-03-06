(function () {
	/**
	 * Helpers for Money
	 *
	 * @class Money
	 *
	 */
	window.Money = (function() {
		Money.prototype.amount = 0.0;
		Money.prototype.fraction_count = 2;
		Money.prototype.fraction_separator = ",";
		Money.prototype.separate_thousands = true;
		Money.prototype.symbol = "R$";
		Money.prototype.symbol_position = "front";
		Money.prototype.symbol_spacing = true;
		Money.prototype.thousands_separator = ".";

		/**
		 * Creates a the Money object
		 *
		 * @method Money
		 * @return {Object} The Money instance
		 */
		function Money(amount, options) {
			var o;
			if (options === null) {
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

		/**
		 * Format the money
		 *
		 * @method format
		 * @return {string} The formated money
		 */
		Money.prototype.format = function() {
			this.string_amount = this.amount.toFixed(this.fraction_count);
			if (this.separate_thousands) {
				this.string_amount = this.separateThousands();
			}

			this.string = this.addSymbol();
			return this.string;
		};

		/**
		 * Separate thousands with dots
		 *
		 * @method separateThousands
		 * @return {string} The formated money with dots
		 */
		Money.prototype.separateThousands = function() {
			var after_dot, before_dot, pattern, _ref;
			_ref = this.string_amount.split(".");
			before_dot = _ref[0];
			after_dot = _ref[1];
			pattern = /(-?\d+)(\d{3})/;
			while (pattern.test(before_dot)) {
				before_dot = before_dot.replace(pattern, "$1" + this.thousands_separator + "$2");
			}
			return [before_dot, after_dot].join(this.fraction_separator);
		};

	/**
	 * 
	 *
	 * @method addSymbol
	 * @param {String} The symbol to concat with money (defaul R$)
	 * @return {string} The formated money
	 */
		Money.prototype.addSymbol = function(symbol) {
			var string;
			string = [this.string_amount];
			string.splice((this.symbol_position === "front" ? 0 : 1), 0, symbol || this.symbol);
			return string.join(this.symbol_spacing ? " " : "");
		};

	/**
	 * Gives the string money
	 *
	 * @method toString
	 * @return {string} The formated money
	 */
		Money.prototype.toString = function() {
			return this.string;
		};

		return Money;

	})();

}).call(this);


/**
 * Adds Money to Number class
 *
 * @method toMoney
 * @return {Object} The Money instance
 */
Number.prototype.toMoney = function(options) {
	return new Money(this, options);
};

/**
 * Adds Money to String class
 *
 * @method toMoney
 * @return {Object} The Money instance
 */
String.prototype.toMoney = function(options) {
	return new Money(this, options);
};
