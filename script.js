window.promises = [];
var output = document.getElementById("output");
var promise = new Promise((resolve)=>{
	setTimeout(()=>{
		output.innerHTML="ans1"
	resolve();
	},Math.floor(Math.random() * 5000))
});

Promise.any();

// Do not change the code above this
// add your promises to the array `promises`
