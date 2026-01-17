import ProductSelected from "./ProductSelected"
import TotalPrice from "./TotalPrice"
import { Button } from "./ui/button"

function ContainerCart() {
	return (
		<div>
			<h3>Cafés selecionados</h3>
			<div className="bg-base-card flex flex-col gap-6 rounded-md p-1 lg:p-10">
				<ProductSelected />
				<ProductSelected />
				<ProductSelected />
				<ProductSelected />
				<TotalPrice />
				<Button className="bg-yellow font-content items-center p-3 font-bold text-white">
					CONFIRMAR PEDIDO
				</Button>
			</div>
		</div>
	)
}

export default ContainerCart
