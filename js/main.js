(function(window, document) {
	function snackbar() {
		var x = document.getElementById('snackbar');
		x.classList.add('show');
		window.setTimeout(function() {
			x.classList.remove('show');
		}, 3000);
	}
	document.getElementById('showSnackbar').addEventListener('click', snackbar);
})(window, document);