import { z } from "zod";
export const courseInput = z.
object({
    email: z.string(),
    name: z.string(),
    password: z.string()
})


export type SignupParams = z.infer<typeof courseInput>;