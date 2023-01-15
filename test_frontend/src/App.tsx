import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Graph } from './battery-analytics/Graph';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Graph
					lines={[
						{
							points: [
								[2, 4],
								[3, 12],
								[4, 8],
								[5, 2],
								[6, 3]
							],
							lineWidth: 2,
							strokeStyle: 'lightblue',
							fill: true,
							
							showDots: true,
							dotRadius: 5,
							dotsFillStyle: 'lightblue',
							
							showLabels: true,
							labelTextAlign: 'center',
							labelFillStyle: 'white',
							labelOffsetY: -8
						}
					]}
					width={540}
					height={500}
					paddingLeft={20}
					paddingRight={20}
					gridSpacingX={1}
					gridSpacingY={1}/>
			</header>
		</div>
	);
}

export default App;
