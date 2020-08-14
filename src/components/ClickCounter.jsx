import React, { useEffect } from 'react';
import { useState } from 'react';

export function Incrementor(props) {
	return (
		<div>
			<p>O incremento do contador é {props.increment}</p>
			<button
				onClick={props.increaseIncrement}
			>Clique para aumentar o incremento do contador</button>
		</div>
	);
}

export function Counter(props) {
	useEffect(() => {
		const interval = setInterval(() => {
			console.log('O contador está com valor', props.count);
		}, 1000);

		return () => {
			console.log('componente vai morrer');
			clearInterval(interval);
		}
  }, []);

	return (
		<div>
			<p>Você clicou {props.count} vezes</p>
			<button
				onClick={props.incrementCount}
			>Clique para incrementar o contador</button>
		</div>
	);
}
