import ContainerAddress from "./ContainerAddressComponent"
import ContainerCart from "./ContainerCartComponent"
import ContainerPaymentMethod from "./ContainerPaymentMethod"

function ContainerCheckoutComponent() {
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

export default ContainerCheckoutComponent
