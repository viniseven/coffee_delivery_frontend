import { CartProductWithTotal } from "@/types/CartProduct"
import RemoveProductButtonComponent from "./RemoveProductButtonComponent"
import Separator from "./SeparatorComponent"
import priceCentsConvert from "@/utils/priceCentsConverter"
import { CartContext } from "@/contexts/CartContext"
import { useContext } from "react"

interface ItemCartProps {
	product: CartProductWithTotal
	showRemoveButton?: boolean
	showQuantityProduct?: boolean
	onRemove?: () => void
}

function ItemCartComponent({
	product,
	showRemoveButton,
	showQuantityProduct,
	onRemove,
}: ItemCartProps) {
	const { removeProductToCart } = useContext(CartContext)

	return (
		<div>
			<div className="mt-6 mb-6 flex items-center gap-3">
				<img
					src={product.imgUrl}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-15"
				/>
				<div className="flex-1">
					<p className="text-lg">{product.name}</p>
					<div className="mt-2 flex flex-col gap-3 md:flex-row md:gap-4">
						{showRemoveButton && (
							<RemoveProductButtonComponent
								handleRemoveProduct={removeProductToCart}
								productId={product.id}
							/>
						)}
						<p>
							Quantidade: <span>{product.quantity}</span>
						</p>
					</div>
				</div>
				<p className="text-lg font-bold">
					R$ <span>{priceCentsConvert(product.totalPrice)}</span>
				</p>
			</div>
			<Separator />
		</div>
	)
}

export default ItemCartComponent
