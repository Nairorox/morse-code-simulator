var morseText = ""
var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "/"]
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
var translatedText = "";
var textArray = [];
var dot;
function keyDown(event){
var keyCode = event.which || event.keyCode || 0;
console.log(keyCode);


 if (keyCode == 27){
morseText = "";
document.getElementById("translation").innerHTML = "";
}
else if(keyCode==88){
	dot = new Audio("dot.mp3");
	dot.volume = "0.5";
	dot.play();
	morseText+= ".";
}

else if(keyCode==67){
	dash = new Audio("dash.mp3");
	dash.volume = "0.5";
	dash.play();
	dash.delete;
	morseText += "-";
}

else if (keyCode==90){
morseText += "/";
}

else if (keyCode == 32){
	morseText += " ";
	}
	
	else if (keyCode == 8){
	morseText = morseText.slice(0, -1);
	}

	translateMorse(morseText);
document.getElementById("field").innerHTML = morseText;
}


function translateMorse(text){
	translatedText = "";
	textArray = text.split(" ");
	
	console.log(textArray);
	var arraylength = textArray.length;

	for(var i=0; i<arraylength; i++){
		for(var j = 0; j < morseCode.length; j++){
			if(textArray[i] === morseCode[j])
				translatedText += alphabet[j];
			}
	}
	document.getElementById("translation").innerHTML = translatedText;
}

document.addEventListener("keydown", keyDown, false);