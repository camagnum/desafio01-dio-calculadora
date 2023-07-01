import Input from "./components/Input";
import Button from "./components/Button";
import Footer from "./components/Footer";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
	const [currentNumber, setCurrentNumber] = useState("0");
	const [firstNumber, setFirstNumber] = useState("0");
	const [operation, setOperation] = useState("");

	const handleAddNumber = (number) => {
		// setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);

		if (currentNumber === "0") {
			setCurrentNumber(`${number}`);
		} else {
			setCurrentNumber((prev) => `${prev}${number}`);
		}
	};

	const handleSumNumbers = () => {
		if (firstNumber === "0" || operation === '') {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("+");
		} else {
			const sum = Number(firstNumber) + Number(currentNumber);
			setCurrentNumber(String(sum.toFixed(2)));
			setFirstNumber(String(sum));
		}
	};

	const handleMinusNumbers = () => {
		if (firstNumber === "0" || operation === '') {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("-");
		} else {
			const sum = Number(firstNumber) - Number(currentNumber);
			setCurrentNumber(String(sum.toFixed(2)));
			setFirstNumber(String(sum));
		}
	};

	const handleMultiplyNumbers = () => {
		if (firstNumber === "0" || operation === '') {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("x");
		} else {
			const sum = Number(firstNumber) * Number(currentNumber);
			setCurrentNumber(String(sum.toFixed(2)));
			setFirstNumber(String(sum));
		}
	};

	const handleDivideNumbers = () => {
		if (firstNumber === "0") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("0");
			setOperation("/");
		} else {
				const sum = Number(firstNumber) / Number(currentNumber);
				setCurrentNumber(String(sum.toFixed(2)));
				setFirstNumber(String(sum));
		}
	};

	const handlePercent = () => {
		setOperation("%");
		const sum = (Number(firstNumber) * Number(currentNumber)) / 100;
		setCurrentNumber(String(sum.toFixed(2)));
	};

	const handleEquals = () => {
		if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
			switch (operation) {
				case "+":
					handleSumNumbers();
					setOperation("");
					break;
				case "-":
					handleMinusNumbers();
					setOperation("");
					break;
				case "x":
					handleMultiplyNumbers();
					setOperation("");
					break;
				case "/":
					handleDivideNumbers();
					setOperation("");
					break;
				default:
					break;
			}
		}
	};

	const handleClear = () => {
		setCurrentNumber("0");
		setFirstNumber("0");
		setOperation("");
	};

	return (
		<Container>
			<Content>
				<Input firstValue={firstNumber} currentValue={currentNumber} operator={operation} />
				<Row>
					<Button label="C" onClick={handleClear} />
					<Button label="%" onClick={handlePercent} />
					<Button label="/" onClick={handleDivideNumbers} />
					<Button label="x" onClick={handleMultiplyNumbers} />
				</Row>
				<Row>
					<Button label="7" onClick={() => handleAddNumber("7")} />
					<Button label="8" onClick={() => handleAddNumber("8")} />
					<Button label="9" onClick={() => handleAddNumber("9")} />
					<Button label="-" onClick={handleMinusNumbers} />
				</Row>
				<Row>
					<Button label="4" onClick={() => handleAddNumber("4")} />
					<Button label="5" onClick={() => handleAddNumber("5")} />
					<Button label="6" onClick={() => handleAddNumber("6")} />
					<Button label="+" onClick={handleSumNumbers} />
				</Row>
				<Row>
					<Button label="1" onClick={() => handleAddNumber("1")} />
					<Button label="2" onClick={() => handleAddNumber("2")} />
					<Button label="3" onClick={() => handleAddNumber("3")} />
					<Button label="." onClick={() => handleAddNumber(".")} />
				</Row>
				<Row>
					<Button label="0" onClick={() => handleAddNumber("0")} />
					<Button label="=" onClick={handleEquals} />
				</Row>
			</Content>
			<Footer />
		</Container>
	);
};

export default App;
