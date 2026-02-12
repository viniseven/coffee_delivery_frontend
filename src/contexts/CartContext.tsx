import CartProduct from "@/types/CartProduct"
import { createContext, ReactNode, use, useState } from "react"

interface ICartContext {
	productsCart: CartProduct[]
	addProductToCart: (product: CartProduct) => void
	removeProductToCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
	productsCart: [],
	addProductToCart: () => {},
	removeProductToCart: () => {},
})

interface IProps {
	children?: ReactNode
}

function CartContextProvider({ children }: IProps) {
	const [productsCart, setProductsCart] = useState<CartProduct[]>([])

	function addProductToCart(product: CartProduct) {
		const productCart: CartProduct = {
			id: product.id,
			name: product.name,
			imgUrl: product.imgUrl,
			priceInCents: product.priceInCents,
			quantity: product.quantity,
		}
		setProductsCart((prevState) => [...prevState, productCart])
	}

	function removeProductToCart(productId: string) {
		const remainingProducts = productsCart.filter(
			(product) => product.id != productId
		)

		setProductsCart(remainingProducts)
	}

	return (
		<CartContext.Provider
			value={{ productsCart, addProductToCart, removeProductToCart }}
		>
			{children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
