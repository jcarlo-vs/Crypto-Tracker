import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { themeChanger } from '../features/cryptoSlice'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
const ThemeSwitcher = () => {
	const { theme } = useSelector((store) => store.crypto)
	const dispatch = useDispatch()

	const themeChange = (e) => {
		const name = e.target.name
		dispatch(themeChanger(name))
	}

	return (
		<Wrapper>
			<button
				onClick={themeChange}
				className={theme === 'light' ? 'light active' : 'light'}
				name='light'>
				<MdOutlineLightMode />
			</button>
			<button
				onClick={themeChange}
				className={theme === 'dark' ? 'dark active' : 'dark'}
				name='dark'>
				<MdDarkMode />
			</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: absolute;
	right: 2rem;
	top: 2rem;
	button {
		background-color: white;
		height: 3rem;
		width: 5rem;
		padding: 0.3rem 0.8rem;
		border: 1px solid #333;
		&:hover {
			background-color: #8b8282;
		}
		box-shadow: 0 10px 0 #333;
		cursor: pointer;
	}
	.light {
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;
		&:active {
			transform: translateY(10px);
			box-shadow: 0 0 0;
		}
	}
	.dark {
		border-top-right-radius: 2rem;
		border-bottom-right-radius: 2rem;
		&:active {
			transform: translateY(10px);
			box-shadow: 0 0 0;
		}
	}

	.active {
		transform: translateY(10px);
		box-shadow: 0 0 0;
	}

	@media (max-width: 880px) {
		button {
			height: 2rem;
			width: 4rem;
		}
	}
`
export default ThemeSwitcher
