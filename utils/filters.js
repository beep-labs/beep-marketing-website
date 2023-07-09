const dev = require('./filters/dev');
const date = require('./filters/date');

module.exports = {
	...dev,
	...date,

	copyright: function(originalYear) {
		var currentYear = (new Date()).getFullYear().toString();

		return originalYear === currentYear ? originalYear : originalYear + '—' + currentYear;
	},

	obfuscate: function(str) {
		const chars = [];
		for (var i = str.length - 1; i >= 0; i--) {
			chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
		}
		return chars.join('');
	},

	filterTagList(tags) {
		return (tags || []).filter(tag => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1);
	}
};
