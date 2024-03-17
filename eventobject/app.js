document.querySelector('button').addEventListener('click',(e) => {
	console.log(e);
});

const input = document.querySelector('input');
// input.addEventListener('keydown',() => {
// 	console.log('Tombol ditekan');
// })
// input.addEventListener('keyup',() => {
// 	console.log('Tombol dilepas');
// })
input.addEventListener('keydown',(e) => {
	console.log(e);
	console.log(e.key);
	console.log(e.code);
});
input.addEventListener('keydown',(e) => {
	switch(e.code){
		case 'ArrowUp':
			console.log('Tombol Arah Atas');
		break;
		case 'ArrowDown':
			console.log('Tombol Arah Bawah');
			break;
		case 'ArrowLeft':
			console.log('Tombol Arah Kiri');
			break;
		case 'ArrowRight':
			console.log('Tombol Arah Kanan');
			break;
		default:
			console.log('diabaikan');
	}
});

