import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"

function BuyButton() {
	return (
		<Button className="bg-purple-dark text-white">
			<ShoppingCart className="fill-white" />
		</Button>
	)
}

export default BuyButton
