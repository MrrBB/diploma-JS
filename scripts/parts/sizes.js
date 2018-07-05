function sizes(){	
	let sizesBlocks = document.getElementsByClassName("sizes-block"),
		imgs = document.querySelectorAll(".sizes-block img");
		for(let i = 0; i < imgs.length; i++){		
			imgs[i].style.display = "none";
			imgs[i]-1.style.display = "block";
		}
		
}
sizes()
