import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"

function RemoveProductButton() {
	return (
		<Button className="bg-base-button flex max-w-24 items-center rounded-md">
			<Trash2 className="text-purple" />
			<span className="text-base-text">REMOVER</span>
		</Button>
	)
}

export default RemoveProductButton
