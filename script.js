var pass = ${{ secrets.KEY_ }};

function passcheck() {
	
	if(document.getElementById('pass1').value == pass){
		
	}
	if(document.getElementById('pass1').value != pass){
		alert("Incorrect");
		return false;
	}
}
