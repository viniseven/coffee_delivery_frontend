import ProductSelected from "./ProductSelected"
import TotalPrice from "./TotalPrice"
import { Button } from "./ui/button"

function ContainerCart() {
	return (
		<div className="w-full">
			<h3>Cafés selecionados</h3>
			<div className="bg-base-card grid gap-9 rounded-md p-1 md:grid-cols-2 lg:p-10">
				<div>
					<ProductSelected />
					<ProductSelected />
					<ProductSelected />
					<ProductSelected />
				</div>

				<div className="flex flex-col">
					<TotalPrice />
					<Button className="bg-yellow font-content items-center p-3 font-bold text-white">
						CONFIRMAR PEDIDO
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ContainerCart
