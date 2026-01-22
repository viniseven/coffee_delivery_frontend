import ProductTypes from "@/types/ProductTypes"
import coffeeTradicional from "../assets/CoffeeTradicional.svg"
import tradicionalAmericano from "../assets/TradicionalAmericano.svg"
import expressoCremoso from "../assets/ExpressoCremoso.svg"
import expressoGelado from "../assets/ExpressoGelado.svg"
import coffeeComLeite from "../assets/CoffeeComLeite.svg"
import late from "../assets/Late.svg"
import capuccino from "../assets/Capuccino.svg"
import machiato from "../assets/Machiato.svg"
import mocaccino from "../assets/Mocaccino.svg"
import chocolateQuente from "../assets/ChocolateQuente.svg"
import cubano from "../assets/Cubano.svg"
import havaiano from "../assets/Havaiano.svg"
import arabe from "../assets/Arabe.svg"
import irlandes from "../assets/Irlandes.svg"

export const PRODUCTS: ProductTypes[] = [
	{
		id: "1",
		name: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		category: "Coffee",
		priceInCents: 299,
		label: ["TRADICIONAL"],
		imgUrl: coffeeTradicional,
	},
	{
		id: "2",
		name: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
		category: "Coffee",
		priceInCents: 990,
		label: ["TRADICIONAL"],
		imgUrl: tradicionalAmericano,
	},
	{
		id: "3",
		name: "Expresso Cremoso",
		description: "Café expresso tradicional com espuma cremosa",
		category: "Coffee",
		priceInCents: 990,
		label: ["TRADICIONAL"],
		imgUrl: expressoCremoso,
	},
	{
		id: "4",
		name: "Expresso Gelado",
		description: "Bebida preparada com café expresso e cubos de gelo",
		category: "Coffee",
		priceInCents: 990,
		label: ["TRADICIONAL", "GELADO"],
		imgUrl: expressoGelado,
	},
	{
		id: "5",
		name: "Café com Leite",
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		category: "Coffee",
		priceInCents: 990,
		label: ["TRADICIONAL", "COM LEITE"],
		imgUrl: coffeeComLeite,
	},
	{
		id: "6",
		name: "Latte",
		description:
			"Uma dose de café expresso com o dobro de leite e espuma cremosa",
		category: "Coffee",
		priceInCents: 990,
		label: ["TRADICIONAL", "COM LEITE"],
		imgUrl: late,
	},
	{
		id: "7",
		name: "Capuccino",
		description: "Bebida com doses iguais de café, leite e espuma",
		category: "Coffee",
		priceInCents: 990,
		label: ["TRADICIONAL", "COM LEITE"],
		imgUrl: capuccino,
	},
	{
		id: "8",
		name: "Macchiato",
		description:
			"Café expresso misturado com um pouco de leite quente e espuma",
		category: "Coffee",
		priceInCents: 990,
		label: ["TRADICIONAL", "COM LEITE"],
		imgUrl: machiato,
	},
	{
		id: "9",
		name: "Mocaccino",
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		category: "Coffee",
		priceInCents: 990,
		label: ["ESPECIAL", "COM LEITE"],
		imgUrl: mocaccino,
	},
	{
		id: "10",
		name: "Chocolate Quente",
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		category: "Coffee",
		priceInCents: 990,
		label: ["ESPECIAL", "COM LEITE"],
		imgUrl: chocolateQuente,
	},
	{
		id: "11",
		name: "Cubano",
		description:
			"Drink gelado de café expresso com rum, creme de leite e hortelã",
		category: "Coffee",
		priceInCents: 990,
		label: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
		imgUrl: cubano,
	},
	{
		id: "12",
		name: "Havaiano",
		description: "Bebida adocicada preparada com café e leite de coco",
		category: "Coffee",
		priceInCents: 990,
		label: ["ESPECIAL"],
		imgUrl: havaiano,
	},
	{
		id: "13",
		name: "Árabe",
		description: "Bebida preparada com grãos de café árabe e especiarias",
		category: "Coffee",
		priceInCents: 990,
		label: ["ESPECIAL"],
		imgUrl: arabe,
	},
	{
		id: "14",
		name: "Irlandês",
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		category: "Coffee",
		priceInCents: 990,
		label: ["ESPECIAL", "ALCOÓLICO"],
		imgUrl: irlandes,
	},
]
