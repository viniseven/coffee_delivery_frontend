import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
} from "@/components/ui/card"
import Coffee from "../assets/Coffee.svg"
import AddQuantityProduct from "./AddQuantityProduct"
import BuyButton from "./BuyButton"

function ProductCard() {
	return (
		<>
			<Card className="bg-base-card flex w-3xs flex-col items-center rounded-tr-[36px] rounded-bl-[36px] border-none px-2 text-center">
				<CardHeader>
					<img
						src={Coffee}
						alt="Imagem de uma xícara com café tradicional, visto de cima"
						className="size-auto w-30"
					/>
				</CardHeader>
				<CardDescription className="mb-8">
					<h3>Expresso Tradicional</h3>
					<p className="text-gray-light mt-2">
						O tradicional café feito com água quente e grãos moídos
					</p>
				</CardDescription>
				<CardFooter className="gap-3">
					<p className="text-base">
						R$<span className="ml-1 text-2xl font-bold">9,90</span>
					</p>
					<AddQuantityProduct />
					<BuyButton />
				</CardFooter>
			</Card>
		</>
	)
}

export default ProductCard
