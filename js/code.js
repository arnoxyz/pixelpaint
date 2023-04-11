main();


/*
 * main function all 
*/
function main(){
	createPixelGrid(100);
}

const pixelGridField = document.querySelector("#pixel-grid");

/*
 * Create the pixel grid
*/
function createPixelGrid(size)
{
	for(let i = 1; i <= size; i++){
		createPixelDiv(i);
	}
}


/*
 * creates a div 
 */
function createPixelDiv(id){	
	const pixelGridField = document.querySelector("#pixel-grid");
	const div = document.createElement("div");
	//div.innerText= id;
	div.id = id;
	div.style.width = "100px";
	div.style.height= "100px";
	div.style.background= "red";
	pixelGridField.appendChild(div);

	div.addEventListener('mouseover', () => {
		div.style.background = "white";
	});
}


