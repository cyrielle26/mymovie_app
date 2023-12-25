/** @format */

import styled from "styled-components"
import { Gnb } from "./Gnb"
import { useRef, useEffect } from "react"
import { MobileGnb } from "./MobileGnb"

const Sheader = styled.header`
	width: 100vw;
	height: 95px;
	padding: 3%;
	margin: 0 auto;
	background: linear-gradient(
		180deg,
		rgba(4, 7, 20, 1) 0%,
		rgba(11, 14, 26, 70) 32%,
		rgba(87, 89, 98, 0) 100%
	);
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 8;
	@media screen and (max-width: 561px) {
		padding: 5%;
		height: 90px;
	}
	@media screen and (max-width: 450px) {
		padding: 6%;
	}
`

const GnbWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	@media screen and (max-width: 561px) {
		display: none;
	}
`
const MobileGnbWrap = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 30px;
	@media screen and (min-width: 562px) {
		display: none;
	}
`

//*******************************************************************************************************

export const Header = () => {
	const headerRef = useRef()

	useEffect(() => {
		const scrollHandler = () => {
			const pageY = window.scrollY

			if (pageY > 300) {
				headerRef.current.style.position = "fixed"
				headerRef.current.style.backgroundColor = "rgba(0,0,0,0.7)"
				headerRef.current.style.backdropFilter = "blur(3px)"
			} else {
				headerRef.current.style.position = "absolute"
				headerRef.current.style.backgroundColor = "transparent"
				headerRef.current.style.backdropFilter = "blur(0px)"
			}
		}

		window.addEventListener("scroll", scrollHandler)

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", scrollHandler)
		}
	}, []) // Empty dependency array ensures the effect runs only once

	return (
		<Sheader ref={headerRef}>
			<GnbWrap>
				<Gnb />
			</GnbWrap>
			<MobileGnbWrap>
				<MobileGnb />
			</MobileGnbWrap>
		</Sheader>
	)
}
