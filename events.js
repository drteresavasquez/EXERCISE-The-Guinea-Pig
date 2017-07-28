console.log("events.js, yo!");

//variables at the top getting the HTML elements
let output = document.getElementById("output-target");
let section = document.getElementsByTagName("section");


//one of the objectives of the activity was to style a few of the elements using Javascript and not CSS. This was the way I accessed those specific elements and did it!
document.getElementsByTagName("section")[0].style.fontWeight = "bold";
document.getElementsByTagName("section")[5].style.fontWeight = "bold";
document.getElementsByTagName("section")[5].style.fontStyle = "italic";


//TARGET SECTIONS TO PRINT TO OUTPUT WHEN CLICKED
		function clickedSection(click){
			//this is taking the inner HTML of the element that I clicked and making element text for...
			let sectionText = click.target.innerHTML;

			//this output location, which is linked up in the variables at the top
			output.innerHTML = `You clicked on the ${sectionText} section`
		};

		//uh oh....here is a for loop! so, since the sections are an HTML collection, I have to access them in a slightly different way.
		for (let i = 0; i < section.length; i++){
			//this gets .item(i) because it is NOT an array. It is an HTML collection
			section.item(i).addEventListener("click", clickedSection);
		};

//CHANGE TEXT IN OUTPUT ON H1 MOUSE OVER AND MOUSE OUT
		//if I did not specify which h1 tag, I would have had to do another for loop or forEach. How did I specify? You see that [0]? ahhh...you get it! That is the index of the element I am trying to get.
		let header = document.getElementsByTagName("h1")[0];

			//now, I am adding event listenters to that element
			header.addEventListener("mouseover", headerMouseOver);
			header.addEventListener("mouseout", headerMouseOut);

			//when you mouseOVER, you get this message
		function headerMouseOver(event){
			output.innerHTML = `You moved your mouse over the header`;
		};
			//when you mouseOUT, you get this message
		function headerMouseOut(event){
			output.innerHTML = `You left me!!`;
		}


//CHANGE OUTPUT CONTENT ON KEYUP OF TEXT TYPED INTO INPUT BOX
		let userInput = document.getElementById("keypress-input");

		userInput.addEventListener("keyup", function(input){
			//this is telling the funtion to targer the innerHTML with the value that is typed into the input
			output.innerHTML = input.target.value;
		});

//When you click the "Add color" button, the guinea-pig element's text color should change to blue.
let guineaPig = document.getElementById("guinea-pig");
//get the ID
document.getElementById("add-color")
	//add event listener
	.addEventListener("click", function(){
		//make the class toggle back and forth on click
		guineaPig.classList.toggle("add-color")

	});

	//same idea as above:

//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("hulkify")

	});

//When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("add-border")

	});
//When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.getElementById("add-rounding")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("add-rounding")

	});

	//coffee and wine? please!!!














