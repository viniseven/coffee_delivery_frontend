import { Plus, Minus } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

function QuantityProduct() {
	const [quantity, setQuantity] = useState(1)

	function handleAddQuantity() {
		setQuantity((prevState) => prevState + 1)
	}

	function handleRemoveQuantity() {
		setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1))
	}

	return (
		<div className="flex max-w-24 flex-row gap-2">
			<div className="bg-base-button flex items-center rounded-md">
				<Button onClick={handleRemoveQuantity}>
					<Minus className="text-purple" />
				</Button>
				<span>{quantity}</span>
				<Button onClick={handleAddQuantity}>
					<Plus className="text-purple" />
				</Button>
			</div>
		</div>
	)
}

export default QuantityProduct
