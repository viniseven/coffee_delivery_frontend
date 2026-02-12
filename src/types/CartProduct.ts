import Product from "./ProductTypes"

type CartType = Pick<Product, "id" | "imgUrl" | "priceInCents">

interface CartProduct extends CartType {
	quantity: number
}

export default CartProduct
