var topleft = document.getElementById("topleft");
var bottomleft = document.getElementById("bottomleft");
var topright = document.getElementById("topright");
var bottomright = document.getElementById("bottomright");

var tleft = document.getElementById("tleft");
var tright = document.getElementById("tright");
var bleft = document.getElementById("bleft");
var bright = document.getElementById("bright");

var borda = document.getElementById("borda").style;
var span = document.getElementById("borderadius");

topleft.addEventListener('keyup', topleft1);
function topleft1() 
{
	borda.borderTopLeftRadius = topleft.value + "px";	
	tleft.innerHTML = topleft.value;
}

topright.addEventListener('keyup', topright1);
function topright1(){
	borda.borderTopRightRadius = topright.value + "px";
	tright.innerHTML = topright.value;
}

bottomleft.addEventListener('keyup', bottomleft1);
function bottomleft1(){
	borda.borderBottomLeftRadius = bottomleft.value + "px";
	bleft.innerHTML = bottomleft.value;
}

bottomright.addEventListener('keyup', bottomright1);
function bottomright1(){
	borda.borderBottomRightRadius = bottomright.value + "px";
	bright.innerHTML = bottomright.value;
}

function copiar()
{
	navigator.clipboard.writeText("border-radius: " + tleft.innerHTML + "px " + tright.innerHTML + "px " + bright.innerHTML + "px " + bleft.innerHTML + "px;");
	alert("Copiado!");
}

