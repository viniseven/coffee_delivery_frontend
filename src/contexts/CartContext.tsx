import CartProduct from "@/types/CartProduct"
import ProductTypes from "@/types/ProductTypes"
import { createContext, ReactNode, useState } from "react"

//Interface do meu contexto do carrinho. Recebendo no atributo products, a interface do meu cartProducts, tenho além dos atributos de produto, também quantidade
interface ICartContext {
	products: CartProduct[]
	addProductToCart: (product: ProductTypes, quantity: number) => void
	removeProductCart: (productId: string) => void
	addQuantityProductCart: (productId: string) => void
	removeQuantityProductCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

interface CartProviderProps {
	children: ReactNode
}

function CartContextProvider({ children }: CartProviderProps) {
	const [products, setProducts] = useState<CartProduct[]>([])

	function addProductToCart(product: ProductTypes, quantity: number) {
		setProducts((prevState) => [...prevState, { ...product, quantity }])
	}

	function removeProductCart(productId: string) {
		setProducts((products) => products.filter((item) => item.id != productId))
	}

	function addQuantityProductCart(productId: string) {
		setProducts((productsState) =>
			productsState.map((productState) =>
				productState.id == productId
					? { ...productState, quantity: productState.quantity + 1 }
					: productState
			)
		)
	}

	function removeQuantityProductCart(productId: string) {
		setProducts((productsState) =>
			productsState.map((productState) =>
				productState.id == productId
					? {
							...productState,
							quantity:
								productState.quantity > 1 ? productState.quantity - 1 : 1,
						}
					: productState
			)
		)
	}
	return (
		<CartContext.Provider
			value={{
				products,
				addProductToCart,
				removeProductCart,
				addQuantityProductCart,
				removeQuantityProductCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
