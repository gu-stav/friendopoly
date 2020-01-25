import { h } from 'preact';

import { card, question as questionStyle, footer, meta, metaContainer, answer } from './style';

const Card = ({ question, description, index, length, children, ...rest }) => (
	<div className={card} data-index={index} {...rest}>
		<p className={questionStyle}>
      <small class={metaContainer}>
        <span className={meta}>Frage {index + 1} / {length}</span>
      </small>
      {question}
    </p>

    <p className={answer}>{description}</p>

    <footer class={footer}>
      {children}
    </footer>
	</div>
);

export default Card;
