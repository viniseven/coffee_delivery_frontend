import { Avatar, AvatarFallback } from "./ui/avatar"

function BenefitListComponent({ text, icon: Icon, iconBgColor }) {
	return (
		<div className="flex items-center gap-1.5">
			<Avatar>
				<AvatarFallback style={{ backgroundColor: iconBgColor }}>
					<Icon size={16} className="text-white" />
				</AvatarFallback>
			</Avatar>
			<p>{text}</p>
		</div>
	)
}

export default BenefitListComponent
