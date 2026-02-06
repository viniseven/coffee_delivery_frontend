import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"
import { ComponentProps } from "react"

interface RemoveButtonProps extends ComponentProps<typeof Button> {}

function RemoveProductButtonComponent({ ...props }: RemoveButtonProps) {
	return (
		<Button
			className="bg-base-button flex max-w-24 items-center rounded-md"
			{...props}
		>
			<Trash2 className="text-purple" />
			<span className="text-base-text">REMOVER</span>
		</Button>
	)
}

export default RemoveProductButtonComponent
