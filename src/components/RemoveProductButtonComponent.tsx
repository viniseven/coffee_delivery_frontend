import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"
import { ComponentProps } from "react"

interface RemoveButtonProps extends ComponentProps<typeof Button> {
	productId: string
	handleRemoveProduct: (productId: string) => void
}

function RemoveProductButtonComponent({
	productId,
	handleRemoveProduct,
	...props
}: RemoveButtonProps) {
	return (
		<div>
			<Button
				{...props}
				className="bg-base-button flex items-center rounded-md"
				onClick={() => handleRemoveProduct(productId)}
			>
				<Trash2 className="text-purple" />
				<span className="text-base-text">REMOVER</span>
			</Button>
		</div>
	)
}

export default RemoveProductButtonComponent
