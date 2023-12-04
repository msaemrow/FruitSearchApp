//query selectors added to the global scope since each is called upon in multiple functions
const input = document.querySelector('#input-box');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//Takes input value and searches the fruit array for items that contain the input value. 
//If items contains it is added to the results array.

function search() {
	let results = [];
	let searchStr = input.value.toLowerCase();
	for (let name of fruit){
		if(name.toLowerCase().includes(searchStr)){
			results.push(name);
		} 
	}
	return results;
}

//function that passes the search function into the showSuggestions functions so it can be easily called in event handler
function searchHandler(e) {
		showSuggestions(search(),input.value);
}

//params- results (array), input value (from query selector)
//function checks for empty input value and empty results array. If either is found, nothing is returned
//If both parameters contain something a new UL is created
//Loop through the results array and create a new LI, add the value to the innerText of the LI append to the UL
//After loop is completed, appends the UL to the suggestions DIV container (from query selector)
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	if(inputVal === '' || results.length === 0){
		return;
	} else{
	const searchList = document.createElement('ul');
	for (let fruit of results){
		const searchResult = document.createElement('li');
		searchResult.innerText = fruit;
		searchResult.classList.add('result');
		searchList.appendChild(searchResult);
	}
	suggestions.appendChild(searchList);
	}
}

//parameters: event
//gets the innerText of the LI that was clicked on
//adds that innerText to the value of the input selector
//clears of the suggestions div to remove the list
function useSuggestion(e) {
	let searchTerm = e.target.innerText;
	input.value = searchTerm;
	suggestions.innerHTML = '';
}

//event listener that is called upon the end of every key stroke for real time updates of list
input.addEventListener('keyup', searchHandler);
//event handler that adds the search item to the search bar when it is clicked
suggestions.addEventListener('click', useSuggestion);
