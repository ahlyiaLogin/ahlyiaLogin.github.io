var pass = "20853128";

function passcheck() {
	
	if(document.getElementById('pass1').value == pass){
		window.location.href = "https://ahlyia.github.io"
	}
	if(document.getElementById('pass1').value != pass){
		alert("Incorrect");
		return false;
	}
}
