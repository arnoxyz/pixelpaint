

const pixelGridField = document.querySelector("#pixel-grid");

for(let i = 1; i <= 100; i++){
	createPixelDiv(i);
}

function createPixelDiv(id){	
	const div = document.createElement("div");
	div.innerText= id;
	div.style.width = "100px";
	div.style.height= "100px";
	div.style.background= "white";
	pixelGridField.appendChild(div);
}


