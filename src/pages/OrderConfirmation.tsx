import ContainerOrderConfirmation from "@/components/ContainerOrderConfirmation"
import Header from "@/components/HeaderComponent"

function OrderConfirmation() {
	return (
		<div className="flex flex-col gap-10">
			<Header />
			<ContainerOrderConfirmation />
		</div>
	)
}

export default OrderConfirmation
