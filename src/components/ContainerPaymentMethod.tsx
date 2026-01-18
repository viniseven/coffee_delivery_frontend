import { DollarSign, CreditCard, Banknote, HandCoins } from "lucide-react"
import { Button } from "./ui/button"

function ContainerPaymentMethod() {
	return (
		<div className="bg-base-card font-content flex h-fit flex-col gap-5 rounded-md p-1">
			<div className="text-base-text flex items-center gap-2">
				<DollarSign className="text-purple" />
				<div>
					<p>Pagamento</p>
					<p className="text-sm">
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</p>
				</div>
			</div>
			<div className="text-base-text flex flex-col gap-3 p-2.5">
				<Button className="bg-base-button p-4 font-normal">
					<CreditCard className="text-purple" />
					CARTÃO DE CRÉDITO/DÉBITO
				</Button>
				<Button className="bg-base-button p-4 font-normal">
					<HandCoins className="text-purple" />
					PIX
				</Button>
				<Button className="bg-base-button p-4 font-normal">
					<Banknote className="text-purple" />
					DINHEIRO
				</Button>
			</div>
		</div>
	)
}

export default ContainerPaymentMethod
