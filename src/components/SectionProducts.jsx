import ProductCard from "./ProductCard"

function SectionProducts() {
	return (
		<div>
			<h2 className="mt-20 mb-14">Nossos cafés</h2>
			<div className="grid justify-items-center md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-10">
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
