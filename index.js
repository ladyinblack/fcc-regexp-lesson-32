// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use Capture Groups to Search and Replace</h1>`;

/** TODO:
 * Write a regex "fixRegex" using three capture groups that will search for each word in the string "one two three".  Then update the "replaceText" variable to replace "one two three" with the string "three two one" and assign the result to the result variable.  Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.
 
 let str = "one two three";
 let fixRegex = /change/;      // Change this line 
 let replaceText = "";     // Change this line
 let result = str.replace(fixRegex, replaceText);
 */

let str = 'one two three';
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = str.replace(fixRegex, '$3 $2 $1'); // Change this line
let replaceText = '$3 $2 $1';
let result = str.replace(fixRegex, replaceText);

console.log(result);
