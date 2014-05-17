/**
 * Helpers for Array class
 *
 * @class Array
 *
 */

/**
 * Remove accents from string.
 *
 * @method shuffle
 * @return {Array} Returns the array in a shuffle order
 */
Array.prototype.shuffle = function () {
	for(var j, x, i = this.length; i; j = Math.floor(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
	return this;
};
