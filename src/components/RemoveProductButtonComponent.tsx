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
		<Button
			className="bg-base-button flex max-w-24 items-center rounded-md"
			{...props}
			onClick={() => handleRemoveProduct(productId)}
		>
			<Trash2 className="text-purple" />
			<span className="text-base-text">REMOVER</span>
		</Button>
	)
}

export default RemoveProductButtonComponent
