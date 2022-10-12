import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getCryptoData } from '../features/cryptoSlice'
import formatPrice from '../utils/formatPrice'
import Pagination from './Pagination'

const SingleCrypto = () => {
	const { cryptos, SingleCrypto } = useSelector((store) => store.crypto)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCryptoData())
	}, [SingleCrypto])

	return (
		<Wrapper>
			<div className='header-center'>
				<h3>#</h3>
				<h3></h3>
				<h3>Coin</h3>
				<h3>Price</h3>
				<h3>24h</h3>
				<h3 className='market-cap'>Market Cap</h3>
			</div>
			{cryptos.map((item, index) => {
				const {
					id,
					symbol,
					name,
					image,
					current_price: price,
					market_cap: marketCap,
					market_cap_rank: marketCapRank,
					total_volume: totalVolume,
					price_change_percentage_24h: price24Change,
				} = item

				return (
					<div
						className='coin-container'
						key={id}>
						<div className='coin-center'>
							<p>{marketCapRank}</p>
							<img
								src={image}
								alt=''
							/>
							<h4>{name}</h4>
							<p>${price}</p>
							<p style={{ color: `${price24Change > 0 ? 'green' : 'red'}` }}>{price24Change}%</p>
							<p className='market-cap'>{formatPrice(marketCap)}</p>
						</div>
					</div>
				)
			})}
			<Pagination />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 80%;
	height: 80%;

	.coin-container {
		padding: 1rem;
		box-shadow: 0px 1px 0 #61606069;
		margin-top: 0.2rem;
		transition: all 0.3s;
	}

	.coin-center {
		display: grid;
		grid-template-columns: auto auto 1fr 1fr 1fr 1fr;
		column-gap: 3rem;
		align-items: center;
		margin-top: 0.2rem;
	}

	.header-center {
		display: grid;
		grid-template-columns: auto 2rem 1fr 1fr 1fr 1fr;
		column-gap: 3rem;
		align-items: center;
		padding: 1rem;
	}
	img {
		width: 30px;
	}

	@media (max-width: 860px) {
		.coin-center {
			grid-template-columns: auto auto 1fr 1fr 1fr;
		}
		.market-cap {
			display: none;
		}

		.header-center {
			grid-template-columns: auto 2rem 1fr 1fr 1fr;
		}
	}

	@media (max-width: 600px) {
		.coin-center {
			column-gap: 1rem;
		}
		.header-center {
			column-gap: 1rem;
		}
	}
`
export default SingleCrypto
