// Poem text
const kiplingPoem = `<p>Happy 27th Birthday! <span>EVA,</span> my one and only ChutuMutu, my Queen, my Moharani! 💖🎉 <span>21st August 2017,</span> the moment we met on <span>I knew </span> my life was about to change forever. I am so grateful to have you by my side as my partner in love and life <span>2nd August 2019</span> you chose to marry me <span>even</span> When I was still finding my way<span>allowance</span> You’ve been my rock, my inspiration. 
Today, I celebrate YOU— <span>the beautiful, loving, and amazing</span> woman,    
and I will cherish you always. <span>Here’s to more love, laughter, and incredible moments together</span> May this year bring you all the happiness you deserve, and I will always be here to love you and support you <span>no matter what. </p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
