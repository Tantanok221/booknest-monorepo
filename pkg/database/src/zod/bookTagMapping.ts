import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { s } from "../db/index.js";

export const bookTagMappingInsertSchema = createInsertSchema(s.bookTagMapping);
export const bookTagMappingSelectSchema = createSelectSchema(s.bookTagMapping);

export type bookTagMappingInsertSchema = z.infer<typeof bookTagMappingInsertSchema>;
export type bookTagMappingSelectSchema = z.infer<typeof bookTagMappingSelectSchema>;
