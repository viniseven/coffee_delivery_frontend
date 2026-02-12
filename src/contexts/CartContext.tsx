import CartProduct from "@/types/CartProduct"
import { createContext, ReactNode, use, useState } from "react"

interface ICartContext {
	productsCart: CartProduct[]
	addProductToCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
	productsCart: [],
	addProductToCart: () => {},
})

interface IProps {
	children?: ReactNode
}

function CartContextProvider({ children }: IProps) {
	const [productsCart, setProducts] = useState<CartProduct[]>([])

	function addProductToCart(product: CartProduct) {
		const productCart: CartProduct = {
			id: product.id,
			name: product.name,
			imgUrl: product.imgUrl,
			priceInCents: product.priceInCents,
			quantity: product.quantity,
		}
		setProducts((prevState) => [...prevState, productCart])
	}

	return (
		<CartContext.Provider value={{ productsCart, addProductToCart }}>
			{children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
