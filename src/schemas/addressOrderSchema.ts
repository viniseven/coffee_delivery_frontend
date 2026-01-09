import z from "zod"

export const addressSchema = z.object({
	cep: z.string().min(8, "CEP inválido"),
	street: z.string().min(1, "Rua é obrigatória"),
	number: z.string().min(1, "Número é obrigatório"),
	complement: z.string().optional(),
	district: z.string().min(1, "Bairro é obrigatório"),
	city: z.string().min(1, "Cidade é obrigatória"),
	uf: z.string().min(1, "UF é obrigatória"),
})
