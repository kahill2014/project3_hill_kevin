if (document.getElementById("home")){
	$.backstretch('images/home-background.jpg');
} else {
	$.backstretch('../images/sub-background.jpg');
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
/* On clicking the image in an accordion, turn the cursor into an otter */
if(document.getElementById('fun-otters')){
	document.getElementById('fun-otters').addEventListener('click', function(){
		document.getElementById('facts').style.cursor = 'url(../images/otter-cursor.png), auto';
	}, false);
}
// Execute the trivia submit when enter is clicked on the trivia page
if(document.getElementById('trivia')){
	document.addEventListener("keyup", function(event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById('submit').click();
		}
	});
}
/* Go to next question when "Submit" is clicked and tally results */
if(document.getElementById('submit')){
	var score = 0;
	var counter = 1;
	document.getElementById('submit').addEventListener('click', function(){
		if (!document.getElementById('input-val').value){
			alert("Please enter a value before submitting your answer.");
			return false;
		}
		if(checkAnswer(document.getElementById('input-val').value, counter)){
			score++;
			document.getElementById('current-score').innerHTML = score;
		}
		if(counter < 5){
			document.getElementById('input-val').value = "";
			document.getElementById('trivia-' + counter).style.display = 'none';
			counter++;
			document.getElementById('trivia-' + counter).style.display = 'block';
			document.getElementById('input-val').focus();
		} else {
			document.getElementById('trivia-' + counter).style.display = 'none';
			document.getElementById('submit').style.display = 'none';
			document.getElementById('input-val').style.display = 'none';
		}
		
	}, false);
}
/* Function to check whether or not the submitted answer is an acceptable answer */
/* 	Parameters:
		answer: text value of input field
		counter: current question counter
*/
function checkAnswer(answer, counter){
	console.log(answer);
	console.log(counter);
	var correctAnswers = document.getElementById('answer-' + counter).innerText.split(";");
	console.log(correctAnswers);
	for(var i = 0; i < correctAnswers.length; i++){
		if(correctAnswers[i] == (answer.toLowerCase())){
			console.log("correct");
			return true;
		}
	}
	return false;
}
/* Start the game over when "Start Over" is clicked by refreshing the page */
if(document.getElementById('reset')){
	document.getElementById('reset').addEventListener('click', function(){
		window.location.href = window.location.href;
	}, false);
}
/* When the page loads, run these functions */
$(function(){
	/* Initialize accordion */
	if ($('#accordion').length){
		$('#accordion').accordion({ 
			heightStyle: 'content' 
		});
	}
	/* Initialize lightbox gallery */
	if ($('#lightgallery').length){
		$('#lightgallery').lightGallery();
	}
});