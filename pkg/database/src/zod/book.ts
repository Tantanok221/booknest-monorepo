import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { s } from "../db/index.js";

export const bookInsertSchema = createInsertSchema(s.book);
export const bookSelectSchema = createSelectSchema(s.book);

export type bookInsertSchema = z.infer<typeof bookInsertSchema>;
export type bookSelectSchema = z.infer<typeof bookSelectSchema>;
