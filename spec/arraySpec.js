/**
 * Specs for Array class.
 *
 * @class Array
 */
describe('Array', function () {

	beforeEach(function() {
		this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	});

	/**
	 * Specs for shuffle method
	 *
	 * @method shuffle
	 */
	describe('shufle', function () {
		it('shuffle an array', function () {

			// Spy on Math.random to always get the same shuffle
			spyOn(Math, 'random').and.callFake(function() {
				return 0.8737654304131866;
			});

			expect(this.array.shuffle()).toEqual([1,2,3,4,5,6,10,7,8,9])
		});
	});

});
