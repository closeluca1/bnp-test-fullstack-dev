import { useState, useEffect } from 'react';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		const mountEvent = new CustomEvent('onCounterMount');
		window.dispatchEvent(mountEvent);

		return () => {
			const unmountEvent = new CustomEvent('onCounterUnmount');
			window.dispatchEvent(unmountEvent);
		};
	}, []);

	useEffect(() => {
		const dispatchUpdateEvent = (count: number) => {
			const updateEvent = new CustomEvent('onCounterUpdate', { detail: { count } });
			window.dispatchEvent(updateEvent);
		};

		if (count > 0) {
			dispatchUpdateEvent(count);
		};
	}, [count]);

	const handleIncrement = () => {
		setCount((prevCount) => {
			if (prevCount >= 10) {
				return 0;
			};
			return prevCount + 1;
		});
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
