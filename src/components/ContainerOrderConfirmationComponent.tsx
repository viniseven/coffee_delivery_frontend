import { Avatar, AvatarFallback } from "./ui/avatar"
import { MapPin, AlarmClock, DollarSign } from "lucide-react"
import delivery from "../assets/delivery.svg"

function ContainerOrderConfirmationComponent() {
	return (
		<div>
			<h2 className="text-yellow-dark">Uhu! Pedido confirmado</h2>
			<p>Agora é só aguardar que logo o café chegará até você</p>

			<div className="mt-10 grid w-full items-center justify-between md:grid-cols-2">
				<img
					src={delivery}
					alt="Entregador em uma moto roxa, indo a caminho de uma entrega de encomenda"
					className="md:order-2"
				/>

				<div className="flex flex-col gap-1.5 p-5 md:order-1 md:gap-8 md:p-10">
					<div className="flex items-center gap-1.5">
						<Avatar>
							<AvatarFallback className="bg-purple">
								<MapPin size={16} className="text-white" />
							</AvatarFallback>
						</Avatar>
						<div>
							<p>
								Entrega em{" "}
								<span className="font-semibold">
									Rua João Daniel Martinelli, 102
								</span>
							</p>
							<p>Farrapos - Porto Alegre, RS</p>
						</div>
					</div>

					<div className="flex items-center gap-1.5">
						<Avatar>
							<AvatarFallback className="bg-yellow">
								<AlarmClock size={16} className="text-white" />
							</AvatarFallback>
						</Avatar>
						<div>
							<p>Previsão de entrega</p>
							<p className="font-semibold">20 - 30 min</p>
						</div>
					</div>

					<div className="flex items-center gap-1.5">
						<Avatar>
							<AvatarFallback className="bg-yellow-dark">
								<DollarSign size={16} className="text-white" />
							</AvatarFallback>
						</Avatar>
						<div>
							<p>Pagamento da entrega</p>
							<p className="font-semibold">Cartão de Crédito</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContainerOrderConfirmationComponent
