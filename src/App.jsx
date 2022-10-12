import { useSelector } from 'react-redux'
import styled from 'styled-components'
import InputContainer from './components/InputContainer'
import SingleCrypto from './components/SingleCrypto'
import ThemeSwitcher from './components/ThemeSwitcher'

const App = () => {
	const { theme } = useSelector((store) => store.crypto)

	return (
		<Wrapper>
			<div className={theme === 'light' ? 'center-light container' : 'center-dark container'}>
				<h4 className='title'>CRYPTO TRACKER</h4>
				<ThemeSwitcher />
				<InputContainer />
				<SingleCrypto />
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 2rem 0;
	.center-light {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: white;
		backdrop-filter: blur(20px);
		color: black;
	}

	.center-dark {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #000000ed;
		backdrop-filter: blur(20px);
		color: white;
	}
	.title {
		font-size: 2rem;
		margin: 2rem 0;
		font-weight: 700;
	}
`

export default App
