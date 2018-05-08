window.onload = function(){
	document.getElementById('arrayFile').addEventListener("change", function(e){
		let file = this.value;
		let filenameArr = file.split("\\");
		let filename = filenameArr[filenameArr.length - 1];
		let script = document.createElement("script");
		script.src = "../../userfiles/" + filename;
		script.async = false;
		document.head.appendChild(script);
	});
	
	document.getElementById('runTest').addEventListener("click", function(e){
		let result = document.getElementById('result');
		
		var array = new UserArray();
		array.add(1);
		array.add(2);
		array.add(3);
		array.add(4);
		array.print(); // => 1 2 3 4
		console.log('search 3 gives index 2:', array.search(3)); // => 2
		console.log('getAtIndex 2 gives 3:', array.getAtIndex(2)); // => 3
		console.log('length is 4:', array.length()); // => 4
		array.remove(3);
		array.print(); // => 1 2 4
		array.add(5);
		array.add(5);
		array.print(); // => 1 2 4 5 5
		array.remove(5);
		array.print(); // => 1 2 4
	});
}

