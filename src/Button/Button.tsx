import { ButtonProps, ButtonType } from "./types";
import "./button.scss";
export default function Button({
	onClick,
	label,
	type = ButtonType.normal
}: ButtonProps) {
	return <button onClick={onClick} className={type}>
		{type === ButtonType.normal ? label : <img src={process.env.PUBLIC_URL + '/close.svg'} />}
		</button>
}