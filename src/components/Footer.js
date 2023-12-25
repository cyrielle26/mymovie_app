/** @format */

import styled from "styled-components"

const Container = styled.footer`
	width: 100%;
`
const _Footer = styled.footer`
	width: 100%;
	max-height: 95px;
	padding: 50px;
	margin-top: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.6);
	@media screen and (max-width: 1200px) {
	}

	@media screen and (max-width: 480px) {
		padding-bottom: 200px;
	}
`

export const Footer = () => {
	return (
		<Container>
			<_Footer>&copy; 2023 Cpcoding</_Footer>
		</Container>
	)
}
