/**
 * Specs for Date class.
 *
 * @class Date
 */
describe('Date', function () {

	beforeEach(function() {
		this.date = new Date('00');
	});

	/**
	 * Specs for addhours method
	 *
	 * @method addhours
	 */
	describe('addhours', function () {
		it('add one hour to the date', function () {
			expect(this.date.addHours(1).getHours()).toBe(23);
		});
	});

	/**
	 * Specs for removeHours
	 *
	 * @method removeHours
	 */
	describe('removeHours', function () {
		it('removes an hour from the date', function () {
			expect(this.date.removeHours(1).getHours()).toBe(21);
		});
	});

	/**
	 * Specs for addMinutes
	 *
	 * @method addMinutes
	 */
	describe('addMinutes', function () {
		it('add a minute to the date', function () {
			expect(this.date.addMinutes(1).getMinutes()).toBe(1);
		});
	});

	/**
	 * Specs for removeMinutes
	 *
	 * @method removeMinutes
	 */
	describe('removeMinutes', function () {
		it('removes a minute from date', function () {
			expect(this.date.addMinutes(1).removeMinutes(1).getMinutes()).toBe(0);
		});
	});

});
