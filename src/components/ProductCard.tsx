import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import QuantityProduct from "./QuantityProduct"
import BuyButton from "./BuyButton"
import ProductCardProps from "@/types/ProductCardProps"
import LabelProduct from "./LabelProduct"
import priceCentsConvert from "@/utils/priceCentsConverter"
import { useContext, useState } from "react"
import { CartContext } from "@/contexts/CartContext"

function ProductCard({ product }: ProductCardProps) {
	const { addProductToCart } = useContext(CartContext)
	const [quantity, setQuantity] = useState(1)

	function handleAddProductToCart() {
		addProductToCart(product, quantity)
	}

	return (
		<Card className="bg-base-card flex w-3xs flex-col items-center rounded-tr-[36px] rounded-bl-[36px] border-none px-2 text-center">
			<CardHeader className="flex flex-col items-center">
				<img
					src={product.imgUrl}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-30"
				/>
				<div className="flex gap-1">
					{product.label.map((dataLabel) => (
						<LabelProduct label={dataLabel} key={product.id} />
					))}
				</div>
			</CardHeader>
			<CardTitle>
				<h3>{product.name}</h3>
			</CardTitle>
			<CardDescription className="mb-8">
				<p className="text-gray-light mt-2">{product.description}</p>
			</CardDescription>
			<CardFooter className="gap-3">
				<p className="text-base">
					R$
					<span className="ml-1 text-2xl font-bold">
						{priceCentsConvert(product.priceInCents)}
					</span>
				</p>
				<QuantityProduct
					quantity={quantity}
					handleAddQuantityProduct={() =>
						setQuantity((prevState) => prevState + 1)
					}
					handleRemoveQuantityProduct={() =>
						setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1))
					}
				/>
				<BuyButton onClick={handleAddProductToCart} />
			</CardFooter>
		</Card>
	)
}

export default ProductCard
