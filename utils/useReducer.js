import * as React from "react";

function countReducer(state, action) {
	const {type, step} = action;
	switch (type) {
		case "increment": {
			return {
				...state,
				count: state.count + step,
			};
		}
		case "dicrement": {
			return {
				...state,
				count: state.count - step,
			};
		}
		default: {
			throw new Error(`Unsupported action type: ${type}`);
		}
	}
}

function Counter({initialCount = 0, step = 1}) {
	const [state, dispatch] = React.useReducer(countReducer, {
		count: initialCount,
	});
	const {count} = state;
	const increment = () => dispatch({type: "increment", step});
	const dicrement = () => dispatch({type: "dicrement", step});
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={dicrement}>dicrement</button>
		</div>
	);
}

function App() {
	return <Counter />;
}

export default App;
