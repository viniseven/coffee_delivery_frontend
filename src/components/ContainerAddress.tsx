import { MapPin } from "lucide-react"
import FormAddress from "./FormAddress"

function ContainerAddress() {
	return (
		<div>
			<h3>Complete seu pedido</h3>
			<div className="bg-base-card rounded-md p-10">
				<div className="flex flex-col gap-6">
					<div className="text-base-text flex gap-5">
						<MapPin className="text-yellow-dark" />
						<div>
							<p>Endereço de Entrega</p>
							<p className="text-sm">
								Informe o endereço onde deseja receber seu pedido
							</p>
						</div>
					</div>
					<FormAddress />
				</div>
			</div>
		</div>
	)
}

export default ContainerAddress
