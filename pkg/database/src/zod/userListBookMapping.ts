import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { s } from "../db/index.js";

export const userListBookMappingInsertSchema = createInsertSchema(s.userListBookMapping);
export const userListBookMappingSelectSchema = createSelectSchema(s.userListBookMapping);

export type userListBookMappingInsertSchema = z.infer<typeof userListBookMappingInsertSchema>;
export type userListBookMappingSelectSchema = z.infer<typeof userListBookMappingSelectSchema>;
