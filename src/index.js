import _ from 'lodash';
import './style.css';
import Plato from './Plato.jpg';

function component() {
	const element = document.createElement('div');
	const platoPng = new Image();

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	platoPng.src = Plato;

	element.appendChild(platoPng);

	return element;
}

document.body.appendChild(component());