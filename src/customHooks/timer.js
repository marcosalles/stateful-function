import { useState, useEffect } from 'react';

export default function useTimer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCount(count + 1);
		}, 1000);

		return () => {
			clearTimeout(timeout);
		}
	}, [count]);

	return count;
};
