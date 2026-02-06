import ImageTitle from "../assets/ImgTitle.svg"
import BenefitListComponent from "./BenefitListComponent"
import { BENEFITS } from "@/constants/benefits"

function ContainerTitlePageComponent() {
	return (
		<div className="grid-col grid gap-2 xl:mt-24 xl:grid-cols-2">
			<div className="flex flex-col gap-4">
				<h1>Encontre o café perfeito para qualquer hora do dia</h1>
				<p className="font-content text-xl font-light">
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora do dia.
				</p>
				<div className="grid gap-1 xl:mt-16 xl:grid-cols-2 xl:gap-x-5 xl:gap-y-10">
					{BENEFITS.map((benefit) => (
						<BenefitListComponent
							key={benefit.id}
							icon={benefit.icon}
							text={benefit.text}
							iconBgColor={benefit.iconBgColor}
						/>
					))}
				</div>
			</div>
			<div className="justify-self-end">
				<img
					src={ImageTitle}
					alt="Imagem de copo de café sob grãos de café"
					className="w-476px"
				/>
			</div>
		</div>
	)
}

export default ContainerTitlePageComponent
