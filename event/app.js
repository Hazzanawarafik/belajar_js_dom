const button = document.querySelector('#clickme');

button.onclick = function (){
	console.log('You clicked me');
}

const scream = () => {
	console.log('Dont touch me');
}

button.onmouseover = scream;

