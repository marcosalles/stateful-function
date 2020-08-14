import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function Button(props) {
	const theme = useContext(ThemeContext);
	const style = {
		color: theme.foreground,
		backgroundColor: theme.background,
	};
	return (
		<button style={style}>
			{props.label}
		</button>
	)
};
