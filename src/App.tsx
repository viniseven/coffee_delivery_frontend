import CheckoutPayment from "./pages/CheckoutPayment"
import Home from "./pages/Home"
import OrderConfirmation from "./pages/OrderConfirmation"
import { Routes, Route } from "react-router-dom"

function App() {
	return (
		<main className="mb-40">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/checkoutpayment" element={<CheckoutPayment />} />
				<Route path="/orderconfirmation" element={<OrderConfirmation />} />
			</Routes>
		</main>
	)
}

export default App
