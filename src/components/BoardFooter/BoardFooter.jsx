import classNames from "classnames/bind";
import styles from "./BoardFooter.module.scss";
import Button from "@/components/Button";

const cx = classNames.bind(styles);

function BoardFooter({ winner, onResetGame }) {
	return (
		<>
			<p className={cx("winner")}>Winner is: {winner}</p>
			<Button onClick={onResetGame}>Reset game</Button>
		</>
	);
}

export default BoardFooter;
