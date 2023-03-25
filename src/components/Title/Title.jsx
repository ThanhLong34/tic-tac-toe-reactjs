import classNames from "classnames/bind";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

function Title({ children }) {
	return <h6 className={cx("title")}>{children}</h6>;
}

export default Title;
