const input = document.querySelector('#input-box');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

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

function searchHandler(e) {
		showSuggestions(search(),input.value);
}

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

function useSuggestion(e) {
	let searchTerm = e.target.innerText;
	input.value = searchTerm;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
