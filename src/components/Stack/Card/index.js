import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Button from '../Button';

import { card, question as questionStyle, footer, meta, metaContainer, answer as answerStyle } from './style';

const Card = ({ question, index, length, continueStack, setStackCredit, ...rest }) => {
	const [questionText, yes, no, answer] = question;
	const [hasAnswered, setHasAnswered] = useState(false);

	const setAnswer = type => {
		setHasAnswered(true);

		if (type === 'yes') {
			setStackCredit(yes);
		}
		else {
			setStackCredit(no);
		}
	};

	return (
		<div className={card} {...rest}>
			<p className={questionStyle}>
				<small class={metaContainer}>
					<span className={meta}>Frage {index + 1}/{length}</span>
				</small>

				{!hasAnswered && questionText}
			</p>

			{hasAnswered && (
			  <p className={answerStyle}>{answer}</p>
			)}

			<footer class={footer}>
				{hasAnswered === true ? (
					<Button type="button" onClick={event => {
						event.preventDefault();
						continueStack();
					}}
					>
              Next question
					</Button>
				) : (
					<Fragment>
						<Button type="button" onClick={event => {
							event.preventDefault();
							setAnswer('yes');
						}}
						>
                Ja
						</Button>

						<Button type="button" onClick={event => {
							event.preventDefault();
							setAnswer('no');
						}}
						>
                Nein
						</Button>
					</Fragment>
				)}
			</footer>
		</div>
	);
};

export default Card;
