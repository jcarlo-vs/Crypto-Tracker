import styled from 'styled-components'
import { filterData } from '../features/cryptoSlice'
import { inputChange } from '../features/cryptoSlice'
import { useDispatch, useSelector } from 'react-redux'

const InputContainer = () => {
	const { theme } = useSelector((store) => store.crypto)
	const { singleCrypto } = useSelector((store) => store.crypto)

	const dispatch = useDispatch()

	const inputHandler = (e) => {
		const value = e.target.value
		dispatch(inputChange(value))
		dispatch(filterData(value))
	}
	return (
		<Wrapper>
			<input
				type='text'
				name='search'
				value={singleCrypto}
				onChange={inputHandler}
				placeholder='Search Crypto....'
				className={theme === 'dark' ? 'dark' : ''}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 1rem;

	input {
		width: 70vw;
		max-width: 30rem;
		padding: 0.7rem 2rem;
		font-size: 1.3rem;
		border: none;
		box-shadow: 0 0 0 1px #333;
		border-radius: 0.3rem;
		outline: none;
		&::placeholder {
			font-size: 1rem;
		}
	}

	.dark {
		background-color: #0101019a;
		color: #fff;
	}
`
export default InputContainer
