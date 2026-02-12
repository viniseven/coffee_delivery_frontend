import CartProduct from "@/types/CartProduct"
import { createContext, ReactNode, use, useState } from "react"

interface ICartContext {
	products: CartProduct[]
	addProductToCart: (product: CartProduct) => void
}

export const CartContext = createContext<ICartContext>({
	products: [],
	addProductToCart: () => {},
})

interface IProps {
	children?: ReactNode
}

function CartContextProvider({ children }: IProps) {
	const [products, setProducts] = useState<CartProduct[]>([])

	console.log(products)

	function addProductToCart(product: CartProduct) {
		setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
	}

	return (
		<CartContext.Provider value={{ products, addProductToCart }}>
			{children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
