import ProductCardComponent from "./ProductCardComponent"
import { PRODUCTS } from "@/mocks/products"

function SectionProductsPageComponent() {
	return (
		<div>
			<h2 className="mt-20 mb-14">Nossos cafés</h2>
			<div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
				{PRODUCTS.map((product) => (
					<ProductCardComponent key={product.id} data={product} />
				))}
			</div>
		</div>
	)
}

export default SectionProductsPageComponent
