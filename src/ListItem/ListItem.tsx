import "./listitem.scss";
import { ListItemType } from "./types";


export default function ListItem({
	title,
	extended
}: ListItemType) {
	const cardColor = extended && 'red'//if  prop extended is true, that means time extended and color should be red
	return <div className={`list-item ${cardColor}`}>
		{title}
	</div>
}