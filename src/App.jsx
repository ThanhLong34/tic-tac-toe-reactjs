import Card from "./components/Card";
import Title from "./components/Title";
import Board from "./components/Board";

function App() {
	return (
		<div className="App">
			<Card>
				<Title>TIC TAC TOE</Title>
				<Board />
			</Card>
		</div>
	);
}

export default App;
