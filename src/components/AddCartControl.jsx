import { ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "./ui/button"

function AddCartControl() {
	return (
		<div className="flex flex-row gap-2">
			<div className="flex items-center bg-base-button rounded-md">
				<Button>
					<Minus className="text-purple" />
				</Button>
				<span>1</span>
				<Button>
					<Plus className="text-purple" />
				</Button>
			</div>
			<Button className="bg-purple-dark">
				<ShoppingCart className="fill-white text-white" />
			</Button>
		</div>
	)
}

export default AddCartControl
