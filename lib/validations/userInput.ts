import { z } from "zod";
export const studentInput = z.
object({
    name: z.string(),
    username: z.string(),
    password: z.string()
})


export type SignupParams = z.infer<typeof studentInput>;