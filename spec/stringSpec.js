/**
 * Specs for String class.
 *
 * @class String
 */
describe('String', function () {

	/**
	 * Specs for normalize method
	 *
	 * @method normalize
	 */
	describe('normalize', function () {
		it('remove accents from string', function () {
			expect('Whát dões fóx sãys'.normalize()).toBe('What does fox says');
		});

		it('keep the string equal', function () {
			expect('what does the fox says'.normalize()).toBe('what does the fox says');
		});
	});

	/**
	 * Specs for toSlug method
	 *
	 * @method toSlug
	 */
	describe('toSlug', function () {
		it('converts a string into a slug', function () {
			expect('What does the fox says'.toSlug()).toBe('what-does-the-fox-says');
		});
	});

	/**
	 * Specs for truncate method
	 *
	 * @method truncate
	 */
	describe('truncate', function () {
		it('truncates a string with the terminator ...', function () {
			expect('What does the fox'.truncate(16)).toBe('What does the...');
		});

		it('keep the string equal', function () {
			expect('What does the fox'.truncate(20)).toBe('What does the fox');
		});
	});

});
