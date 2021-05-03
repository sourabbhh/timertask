export interface ButtonProps {
	onClick?: () => void;
	label?: string;
	type?: string;
}

export enum ButtonType {
	normal = 'normal',
	close = 'close'
}