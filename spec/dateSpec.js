describe('Date', function () {

	beforeEach(function() {
		this.date = new Date('00');
	});

	describe('addhours', function () {
		it('add one hour to the date', function () {
			// given
			var minutes = 1;

			// when
			this.date.addHours(minutes);

			// then
			expect(this.date.getHours()).toEqual(23);
		});
	});

	describe('removeHours', function () {
		it('removes an hour from the date', function () {
			// given
			var minutes = 1;

			// when
			this.date.removeHours(1)

			// then
			expect(this.date.getHours()).toEqual(21);
		});
	});

	describe('addMinutes', function () {
		it('add a minute to the date', function () {
			//give
			var minutes = 1;

			// when
			this.date.addMinutes(minutes);

			// then
			expect(this.date.getMinutes()).toEqual(1);
		});
	});

	describe('removeMinutes', function () {
		it('removes a minute from date', function () {
			// given
			var minutes = 10;

			// when
			this.date.addMinutes(minutes)
			this.date.removeMinutes(minutes);

			// then
			expect(this.date.getMinutes()).toEqual(0);
		});
	});

});
