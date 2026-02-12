import Product from "./ProductTypes"

export type CartType = Pick<Product, "id" | "name" | "imgUrl" | "priceInCents">

export interface CartProduct extends CartType {
	quantity: number
}

export interface CartProductWithTotal extends CartProduct {
	totalPrice: number
}
