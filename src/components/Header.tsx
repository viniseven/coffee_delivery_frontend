import { Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { Button } from "./ui/button"
import { ShoppingCart, User } from "lucide-react"

function Header() {
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
				<Link to="/checkoutpayment" className="">
					<Button className="bg-yellow-light relative">
						<div className="bg-yellow-dark absolute bottom-5 left-9 flex h-5 w-5 items-center justify-center rounded-full p-0.5">
							<span className="text-lg text-white">1</span>
						</div>
						<ShoppingCart className="text-yellow-dark fill-yellow-dark" />
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default Header
