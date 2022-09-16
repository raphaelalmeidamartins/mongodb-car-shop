import { z } from 'zod';
import { IVehicleZodSchema } from './IVehicle';

export const ICarZodSchema = IVehicleZodSchema.extend({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export type ICar = z.infer<typeof ICarZodSchema>;
export type ICarWithId = ICar & { _id: string };
