import Product from "./ProductTypes"

interface CartProduct extends Product {
	quantity: number
}

export default CartProduct
