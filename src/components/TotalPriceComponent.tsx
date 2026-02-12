import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext"
import priceCentsConvert from "@/utils/priceCentsConverter"

function TotalPrice() {
	const { productCartTotalPrice } = useContext(CartContext)

	const freightValue = 350

	return (
		<div className="text-base-text font-content flex flex-col gap-3">
			<div className="flex justify-between">
				<span className="text-sm">Total de itens</span>
				<span>{priceCentsConvert(productCartTotalPrice)}</span>
			</div>
			<div className="flex justify-between">
				<span className="text-sm">Entrega</span>
				<span>{priceCentsConvert(freightValue)}</span>
			</div>
			<div className="flex justify-between text-xl font-bold">
				<span>Total</span>
				<span>
					{productCartTotalPrice > 0
						? priceCentsConvert(productCartTotalPrice + freightValue)
						: priceCentsConvert(0)}
				</span>
			</div>
		</div>
	)
}

export default TotalPrice
