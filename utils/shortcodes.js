module.exports = {
	copyright(yearOfPublication) {
		var currentYear = (new Date()).getFullYear().toString();

		return yearOfPublication === currentYear ? yearOfPublication : yearOfPublication + '—' + currentYear;
	}
};
