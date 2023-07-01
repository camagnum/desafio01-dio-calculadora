import { InputContainer } from "./styles";

const Input = (props) => {
	return (
		<InputContainer>
			<p>{props.firstValue} {props.operator}</p>
			<input disabled value={props.currentValue} />
		</InputContainer>
	);
};

export default Input;
