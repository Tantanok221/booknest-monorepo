import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { s } from "../db/index.js";

export const userBehaviorLogInsertSchema = createInsertSchema(s.userBehaviorLog);
export const userBehaviorLogSelectSchema = createSelectSchema(s.userBehaviorLog);

export type userBehaviorLogInsertSchema = z.infer<typeof userBehaviorLogInsertSchema>;
export type userBehaviorLogSelectSchema = z.infer<typeof userBehaviorLogSelectSchema>;
