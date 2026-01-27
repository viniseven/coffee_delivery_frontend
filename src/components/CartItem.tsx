import QuantityProduct from "./QuantityProduct"
import RemoveProductButton from "./RemoveProductButton"
import Separator from "./Separator"
import priceCentsConvert from "@/utils/priceCentsConverter"
import ProductCardProps from "@/types/ProductCardProps"
import { CartContext } from "@/contexts/CartContext"
import { useContext } from "react"

function CartItem({ product }: ProductCardProps) {
	const {
		removeProductCart,
		addQuantityProductCart,
		removeQuantityProductCart,
	} = useContext(CartContext)

	function handleRemoveProductCart() {
		removeProductCart(product.id)
	}

	return (
		<div>
			<div className="mt-6 mb-6 flex items-center gap-5">
				<img
					src={product.imgUrl}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-20"
				/>
				<div className="grow">
					<p className="text-lg">{product.name}</p>
					<div className="mt-2 flex flex-col gap-1 md:flex-row md:gap-4">
						<QuantityProduct
							quantity={product.quantity}
							handleAddQuantityProduct={() =>
								addQuantityProductCart(product.id)
							}
							handleRemoveQuantityProduct={() =>
								removeQuantityProductCart(product.id)
							}
						/>
						<RemoveProductButton onClick={handleRemoveProductCart} />
					</div>
				</div>
				<p className="font-bold lg:text-2xl">
					R$ <span>{priceCentsConvert(product.priceInCents)}</span>
				</p>
			</div>
			<Separator />
		</div>
	)
}

export default CartItem
