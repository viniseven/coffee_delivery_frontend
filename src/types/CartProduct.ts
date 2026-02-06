import Product from "./ProductTypes"

type CartProduct = Pick<Product, "id" | "imgUrl" | "priceInCents">

export default CartProduct
