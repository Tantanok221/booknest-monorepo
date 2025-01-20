import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { s } from "../db/index.js";

export const bookMetadataTagInsertSchema = createInsertSchema(s.bookMetadataTag);
export const bookMetadataTagSelectSchema = createSelectSchema(s.bookMetadataTag);

export type bookMetadataTagInsertSchema = z.infer<typeof bookMetadataTagInsertSchema>;
export type bookMetadataTagSelectSchema = z.infer<typeof bookMetadataTagSelectSchema>;
