function TotalPrice() {
	return (
		<div className="text-base-text font-content flex flex-col gap-3">
			<div className="flex justify-between">
				<span className="text-sm">Total de itens</span>
				<span>R$ 29,70</span>
			</div>
			<div className="flex justify-between">
				<span className="text-sm">Entrega</span>
				<span>R$ 3,50</span>
			</div>
			<div className="flex justify-between text-xl font-bold">
				<span>Total</span>
				<span>R$ 33,20</span>
			</div>
		</div>
	)
}

export default TotalPrice
