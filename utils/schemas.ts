import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  firstName: z.string().min(3, { message: 'min length is 3' }),
  lastName: z.string(),
  username: z.string(),
});

// create a function and use it as we are using the same validation in multiple places
export function validateWithZodSchema<T>(
  schema: ZodSchema<T>, // profile schema, imageschema, etc
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(', '));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});


function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ['image/'];
  return z
    .any()
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image');
}

