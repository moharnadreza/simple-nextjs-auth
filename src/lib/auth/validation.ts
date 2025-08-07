import { z } from "zod";

const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^09\d{9}$/, "Enter a valid mobile number (09xxxxxxxxx)")
    .length(11, "Phone number must be exactly 11 digits"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export { loginSchema, type LoginFormData };
