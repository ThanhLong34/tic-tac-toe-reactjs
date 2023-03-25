import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ onClick, children }) {
	return (
		<button className={cx("button")} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
