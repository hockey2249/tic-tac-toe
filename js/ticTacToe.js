var display = 'X';
var boxColor = "red";

function start(){
		var display = 'X';	
		message(display + ", please make your move first.");
}
function message(mess){
	document.getElementById("messages").textContent = mess;
}

function nextMove(box){
	if (box.textContent == ''){
		box.textContent = display;
		box.style.backgroundColor = boxColor;
		switchTurn();
	}else {
		message('Please choose another square, this square is already taken!');
	}
}
function switchTurn(){
	
	if(checkForWinner(display)){
		message("Congratulations, " + display + "! You win!");
		winner = display;
		alert(display + ", you won! Please don't click any more spaces.");
	}else if (display == 'X'){
		display = 'O';
		boxColor = "blue";
		message(display + ", please make your move.");
	} else {
		display = 'X';
		message(display + ", please make your move.");
		boxColor = "red";
	}
	message.textContent = display + " goes!";
}
function checkForWinner(allow){
	var result = false;
	
	if( checkRow(1,2,3, allow) || 
		checkRow(4,5,6, allow) || 
		checkRow(7,8,9, allow) ||
		checkRow(1,4,7, allow) ||
		checkRow(2,5,8, allow) ||
		checkRow(3,6,9, allow) ||
		checkRow(1,5,9, allow) ||
		checkRow(3,5,7, allow)) {
		
		result = true;
	}
	return result;
}
function checkRow(a, b, c, allow){
	var result = false;
	if(getBox(a) == allow && getBox(b) == allow && getBox(c) == allow) {
		result = true;
	}
	return result;
}
function getBox(number){
	return document.getElementById("s" + number).textContent;
}

function reset(){
	var gameBoxes = document.getElementsByClassName("box");
	for (var i = 0; i < gameBoxes.length; i++){
		gameBoxes[i].style.backgroundColor='purple';
		gameBoxes[i].innerHTML= '';
	}
	return start();		
}
