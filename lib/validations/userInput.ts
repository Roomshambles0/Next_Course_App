import { z } from "zod";
export const studentInput = z.
object({
    name: z.
    string( {invalid_type_error: "Name must be a string"}).
    min(4 ,{
        message: "Name is required"
    }).
    max(10,{message:"Name is too long"}),
    username: z.string({invalid_type_error: "Name must be a string"}).
    min(10 ,{
        message: "email is required"
    }).
    max(20),
    password: z.string({invalid_type_error: "Name must be a string"}).
    min(8 ,{
        message: "password is required"
    })
})


export type SignupParams = z.infer<typeof studentInput>;