import ContainerAddress from "./ContainerAddress"
import ContainerCart from "./ContainerCart"

function ContainerCheckout() {
	return (
		<div className="grid gap-8 md:grid-cols-2">
			<ContainerAddress />
			<ContainerCart />
		</div>
	)
}

export default ContainerCheckout
