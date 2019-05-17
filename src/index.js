const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
	import('./image_viewer')
		.then(module => {
			return module.default();
	})
		.catch(err => {
			console.log('chunk loading', err)
		});
};

document.body.appendChild(button);
