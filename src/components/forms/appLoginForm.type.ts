import { z } from "zod";
import { regex } from "../../constants/regex";

export const appLoginFormSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(1).refine((value) => regex.email.test(value))
});

export type AppLoginFormSchema = z.infer<typeof appLoginFormSchema>;