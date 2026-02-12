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
		<CartContext.Provider value={{ products, addProductToCart }}>
			{children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
