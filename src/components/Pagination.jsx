import styled from 'styled-components'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import { paginateCryptoData, changePage, getCryptoData } from '../features/cryptoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Pagination = () => {
	const { page, theme } = useSelector((store) => store.crypto)
	const pages = Array.from({ length: 10 }, (_, index) => {
		return index + 1
	})

	const dispatch = useDispatch()

	const testingClick = (e) => {
		const name = e.target.name
		dispatch(changePage(name))
		dispatch(getCryptoData())
	}

	const pageClick = (e) => {
		const value = Number(e.target.textContent)
		const name = Number(e.target.name)
		dispatch(paginateCryptoData(value))
		console.log(value, 'page click')
		dispatch(changePage(name))
	}

	return (
		<Wrapper>
			<button
				name='prev'
				className={`${theme === 'light' ? 'btn light' : 'btn'}`}
				onClick={testingClick}>
				<AiOutlineDoubleLeft className='icon' />
				Prev
			</button>
			<div className='btn-container'>
				{pages.map((btn, index) => {
					return (
						<button
							name={index + 1}
							onClick={pageClick}
							key={index}
							className={`${page === index + 1 ? 'active btn' : 'btn'} ${theme === 'light' ? 'light' : ''}`}>
							{btn}
						</button>
					)
				})}
			</div>
			<button
				className={`${theme === 'light' ? 'light btn' : 'btn'}`}
				onClick={testingClick}
				name='next'>
				Next
				<AiOutlineDoubleRight className='icon' />
			</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;
	margin-top: 2rem;

	display: flex;
	gap: 0.2rem;

	justify-content: center;

	.btn-container {
		display: flex;
		gap: 0.2rem;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.icon {
		margin: 0 0.5rem;
		pointer-events: none;
	}

	.active {
		background-color: #cfc3c3;
	}

	.light {
		box-shadow: 0 0 0 0.5px #333;
		display: flex;
		justify-content: center;
		align-items: center;
		color: black !important;
	}
`
export default Pagination
