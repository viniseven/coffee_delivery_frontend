import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import QuantityProduct from "./QuantityProduct"
import BuyButton from "./BuyButtonComponent"

function ProductCardComponent() {
	return (
		<Card className="bg-base-card flex w-3xs flex-col items-center rounded-tr-[36px] rounded-bl-[36px] border-none px-2 text-center">
			<CardHeader className="flex flex-col items-center">
				<img
					src={}
					alt="Imagem de uma xícara com café tradicional, visto de cima"
					className="size-auto w-30"
				/>
				<div className="flex gap-1"></div>
			</CardHeader>
			<CardTitle>
				<h3>{}</h3>
			</CardTitle>
			<CardDescription className="mb-8">
				<p className="text-gray-light mt-2">{}</p>
			</CardDescription>
			<CardFooter className="gap-3">
				<p className="text-base">
					R$
					<span className="ml-1 text-2xl font-bold"></span>
				</p>
				<QuantityProduct />
				<BuyButton />
			</CardFooter>
		</Card>
	)
}

export default ProductCardComponent
