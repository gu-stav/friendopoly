import { h } from 'preact';
import classnames from 'classnames';

import { button, buttonThemeGreen } from './style.css';

const Button = ({ theme, children, ...rest }) => (
	<button className={classnames(button, { [buttonThemeGreen]: theme === 'green' })} {...rest}>
		{children}
	</button>
);

export default Button;
