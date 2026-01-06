import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
} from "@/components/ui/card"
import Coffee from "../assets/Coffee.svg"
import AddCartControl from "./AddCartControl"

function ProductCard() {
	return (
		<>
			<Card className="w-3xs flex flex-col items-center border-none bg-base-card text-center px-2 rounded-tr-[36px] rounded-bl-[36px]">
				<CardHeader>
					<img
						src={Coffee}
						alt="Imagem de uma xícara com café tradicional, visto de cima"
						className="w-30 size-auto "
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
						R$<span className="font-bold text-2xl ml-1">9,90</span>
					</p>
					<AddCartControl />
				</CardFooter>
			</Card>
		</>
	)
}

export default ProductCard
