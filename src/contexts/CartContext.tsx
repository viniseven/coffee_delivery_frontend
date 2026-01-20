import CartProduct from "@/types/CartTypes"
import { createContext, FunctionComponent, ReactNode, useState } from "react"

interface CartProviderProps {
	children: ReactNode
}

interface ICartContext {
	products: CartProduct[]
}

const CartContext = createContext<ICartContext>({
	products: [],
})

const CartContextProvider: FunctionComponent<CartProviderProps> = ({
	children,
}) => {
	const [products, setProducts] = useState<CartProduct[]>([])

	return (
		<CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
	)
}

export default CartContextProvider
