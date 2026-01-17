import { ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "./ui/button"

function AddQuantityProduct() {
	return (
		<div className="flex max-w-24 flex-row gap-2">
			<div className="bg-base-button flex items-center rounded-md">
				<Button>
					<Minus className="text-purple" />
				</Button>
				<span>1</span>
				<Button>
					<Plus className="text-purple" />
				</Button>
			</div>
		</div>
	)
}

export default AddQuantityProduct
