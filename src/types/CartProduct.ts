import Product from "./ProductTypes"

export type CartType = Pick<Product, "id" | "name" | "imgUrl" | "priceInCents">

interface CartProduct extends CartType {
	quantity: number
}

export default CartProduct
