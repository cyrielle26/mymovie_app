/** @format */

import styled from "styled-components"

const Container = styled.footer`
	position: relative;
	min-height: 35vh;
	height: 100%;
`

const _Footer = styled.footer`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 3.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.6);
	@media screen and (max-width: 1200px) {
	}

	@media screen and (max-width: 480px) {
		height: 15rem;
		align-items: flex-start;
		padding-top: 25px;
	}
`

export const Footer = () => {
	return (
		<Container>
			<_Footer>&copy; 2023 Cpcoding</_Footer>
		</Container>
	)
}
