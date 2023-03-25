import classNames from "classnames/bind";
import styles from "./Cell.module.scss";

const cx = classNames.bind(styles);

function Cell({ value, onClick }) {
	return (
		<button className={cx("cell")} onClick={() => onClick(value.idx)}>
			{value.i}
		</button>
	);
}

export default Cell;
