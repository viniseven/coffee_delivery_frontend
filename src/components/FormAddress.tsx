import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Form, FormField, FormItem, FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { addressSchema } from "../schemas/addressOrderSchema"

type AddressSchema = z.infer<typeof addressSchema>

function FormAddress() {
	const form = useForm<AddressSchema>({
		resolver: zodResolver(addressSchema),
		defaultValues: {
			cep: "",
			street: "",
			number: "",
			complement: "",
			district: "",
			city: "",
			uf: "",
		},
	})

	function handleAddAddressOrder(data: AddressSchema) {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleAddAddressOrder)}
				className="grid grid-cols-3 gap-4"
			>
				<FormField
					control={form.control}
					name="cep"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="CEP"
									{...field}
									className="bg-base-input border-none shadow-none"
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="street"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormControl>
								<Input
									placeholder="Rua"
									{...field}
									className="bg-base-input border-none shadow-none"
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="number"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="Número"
									{...field}
									className="bg-base-input border-none shadow-none"
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="complement"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormControl>
								<Input
									placeholder="Complemento"
									{...field}
									className="bg-base-input border-none shadow-none"
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="district"
					render={({ field }) => (
						<FormItem className="col-span-3">
							<FormControl>
								<Input
									placeholder="Bairro"
									{...field}
									className="bg-base-input border-none shadow-none"
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormControl>
								<Input
									placeholder="Cidade"
									{...field}
									className="bg-base-input border-none shadow-none"
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="uf"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="UF"
									{...field}
									className="bg-base-input border-none shadow-none"
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}

export default FormAddress
