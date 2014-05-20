/**
 * Specs for Money class.
 *
 * @class Money
 */
describe('Money', function () {

	beforeEach(function() {
		spyOn(Money.prototype, 'format');
	});

	/**
	 * Specs for format method
	 *
	 * @method format
	 */
	describe('format', function () {
		it('make sure that the date has format', function () {
			this.money = new Money();
			expect(this.money.format).toHaveBeenCalled();
		});

		it('creates a string with money format', function () {
			this.money = new Money();
			expect(this.money.toString()).toBe('R$100,00');
		});
	});

	/**
	 * Specs for separateThousands method
	 *
	 * @method separateThousands
	 */
	describe('separateThousands', function () {
		it('separate a value with dots', function () {
			this.money = new Money();
			this.money.string_amount = '100';
			console.log(this.money.separateThousands());
			// expect(this.money.format).toHaveBeenCalled();
		});
	});

});
