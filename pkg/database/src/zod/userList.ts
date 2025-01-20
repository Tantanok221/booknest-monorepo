import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { s } from "../db/index.js";

export const userListInsertSchema = createInsertSchema(s.userList);
export const userListSelectSchema = createSelectSchema(s.userList);

export type userListInsertSchema = z.infer<typeof userListInsertSchema>;
export type userListSelectSchema = z.infer<typeof userListSelectSchema>;
