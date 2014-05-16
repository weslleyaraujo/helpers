describe('String', function () {

	it('remove accents from string', function () {
		expect('Whát dões fóx sãys'.normalize()).toEqual('What does fox says');
	});

	it('converts a string into a slug', function () {
		expect('What does the fox says'.toSlug()).toEqual('what-does-the-fox-says');
	});

});
