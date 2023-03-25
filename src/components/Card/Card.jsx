import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

function Card({ children }) {
	return <div className={cx("card")}>{children}</div>;
}

export default Card;
