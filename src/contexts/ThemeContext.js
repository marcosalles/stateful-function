import React from 'react';

const THEMES = {
	LIGHT: {
		foreground: '#000',
		background: '#eee',
	},
	DARK: {
		foreground: '#e5e5e5',
		background: '#222',
	},
	SCHIZO: {
		foreground: '#12ff12',
		background: '#e726f8',
	},
};

const ThemeContext = React.createContext(THEMES.DARK);

export default ThemeContext;
export { THEMES };
