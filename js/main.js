if (document.getElementById("home")){
	$.backstretch('images/home-background.jpg');
} else {
	$.backstretch('../images/home-background.jpg');
}
// Ensure hovering over the text in the home buttons causes the overlay to change
var homeButtons = document.getElementsByClassName('home-btn');  
for (i = 0; i < homeButtons.length; i++) {
	homeButtons[i].addEventListener('mouseover', function(){
		this.children[1].style.backgroundColor = 'rgba(0,0,0,0)';
	}, false);
	homeButtons[i].addEventListener('mouseout', function(){
		this.children[1].style.backgroundColor = 'rgba(0,0,0,.2)';
	}, false);
}
if(document.getElementById('fun-otters')){
	document.getElementById('fun-otters').addEventListener("click", function(){
		document.getElementById('facts').style.cursor = 'url(../images/otter-cursor.png), auto';
	}, false);
}

$(function(){
	$('#accordion').accordion({ 
		heightStyle: 'content' 
	});
	$('#lightgallery').lightGallery();
});