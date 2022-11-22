var main = document.getElementById("main");

for (let i = 99; i > 2; i--) {
  var text = document.createTextNode(i + " bottles of beer on the wall, " + i + " bottles of beer.");  
  main.appendChild(text);
  main.appendChild(document.createElement("br"));
  var text = document.createTextNode("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
  main.appendChild(text);
  main.appendChild(document.createElement("br"));
}

	var text = document.createTextNode("2 bottles of beer on the wall, 2 bottles of beer.");  
	main.appendChild(text);
	main.appendChild(document.createElement("br"));
	var text = document.createTextNode("Take one down and pass it around, 1 bottle of beer on the wall.");
	main.appendChild(text);
	main.appendChild(document.createElement("br"));
	
	var text = document.createTextNode("1 bottle of beer on the wall, 1 bottle of beer.");  
	main.appendChild(text);
	main.appendChild(document.createElement("br"));
	var text = document.createTextNode("Take one down and pass it around, No more bottles of beer on the wall.");
	main.appendChild(text);
	main.appendChild(document.createElement("br"));
	
	var text = document.createTextNode("No more bottles of beer on the wall, no more bottles of beer.");  
	main.appendChild(text);
	main.appendChild(document.createElement("br"));
	var text = document.createTextNode("Go to the store and buy some more, 99 bottles of beer on the wall.");
	main.appendChild(text);
	main.appendChild(document.createElement("br"));
	
	