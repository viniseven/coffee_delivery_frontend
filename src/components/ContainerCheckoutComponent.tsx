import ContainerAddress from "./ContainerAddressComponent"
import ContainerCart from "./ContainerCartComponent"
import ContainerPaymentMethod from "./ContainerPaymentMethod"

function ContainerCheckoutComponent() {
	return (
		<div>
			<h2 className="mb-10">Confirme sua compra</h2>
			<div className="flex max-w-3xl flex-col gap-3">
				<ContainerCart />
				<ContainerAddress />
				<ContainerPaymentMethod />
			</div>
		</div>
	)
}

export default ContainerCheckoutComponent
