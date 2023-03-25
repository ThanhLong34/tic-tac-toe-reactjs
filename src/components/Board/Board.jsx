import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Board.module.scss";

import Cell from "@/components/Cell";
import BoardFooter from "@/components/BoardFooter";

const cx = classNames.bind(styles);

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}

	return null;
}

function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isNextX, setIsNextX] = useState(true);
	const winner = calculateWinner(squares);

	const handleClick = (idx) => {
		// Check clicked
		if (squares[idx] !== null || winner !== null) {
			return;
		}

		// Update isNextX state
		setIsNextX(!isNextX);

		// Clone squares
		const newSquares = squares.slice();

		// Update squares
		newSquares[idx] = isNextX ? "X" : "O";
		setSquares(newSquares);
	};

	const handleResetGame = () => {
		setSquares(Array(9).fill(null));
	};

	return (
		<div className={cx("board")}>
			<div className={cx("title")}>
				Next player is:{" "}
				<span className={cx("title-span")}>{isNextX ? "X" : "O"}</span>
			</div>
			<div className={cx("table")}>
				{squares &&
					squares.map((i, idx) => (
						<Cell key={idx} value={{ i, idx }} onClick={handleClick} />
					))}
			</div>

			{/* winner !== null --> show winner */}
			{/* all item in squares !== null --> no have winner */}
			{(() => {
				if (winner || squares.every((i) => i !== null)) {
					return (
						<BoardFooter
							winner={winner ?? "no have"}
							onResetGame={handleResetGame}
						/>
					);
				}
			})()}
		</div>
	);
}

export default Board;
