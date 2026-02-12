import { Plus, Minus } from "lucide-react"
import { Button } from "./ui/button"

function QuantitySelectorComponent({
	addQuantityProduct,
	removeQuantityProduct,
	valueProduct,
}: any) {
	return (
		<div className="flex max-w-24 flex-row gap-2">
			<div className="bg-base-button flex items-center rounded-md">
				<Button onClick={removeQuantityProduct}>
					<Minus className="text-purple" />
				</Button>
				<span>{valueProduct}</span>
				<Button onClick={addQuantityProduct}>
					<Plus className="text-purple" />
				</Button>
			</div>
		</div>
	)
}

export default QuantitySelectorComponent
