import { Plus, Minus } from "lucide-react"
import { Button } from "./ui/button"

interface QuantityProductProps {
	quantity: number
	handleAddQuantityProduct: () => void
	handleRemoveQuantityProduct: () => void
}
function QuantityProduct({
	quantity,
	handleAddQuantityProduct,
	handleRemoveQuantityProduct,
}: QuantityProductProps) {
	return (
		<div className="flex max-w-24 flex-row gap-2">
			<div className="bg-base-button flex items-center rounded-md">
				<Button onClick={handleRemoveQuantityProduct}>
					<Minus className="text-purple" />
				</Button>
				<span>{quantity}</span>
				<Button onClick={handleAddQuantityProduct}>
					<Plus className="text-purple" />
				</Button>
			</div>
		</div>
	)
}

export default QuantityProduct
