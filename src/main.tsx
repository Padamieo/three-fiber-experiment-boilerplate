import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber'

import Box from './components/spinningBox'

import "./index.css";

class App extends Component {

	// Perform route changes and or global here

	render() {
		return (
			<Suspense fallback="Loading">
				<Canvas style={{ background: "#171717" }}>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<Box position={[-1.0, 0, 0]} />
					<Box position={[1.2, 0, 0]} />
				</Canvas>
			</Suspense>
		);
	}
}

const mountNode = document.getElementById('root');

ReactDOM.render(<App />, mountNode);


