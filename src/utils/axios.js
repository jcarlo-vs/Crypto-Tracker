import axios from 'axios'

const url = 'https://api.coingecko.com/api/v3/coins/markets'

const customFetch = axios.create({
	baseURL: url,
})

export default customFetch
