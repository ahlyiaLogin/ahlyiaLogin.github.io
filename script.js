var pass = "20853128";

function passcheck() {
	if(document.getElementById('pass1').value == pass){
		window.location.href = "https://Lia-Games.github.io/main/";
	}
	if(document.getElementById('pass1').value != pass){
		alert("Incorrect");
		return false;
	}
}
