if(!navigator.serviceWorker) return;

navigator.serviceWorker.register('./sw.js').then(function() {
	console.log("Registration Worked");
}).catch(function() {
	console.log("Registration Failed!");
});