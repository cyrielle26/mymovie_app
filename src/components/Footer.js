/** @format */

import styled from "styled-components"

const Container = styled.footer`
height: 100%
width: 100%
position: relative;


`
const _Footer = styled.footer`
	width: 100vw;
	position: absolute;
	bottom: 0;
	left: 0;
	max-height: 95px;
	padding: 50px;
	margin-top: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.6);
	@media screen and (max-width: 1200px) {
	}

	@media screen and (max-width: 1024px) {
	}

	@media screen and (max-width: 900px) {
		/* padding-top: 95%; */
	}
	@media screen and (max-width: 768px) {
		/* padding-top: 10; */
	}
	@media screen and (max-width: 600px) {
	}
`

export const Footer = () => {
	return (
		<Container>
			<_Footer>&copy; 2023 Cpcoding</_Footer>
		</Container>
	)
}
