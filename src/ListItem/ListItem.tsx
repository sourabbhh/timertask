import "./listitem.scss";
import { ListItemType } from "./types";


export default function ListItem({
	title,
	extended
}: ListItemType) {
	const cardColor = extended && 'red'
	return <div className={`list-item ${cardColor}`}>
		{title}
	</div>
}