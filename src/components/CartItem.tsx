import Coffee from "../assets/Coffee.svg"
import AddQuantityProduct from "./QuantityProduct"
import BuyButton from "./BuyButton"
import RemoveProductButton from "./RemoveProductButton"
import Separator from "./Separator"

function CartItem() {
	return (
		<div>
			<div className="mt-6 mb-6 flex items-center gap-5">
				<img
					src={Coffee}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-20"
				/>
				<div className="grow">
					<p className="text-lg">Expresso Tradicional</p>
					<div className="mt-2 flex flex-col gap-1 md:flex-row md:gap-4">
						<AddQuantityProduct />
						<RemoveProductButton />
					</div>
				</div>
				<p className="font-bold lg:text-2xl">
					R$ <span>9,90</span>
				</p>
			</div>
			<Separator />
		</div>
	)
}

export default CartItem
