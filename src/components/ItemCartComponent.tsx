import QuantityProduct from "./QuantityProduct"
import RemoveProductButtonComponent from "./RemoveProductButtonComponent"
import Separator from "./Separator"

function ItemCartComponent() {
	return (
		<div>
			<div className="mt-6 mb-6 flex items-center gap-5">
				<img
					src=""
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-20"
				/>
				<div className="grow">
					<p className="text-lg">""</p>
					<div className="mt-2 flex flex-col gap-1 md:flex-row md:gap-4">
						<QuantityProduct {}/>
						<RemoveProductButtonComponent />
					</div>
				</div>
				<p className="font-bold lg:text-2xl">
					R${" "}
					<span>
						{}
					</span>
				</p>
			</div>
			<Separator />
		</div>
	)
}

export default ItemCartComponent
