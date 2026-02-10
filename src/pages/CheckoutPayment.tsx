import ContainerCheckout from "@/components/ContainerCheckoutComponent"
import Header from "@/components/HeaderComponent"

function CheckoutPayment() {
	return (
		<div className="flex flex-col gap-10">
			<Header />
			<ContainerCheckout />
		</div>
	)
}

export default CheckoutPayment
