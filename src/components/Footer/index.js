import { FooterContainer } from "./styles";

const Footer = () => {
	var d = new Date();

	return (
		<FooterContainer>
			<small>&copy; Copyright {d.getFullYear()} Carlos Magnum</small>
		</FooterContainer>
	);
};

export default Footer;
