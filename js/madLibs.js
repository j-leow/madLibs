/**************************************
 TITLE: madLibs.js
 AUTHOR: Jules Leow
 CLASS: NEWM-N220
 CREATE DATE: 03/07/2018
 Purpose: Create a page where users can input a noun, a verb, and a place and the story generator takes those inputs and sets them in the story. Use local storage to persist data. Use string replace.
 Date: 04/07/2018
 Modification History:
 04/07/2018: Original Build
***************************************/

// Create initial story
var story = "Luke Skywalker battled his inner {{noun}} as he {{verb}} to be a Jedi at {{location}} with Master Yoda.";

// Select generate button. Add event listener, call function to generate story
var generateBtn = document.querySelector("#generateML");
generateBtn.addEventListener('click', generateMadLibs);

// Create function to generate mad libs. 
// Use string replace to substitute placeholders with user input
// Use local storage to persist data
function generateMadLibs(event) {
  // Create variable to hold new story
  var newStory = "";

  // Get HTML elements
  var userNoun = document.querySelector("#userNoun");
  var userVerb = document.querySelector("#userVerb");
  var userLocation = document.querySelector("#userLocation");
  var output = document.querySelector("#output");

  // Use string replace to sub words into placeholders
  newStory = story.replace("{{noun}}", userNoun.value);
  // console.log("noun " + newStory);
  newStory = newStory.replace("{{verb}}", userVerb.value);
  // console.log("verb " + newStory);
  newStory = newStory.replace("{{location}}", userLocation.value);
  // console.log("location " + newStory);

  // Output results
  output.innerHTML = "<br> " + newStory;
  localStorage.setItem('savedStory', newStory)
  event.preventDefault();
}

  // Check to see if there's anything in local story. If not, add newStory into local storage.

  if (localStorage.getItem('savedStory')) {
    output.innerHTML = "<br> Displaying saved story: " + localStorage.getItem('savedStory');
  }