describe('String', function () {

	describe('normalize', function () {
		it('remove accents from string', function () {
			expect('Whát dões fóx sãys'.normalize()).toBe('What does fox says');
		});

		it('keep the string equal', function () {
			expect('what does the fox says'.normalize()).toBe('what does the fox says');
		});
	});

	describe('toSlug', function () {
		it('converts a string into a slug', function () {
			expect('What does the fox says'.toSlug()).toBe('what-does-the-fox-says');
		});
	});

});
