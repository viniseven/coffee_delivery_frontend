import ProductCard from "./ProductCard"

function SectionProducts() {
	return (
		<div>
			<h2 className="mt-20 mb-14">Nossos cafés</h2>
			<div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-3 lg:grid-cols-4">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	)
}

export default SectionProducts
