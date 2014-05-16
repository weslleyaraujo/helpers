/**
 * Helpers for String class.
 *
 * @class String
 *
 */

/**
 * Remove accents from string.
 *
 * @method normalize
 * @return {String} Returns the string without any accent
 */
String.prototype.normalize = function () {
	var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž',
			accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz',
			strAccents = this.split(''),
			strAccentsOut = [],
			strAccentsLen = strAccents.length;
			
	for (var y = 0; y < strAccentsLen; y++) {
		if (accents.indexOf(strAccents[y]) != -1) {
			strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
		} else
			strAccentsOut[y] = strAccents[y];
	}

	return strAccentsOut.join('');
};

/**
 * Creates a slug from string
 *
 * @method toSlug
 * @return {String} Returns the string like a url slug (just-like-this)
 */
String.prototype.toSlug = function () {
	return this
		.normalize()
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-');
};

/**
 * Truncates a given text with a terminator (...) if the length
 * is exceeding the number of characteres
 *
 * @method truncate
 * @param {Number} n The length of characteres
 * @param {String} terminator The terminator to concat with your string (default '...')
 * @return {String} Returns the string with the number of characteres specified
 */
String.prototype.truncate = function(n, terminator) {
	var lastIndex = this.lastIndexOf(' ', n), ret = this.toString();

	if(ret.length <= n) return ret;

	if (lastIndex != -1) {
		ret = this.substring(0, lastIndex) + (terminator || '...');
	}

	return ret;
};
