import _ from 'lodash';
import printMe from './print';
import './styles.css';

function component() {
	const element = document.createElement('div');
	const button = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	button.innerHTML = 'Click me and check the console!';
	button.onclick = printMe;

	element.appendChild(button);

	return element;
}

const element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept('./print.js', function () {
		console.log('Accepting the updated printMe module!');
		document.body.removeChild(element);
		element = component(); // Re-render the "component" to update the click handler
		document.body.appendChild(element);
	})
}