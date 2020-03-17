import React from 'react';
import logo from './logo.svg';

import './App.css';
import MapWithADirectionsRenderer from './SimpleMap';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='map'>
					<MapWithADirectionsRenderer />
				</div>
			</header>
		</div>
	);
}

export default App;
