import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { s } from "../db/index.js";

export const reviewInsertSchema = createInsertSchema(s.review);
export const reviewSelectSchema = createSelectSchema(s.review);

export type reviewInsertSchema = z.infer<typeof reviewInsertSchema>;
export type reviewSelectSchema = z.infer<typeof reviewSelectSchema>;
