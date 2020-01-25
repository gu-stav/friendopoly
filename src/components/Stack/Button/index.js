import { h } from 'preact';

import { button } from './style.css';

const Button = ({ children, ...rest }) => (
	<button className={button} {...rest}>
		{children}
	</button>
);

export default Button;
