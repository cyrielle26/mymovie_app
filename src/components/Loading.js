/** @format */

import { PropagateLoader } from "react-spinners"
import styled from "styled-components"

const Wrap = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 300px;
	@media screen and (max-width: 480px) and (min-width: 300px) {
		padding: 50%;
	}
`

export const Loading = () => {
	return (
		<Wrap>
			<PropagateLoader color='#f9f9f9' />
		</Wrap>
	)
}
