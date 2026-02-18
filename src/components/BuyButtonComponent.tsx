import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { ComponentProps } from "react"
import { CartProduct } from "@/types/CartProduct"

interface BuyButtonProps extends ComponentProps<typeof Button> {
	product: CartProduct
	handleBuyProduct: (product: CartProduct) => void
}

function BuyButtonComponent({
	product,
	handleBuyProduct,
	...props
}: BuyButtonProps) {
	return (
		<Button
			className="bg-purple-dark text-white"
			{...props}
			onClick={() => handleBuyProduct(product)}
		>
			<ShoppingCart className="fill-white" />
		</Button>
	)
}

export default BuyButtonComponent
