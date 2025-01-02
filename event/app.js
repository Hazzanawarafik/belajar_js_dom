const form = document.querySelector('#form');
const list = document.querySelector('#notes');
const input = document.querySelector('input');


// input.addEventListener('change',(e) =>{
// 	console.log('Nilai Berubah');
// });

input.addEventListener('input',(e) =>{
	document.querySelector('h1').innerText = input.value;
	console.log('Nilai Berhasil diiinput');
});

form.addEventListener('submit', function(e){
	e.preventDefault();
	const noteValue = input.value;
	const newList = document.createElement('li');
	newList.innerText = noteValue;

	// console.log(newList);
	list.appendChild(newList);
	input.value = '';
});

