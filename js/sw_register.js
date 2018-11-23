if(navigator.serviceWorker) {
	navigator.serviceWorker.register('./sw.js').then(function() {
		console.log("Registration Worked");
	}).catch(function() {
		console.log("Registration Failed!");
	});
}
