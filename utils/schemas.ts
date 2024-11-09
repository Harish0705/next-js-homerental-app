import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  firstName: z.string().min(3, { message: 'min length is 3' }),
  lastName: z.string(),
  username: z.string(),
});

// create a function and use it as we are using the same validation in multiple places
export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(', '));
  }
  return result.data;
}