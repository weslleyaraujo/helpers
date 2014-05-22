describe('String', function () {

	describe('normalize', function () {
		it('remove accents from string', function () {
			// given
			var words = 'Whát dões fóx sãys';

			// when
			words = words.normalize()

			// then
			expect(words).toEqual('What does fox says');
		});

		it('keep the string equal', function () {
			// given
			var words = 'what does the fox says';

			// when
			words = words.normalize();

			expect(words).toEqual('what does the fox says');
		});
	});

	describe('toSlug', function () {
		it('converts a string into a slug', function () {
			// given
			var words = 'What does the fox says';

			// when
			words = words.toSlug();

			// then
			expect(words).toEqual('what-does-the-fox-says');
		});
	});

	describe('truncate', function () {
		it('truncates a string with the terminator ...', function () {
			// given
			var words = 'What does the fox';

			// when
			words = words.truncate(15);

			// then
			expect(words).toEqual('What does the...');
		});

		it('keep the string equal', function () {
			expect('What does the fox'.truncate(20)).toEqual('What does the fox');
		});
	});

});
