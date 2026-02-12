import CartProduct from "@/types/CartProduct"
import { createContext, ReactNode, use, useState } from "react"

interface ICartContext {
	products: CartProduct[]
}

const CartContext = createContext<ICartContext>({
	products: [],
})

interface IProps {
	children?: ReactNode
}

function CartContextProvider({ children }: IProps) {
	const [products, setProducts] = useState<CartProduct[]>([])

	return (
		<CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
	)
}
export default CartContextProvider
