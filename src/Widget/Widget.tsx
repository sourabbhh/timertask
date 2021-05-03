import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { ButtonType } from "../Button/types";
import { ListItemType } from "../ListItem/types";
import "./widget.scss";
interface WidgetProps {
	toggleWidget: any;
	changeListItem: any;
}
export default function Widget({ toggleWidget, changeListItem }: WidgetProps) {
	const secondsConst = 60;
	const [timer, changeTime] = useState<number>(0);
	const [title, changeTitle] = useState<string>('');

	useEffect(() => {
		const interval = setInterval(() => {
			changeTime(time => time + 1);
		}, 1000);
		return (() => clearInterval(interval));
	}, []);

	function createHandler() {
		changeListItem((ListItem: ListItemType[]): ListItemType[] => {
			return [...ListItem, {
				title,
				extended: (timer > (secondsConst * 2)) ? true : false
			}]
		})
		toggleWidget(false);
	}

	function inputHandler(e:any){
		changeTitle(e?.target?.value);
	}

	const cardColor = (timer > (secondsConst * 2)) && 'red';
	return <div className="widget">
		<div className="overlay" />
		<div className={`card ${cardColor}`}>
			<Button type={ButtonType.close} onClick={()=>toggleWidget(false)} />
			<input id="title" placeholder="Title" value={title} onChange={inputHandler}></input>
			{Math.trunc(timer / secondsConst)}:{timer % secondsConst}
			<Button label="Create" onClick={createHandler} />
		</div>
	</div>
}