import CartItem from "./CartItem"
import TotalPrice from "./TotalPrice"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

function ContainerCart() {
	return (
		<div className="w-full">
			<h3>Cafés selecionados</h3>
			<div className="bg-base-card grid gap-9 rounded-md p-1 md:grid-cols-2 lg:p-10">
				<div>
					<CartItem />
				</div>

				<div className="flex flex-col">
					<TotalPrice />
					<Link to="/orderconfirmation">
						<Button className="bg-yellow font-content w-full items-center p-3 font-bold text-white">
							CONFIRMAR PEDIDO
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ContainerCart
