import { Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { Button } from "./ui/button"
import { ShoppingCart, User } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "./ui/dropdown-menu"
import ItemCartComponent from "./ItemCartComponent"
import TotalPrice from "./TotalPriceComponent"

function HeaderComponent() {
	const { productsCart } = useContext(CartContext)

	return (
		<div className="flex w-full justify-between py-8">
			<Link to="/">
				<img src={Logo} alt="Logo" className="w-20" />
			</Link>

			<div className="flex gap-3">
				<Button className="bg-purple-light">
					<User className="text-purple fill-purple" />
					<p className="text-purple">Marcus Vinícius</p>
				</Button>

				<DropdownMenu modal={false}>
					<DropdownMenuTrigger>
						<Button className="bg-yellow-light relative">
							<div className="bg-yellow-dark absolute bottom-5 left-9 flex h-4 w-4 items-center justify-center rounded-full p-0.5">
								<span className="font-semibold text-white">
									{productsCart.length}
								</span>
							</div>
							<ShoppingCart className="text-yellow-dark fill-yellow-dark" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="bg-base-card px-2">
						{productsCart.map((data) => (
							<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
								<ItemCartComponent product={data} />
							</DropdownMenuItem>
						))}
						<TotalPrice />
						<Link to="/checkoutpayment">
							<Button className="bg-yellow font-content w-full items-center p-3 font-bold text-white">
								CONFIRMAR PEDIDO
							</Button>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}

export default HeaderComponent
