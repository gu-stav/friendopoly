import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import Button from './Button';
import Card from './Card';

import { container, stack } from './style.css';

const Stack = ({ cards = [] }) => {
	const [store, setStore] = useState(cards);
  const [sum, setSum] = useState(0);
  const [hasNext, setHasNext] = useState(true);

	const controlStack = answer => {
		const reducedStack = [...store];
		const [, yes, no] = reducedStack.shift();

		if (answer === 'yes') {
			setSum(sum => sum + yes);
		}
		else {
			setSum(sum => sum + no);
		}

    setStore(reducedStack);
    setHasNext(reducedStack.length > 1);
  };

  const reset = () => {
    setStore(cards);
    setHasNext(true);
    setSum(0);
  };

	return (
		<Fragment>
			<div className={stack}>
				<footer>
					{sum}
				</footer>

				<div class={container}>
					{store.map(([ question, , , description ], index) => (
						<Card question={question} description={description} index={cards.length - store.length} length={cards.length} key={`card-${index}`}>
              {hasNext === true ? (
                <Fragment>
                  <Button type="button" onClick={event => {
                    event.preventDefault();
                    controlStack('yes');
                  }}
                  >
                    Ja
                  </Button>

                  <Button type="button" onClick={event => {
                    event.preventDefault();
                    controlStack('no');
                  }}
                  >
                    Nein
                  </Button>
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
            </Card>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default Stack;
