import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Button from '../Button';

import { card, question as questionStyle, footer, meta, metaContainer, answer as answerStyle, source as sourceStyle } from './style';

const Card = ({ question, index, length, continueStack, setStackCredit, ...rest }) => {
	const [questionText, yes, no, answer, source] = question;
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
			{!hasAnswered && (
				<p className={questionStyle}>
					<small class={metaContainer}>
						<span className={meta}>Frage {index + 1}/{length}</span>
					</small>

					{questionText}
				</p>
			)}

			{hasAnswered && (
			  <p className={answerStyle}>
					{answer}

					{source && (
						<small className={sourceStyle}>{source}</small>
					)}
				</p>
			)}

			<footer class={footer}>
				{hasAnswered === true ? (
					<Button type="button" onClick={event => {
						event.preventDefault();
						continueStack();
					}}
					>
              Nächste Frage
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
