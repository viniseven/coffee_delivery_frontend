import AddQuantityProduct from "./QuantityProduct"
import RemoveProductButton from "./RemoveProductButton"
import Separator from "./Separator"
import priceCentsConvert from "@/utils/priceCentsConverter"
import CoffeeCardProps from "@/types/CoffeeProductProps"
import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext"

function CartItem({ coffee }: CoffeeCardProps) {
	const { removeProductToCart } = useContext(CartContext)

	function handleRemoveProductToCart() {
		removeProductToCart(coffee)
	}

	return (
		<div>
			<div className="mt-6 mb-6 flex items-center gap-5">
				<img
					src={coffee.imgUrl}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-20"
				/>
				<div className="grow">
					<p className="text-lg">{coffee.name}</p>
					<div className="mt-2 flex flex-col gap-1 md:flex-row md:gap-4">
						<AddQuantityProduct />
						<RemoveProductButton onClick={handleRemoveProductToCart} />
					</div>
				</div>
				<p className="font-bold lg:text-2xl">
					R$ <span>{priceCentsConvert(coffee.priceInCents)}</span>
				</p>
			</div>
			<Separator />
		</div>
	)
}

export default CartItem
