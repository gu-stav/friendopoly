import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Button from './Button';
import Card from './Card';

import { container, stack } from './style.css';

const Stack = ({ cards = [] }) => {
	const [store, setStore] = useState(cards);
	const [sum, setSum] = useState(0);
	const [hasNext, setHasNext] = useState(true);

	const continueStack = () => {
		const reducedStack = [...store];

		reducedStack.shift();

		setStore(reducedStack);
		setHasNext(reducedStack.length > 1);
	};

	const setStackCredit = result => {
		setSum(sum + result);
	};

	const reset = () => {
		setStore(cards);
		setHasNext(true);
		setSum(0);
	};

	return (
		<div className={stack}>
			<div class={container}>
				{hasNext === true ? (
					<Fragment>
						{store.map(question => {
							const index = cards.length - store.length;

							return (
								<Card index={index} length={cards.length} key={`card-${question[0]}`} continueStack={continueStack} setStackCredit={setStackCredit} question={question} />
							);
						})}
					</Fragment>
				) : (
					<Button type="button" onClick={event => {
						event.preventDefault();
						reset();
					}}
					>
						Start over
					</Button>
				)}
			</div>
		</div>
	);
};

export default Stack;
