import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import QuantityProduct from "./QuantityProduct"
import BuyButton from "./BuyButton"
import CoffeeCardProps from "@/types/CoffeeProductProps"
import LabelProduct from "./LabelProduct"
import priceCentsConvert from "@/utils/priceCentsConverter"
import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext"

function ProductCard({ coffee }: CoffeeCardProps) {
	const { addProductToCart } = useContext(CartContext)

	function handleAddProductToCart() {
		addProductToCart(coffee)
	}

	const price = (coffee.priceInCents / 100).toLocaleString("pt-BR", {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
		style: "decimal",
		currency: "BRL",
	})

	return (
		<Card className="bg-base-card flex w-3xs flex-col items-center rounded-tr-[36px] rounded-bl-[36px] border-none px-2 text-center">
			<CardHeader className="flex flex-col items-center">
				<img
					src={coffee.imgUrl}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-30"
				/>
				<div className="flex gap-1">
					{coffee.label.map((dataLabel) => (
						<LabelProduct label={dataLabel} />
					))}
				</div>
			</CardHeader>
			<CardTitle>
				<h3>{coffee.name}</h3>
			</CardTitle>
			<CardDescription className="mb-8">
				<p className="text-gray-light mt-2">{coffee.description}</p>
			</CardDescription>
			<CardFooter className="gap-3">
				<p className="text-base">
					R$
					<span className="ml-1 text-2xl font-bold">
						{priceCentsConvert(coffee.priceInCents)}
					</span>
				</p>
				<QuantityProduct />
				<BuyButton onClick={handleAddProductToCart} />
			</CardFooter>
		</Card>
	)
}

export default ProductCard
