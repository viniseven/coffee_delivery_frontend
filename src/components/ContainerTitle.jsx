import ImageTitle from "../assets/ImgTitle.svg"
import InfoItem from "./InfoItem"
import { BENEFITS } from "@/constants/benefits"

function ContainerTitle() {
	return (
		<div className="grid grid-col gap-2 xl:grid-cols-2 xl:mt-24">
			<div className="flex flex-col gap-4">
				<h1 className="text-5xl font-extrabold">
					Encontre o café perfeito para qualquer hora do dia
				</h1>
				<p className="text-xl font-light font-content">
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora do dia.
				</p>
				<div className="grid xl:gap-y-10 xl:gap-x-5 xl:grid-cols-2 gap-1 xl:mt-16">
					{BENEFITS.map((benefit) => (
						<InfoItem
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

export default ContainerTitle
