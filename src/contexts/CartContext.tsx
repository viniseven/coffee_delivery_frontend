import CartProduct from "@/types/CartTypes"
import ProductTypes from "@/types/ProductTypes"
import { createContext, ReactNode, useState } from "react"

interface ICartContext {
	products: CartProduct[]
	addProductToCart: (product: ProductTypes) => void
	removeProductToCart: (prouct: ProductTypes) => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

interface CartProviderProps {
	children: ReactNode
}

function CartContextProvider({ children }: CartProviderProps) {
	const [products, setProducts] = useState<CartProduct[]>([])

	function addProductToCart(product: ProductTypes) {
		setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
	}

	function removeProductToCart(product: ProductTypes) {
		setProducts((products) => products.filter((item) => item.id != product.id))
	}

	return (
		<CartContext.Provider
			value={{ products, addProductToCart, removeProductToCart }}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
