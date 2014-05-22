/**
 * Specs for Money class.
 *
 * @class Money
 */
describe('Money', function () {

	/**
	 * Specs for format method
	 *
	 * @method format
	 */
	describe('format', function () {
		it('makes sure that the date has format', function () {
			spyOn(Money.prototype, 'format');
			this.money = new Money();
			expect(this.money.format).toHaveBeenCalled();
		});

		it('creates a string with money format', function () {
			this.money = new Money();
			expect(this.money.toString()).toBe('R$ 0,00');
		});
	});

	/**
	 * Specs for separateThousands method
	 *
	 * @method separateThousands
	 */
	describe('separateThousands', function () {
		it('separate a value with dots', function () {
			this.money = new Money(1000);
			expect(this.money.string_amount.replace(',', '.').split('.').length).toBe(3);
		});
	});

	/**
	 * Specs for separateThousands method
	 *
	 * @method separateThousands
	 */
	describe('separateThousands', function () {
		it('separate a value with dots', function () {
			this.money = new Money(1000);
			expect(this.money.string_amount.replace(',', '.').split('.').length).toBe(3);
		});
	});

	/**
	 * Specs for addSymbol method
	 *
	 * @method addSymbol
	 */
	describe('addSymbol', function () {
		it('adds a symbol to money', function () {
			this.money = new Money(10);
			expect(this.money.addSymbol('$')).toBe('$ 10,00');
		});
	});

});
