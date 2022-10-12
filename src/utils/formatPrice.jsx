const formatPrice = (price) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price)

	return formatter
}

export default formatPrice
