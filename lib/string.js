/*
 * @String
 * 
 * String Helpers
 * */
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

String.prototype.toSlug = function () {
	return this
		.normalize()
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-');
};
