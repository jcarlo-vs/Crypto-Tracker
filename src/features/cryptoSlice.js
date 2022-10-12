import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import customFetch from '../utils/axios'
import { useState } from 'react'
const initialState = {
	cryptos: [],
	filterCryptos: [],
	singleCrypto: '',
	isLoading: true,
	theme: 'light',
	page: 1,
}

export const getCryptoData = createAsyncThunk('crypto/getCryptoData', async (page, thunkAPI) => {
	try {
		const resp = await customFetch.get(
			`?vs_currency=usd&order=market_cap_desc&per_page=100&page=${thunkAPI.getState().crypto.page}&sparkline=false`
		)

		return resp.data
	} catch (error) {
		console.log(error)
		return thunkAPI.rejectWithValue('ERROR FETCHING DATA')
	}
})

export const paginateCryptoData = createAsyncThunk('crypto/paginateCryptoData', async (page, thunkAPI) => {
	try {
		const resp = await customFetch.get(
			`?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
		)

		return resp.data
	} catch (error) {
		console.log(error)
		return thunkAPI.rejectWithValue('ERROR FETCHING DATA')
	}
})

const cryptoSlice = createSlice({
	name: 'crypto',
	initialState,
	reducers: {
		inputChange: (state, { payload }) => {
			state.singleCrypto = payload
		},

		filterData: (state) => {
			const search = state.singleCrypto

			if (search) {
				const newCrypto = state.filterCryptos.filter((crypto) => {
					return crypto.name.toLowerCase().includes(search.toLowerCase())
				})

				return { ...state, cryptos: newCrypto }
			}
			state.cryptos = state.filterCryptos
		},
		changePage: (state, { payload }) => {
			console.log(payload)
			if (payload === 'next') {
				if (state.page >= 10) {
					state.page = 1
					return
				}
				state.page = state.page + 1
				console.log(state.page)
				return
			}

			if (payload === 'prev') {
				if (state.page <= 1) {
					state.page = 10
					return
				}
				state.page = state.page - 1
				console.log(state.page)
				return
			}

			state.page = payload
		},
		themeChanger: (state, { payload }) => {
			state.theme = payload
		},
	},
	extraReducers: {
		[getCryptoData.pending]: (state) => {
			state.isLoading = true
		},
		[getCryptoData.fulfilled]: (state, { payload }) => {
			state.cryptos = payload
			state.filterCryptos = payload
			state.isLoading = false
		},
		[getCryptoData.rejected]: (state) => {
			state.isLoading = false
		},

		// ------------- paginate -------------
		[paginateCryptoData.fulfilled]: (state, { payload }) => {
			state.cryptos = payload
			state.filterCryptos = payload
		},
	},
})
export const { filterData, inputChange, changePage, themeChanger } = cryptoSlice.actions
export default cryptoSlice.reducer
