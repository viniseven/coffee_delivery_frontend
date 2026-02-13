import { CartProductWithTotal } from "@/types/CartProduct"
import RemoveProductButtonComponent from "./RemoveProductButtonComponent"
import Separator from "./SeparatorComponent"
import priceCentsConvert from "@/utils/priceCentsConverter"
import { CartContext } from "@/contexts/CartContext"
import { useContext } from "react"

function ItemCartComponent({ product }: { product: CartProductWithTotal }) {
	const { removeProductToCart } = useContext(CartContext)

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
						<RemoveProductButtonComponent
							handleRemoveProduct={removeProductToCart}
							productId={product.id}
						/>
					</div>
				</div>
				<p className="font-bold lg:text-2xl">
					R$ <span>{priceCentsConvert(product.totalPrice)}</span>
				</p>
			</div>
			<Separator />
		</div>
	)
}

export default ItemCartComponent
