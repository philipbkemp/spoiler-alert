document.querySelector("body").style.opacity = 0;
doSpoilerAlert = setTimeout(spoilerAlertF1tv, 1000);

window.navigation.addEventListener("navigate", (event) => {
    document.querySelector("body").style.opacity = 0;
    doSpoilerAlert = setTimeout(spoilerAlertF1tv, 500);
});

function spoilerAlertF1tv() {
	document.querySelectorAll(".interactive-poster-image, .lazy-img").forEach(i=>{
		i.setAttribute("src","");
		i.setAttribute("srcset","");
		i.setAttribute("data-srcset","");
		i.setAttribute("data-src","");
	});
	document.querySelector("body").style.opacity = 1;
}