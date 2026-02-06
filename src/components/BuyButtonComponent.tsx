import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { ComponentProps } from "react"

interface BuyButtonProps extends ComponentProps<typeof Button> {}

function BuyButtonComponent({ ...props }: BuyButtonProps) {
	return (
		<Button className="bg-purple-dark text-white" {...props}>
			<ShoppingCart className="fill-white" />
		</Button>
	)
}

export default BuyButtonComponent
