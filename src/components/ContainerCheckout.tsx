import ContainerAddress from "./ContainerAddress"
import ContainerCart from "./ContainerCart"
import ContainerPaymentMethod from "./ContainerPaymentMethod"

function ContainerCheckout() {
	return (
		<div>
			<h3>Complete seu pedido</h3>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<ContainerAddress />
				<ContainerPaymentMethod />
				<div className="md:col-span-2">
					<ContainerCart />
				</div>
			</div>
		</div>
	)
}

export default ContainerCheckout
