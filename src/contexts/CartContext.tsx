import { CartProduct, CartProductWithTotal } from "@/types/CartProduct"
import { createContext, ReactNode, useMemo, useState } from "react"

interface ICartContext {
	productsCart: CartProductWithTotal[]
	addProductToCart: (product: CartProduct) => void
	removeProductToCart: (productId: string) => void
	productCartTotalPrice: number
}

export const CartContext = createContext<ICartContext>({
	productsCart: [],
	addProductToCart: () => {},
	removeProductToCart: () => {},
	productCartTotalPrice: 0,
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

	const productCartTotalPrice = useMemo(() => {
		return productsCart.map((product) => ({
			...product,
			totalPrice: product.priceInCents * product.quantity,
		}))
	}, [productsCart])

	const totalGeneralPrice = useMemo(() => {
		return productCartTotalPrice.reduce((acc, item) => acc + item.totalPrice, 0)
	}, [productCartTotalPrice])

	return (
		<CartContext.Provider
			value={{
				productsCart: productCartTotalPrice,
				addProductToCart,
				removeProductToCart,
				productCartTotalPrice: totalGeneralPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
export default CartContextProvider
