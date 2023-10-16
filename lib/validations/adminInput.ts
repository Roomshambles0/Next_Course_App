import { z } from "zod";
export const adminInput = z.
object({
    name: z.string(),
    username: z.string(),
    password: z.string()
})


export type SignupParams = z.infer<typeof adminInput>;