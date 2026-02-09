interface LabelProps {
	label: string
}

function LabelProduct({ label }: LabelProps) {
	return (
		<div className="bg-yellow-light text-yellow-dark w-fit rounded-full px-2 py-1 text-xs">
			<span>{label}</span>
		</div>
	)
}

export default LabelProduct
