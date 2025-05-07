import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TopBar = () => {
	return (
		<NavBar>
			<CustomNav to="/">HOME</CustomNav>
			<CustomNav to="/create">CREATE</CustomNav>
			<CustomNav to="/modal">MODAL</CustomNav>
		</NavBar>
	);
};

export default TopBar;

const NavBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 10px 0;
	margin-bottom: 20px;
	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);

	.active {
		font-weight: 700;
		color: white;
		background-color: palevioletred;
	}
`;

const CustomNav = styled(NavLink)`
	color: pink;
	padding: 10px 20px;
	font-size: 20px;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
	&:active {
		color: indianred;
	}
`;
