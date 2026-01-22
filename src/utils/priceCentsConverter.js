function priceCentsConvert(priceProduct) {
	const price = (priceProduct / 100).toLocaleString("pt-BR", {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
		style: "decimal",
		currency: "BRL",
	})
	return price
}

export default priceCentsConvert
