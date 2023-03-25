import classNames from "classnames/bind";
import styles from "./Board.module.scss";

const cx = classNames.bind(styles);

function Board() {
	return (
		<div className={cx("board")}>
			<div className={cx("title")}>
				Next player is: <span className={cx("title-span")}>X</span>
			</div>
			<table className={cx("table")}>
				<tbody>
					<tr className={cx("row")}>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
					</tr>
					<tr className={cx("row")}>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
					</tr>
					<tr className={cx("row")}>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
						<td className={cx("col")}>
							<button className={cx("button")}>O</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Board;
