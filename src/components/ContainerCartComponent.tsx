import { PackageSearch } from "lucide-react"
import ItemCartComponent from "./ItemCartComponent"
import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext"

function ContainerCartComponent() {
	const { productsCart } = useContext(CartContext)

	return (
		<div className="bg-base-card w-full rounded-md p-10">
			<div className="text-base-text flex gap-5">
				<PackageSearch className="text-green" />
				<div>
					<p>Resumo do pedido</p>
					<p className="text-sm">Produtos selecionados para compra</p>
				</div>
			</div>
			<div className="grid gap-9 rounded-md md:grid-cols-2">
				<div>
					{productsCart.map((data) => (
						<ItemCartComponent product={data} />
					))}
				</div>
			</div>
		</div>
	)
}

export default ContainerCartComponent
