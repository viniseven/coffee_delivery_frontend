import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import QuantityProduct from "./QuantitySelectorComponent"
import BuyButton from "./BuyButtonComponent"
import ProductTypes from "@/types/ProductTypes"
import priceCentsConvert from "@/utils/priceCentsConverter"
import { useState } from "react"

interface ProductCardProps {
	data: ProductTypes
}

function ProductCardComponent({ data }: ProductCardProps) {
	const [quantityProduct, setQuantityProduct] = useState(1)

	function handleIncrementQuantity() {
		if (quantityProduct <= 19) {
			setQuantityProduct(quantityProduct + 1)
		}
	}

	function handleDecrementQuantity() {
		if (quantityProduct > 1) {
			setQuantityProduct(quantityProduct - 1)
		}
	}

	return (
		<Card className="bg-base-card flex w-3xs flex-col items-center rounded-tr-[36px] rounded-bl-[36px] border-none px-2 text-center">
			<CardHeader className="flex flex-col items-center">
				<img
					src={data.imgUrl}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-30"
				/>
				<div className="flex gap-1">
					{data.label.map((label) => (
						<p className="bg-yellow-light text-yellow-dark rounded-2xl px-1 text-xs">
							{label}
						</p>
					))}
				</div>
			</CardHeader>
			<CardTitle>
				<h3>{data.name}</h3>
			</CardTitle>
			<CardDescription className="mb-8">
				<p className="text-gray-light mt-2">{data.description}</p>
			</CardDescription>
			<CardFooter className="gap-3">
				<p className="text-base">
					R$
					<span className="ml-1 text-2xl font-bold">
						{priceCentsConvert(data.priceInCents)}
					</span>
				</p>
				<QuantityProduct
					addQuantityProduct={handleIncrementQuantity}
					removeQuantityProduct={handleDecrementQuantity}
					valueProduct={quantityProduct}
				/>
				<BuyButton />
			</CardFooter>
		</Card>
	)
}

export default ProductCardComponent
