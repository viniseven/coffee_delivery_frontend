import Product from "./ProductTypes"

//Interface de CartProduct, recebe dados de produto, e adiciona o atributo quantity em cada produto
interface CartProduct extends Product {
	quantity: number
}

export default CartProduct
