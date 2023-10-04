var pass = "20853128";

function passcheck() {
	var fr=new FileReader();
	fr.onload=function(){
	}
	
	if(document.getElementById('pass1').value == fr.readAsText("./NOTthepassword.txt")){
		window.location.href = "https://ahlyia.github.io";
	}
	if(document.getElementById('pass1').value != fr.readAsText("./NOTthepassword.txt"){
		alert("Incorrect");
		return false;
	}
}
