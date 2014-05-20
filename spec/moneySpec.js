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
		it('tracks the format', function () {
			this.money = new Money();
			expect(this.money.format).toHaveBeenCalled();
		});
	});

});
