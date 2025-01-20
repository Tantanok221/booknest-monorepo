import { userInsertSchema, userSelectSchema } from "./user.js";
import { bookInsertSchema, bookSelectSchema } from "./book.js";
import { bookMetadataTagInsertSchema, bookMetadataTagSelectSchema } from "./bookMetadataTag.js";
import { bookTagMappingInsertSchema, bookTagMappingSelectSchema } from "./bookTagMapping.js";
import { userListInsertSchema, userListSelectSchema } from "./userList.js";
import { userListBookMappingInsertSchema, userListBookMappingSelectSchema } from "./userListBookMapping.js";
import { reviewInsertSchema, reviewSelectSchema } from "./review.js";
import { userBehaviorLogInsertSchema, userBehaviorLogSelectSchema } from "./userBehaviorLog.js";

export const zodSchema = { 
          user: {
            InsertSchema: userInsertSchema,
            SelectSchema: userSelectSchema
          },
          book: {
            InsertSchema: bookInsertSchema,
            SelectSchema: bookSelectSchema
          },
          bookMetadataTag: {
            InsertSchema: bookMetadataTagInsertSchema,
            SelectSchema: bookMetadataTagSelectSchema
          },
          bookTagMapping: {
            InsertSchema: bookTagMappingInsertSchema,
            SelectSchema: bookTagMappingSelectSchema
          },
          userList: {
            InsertSchema: userListInsertSchema,
            SelectSchema: userListSelectSchema
          },
          userListBookMapping: {
            InsertSchema: userListBookMappingInsertSchema,
            SelectSchema: userListBookMappingSelectSchema
          },
          review: {
            InsertSchema: reviewInsertSchema,
            SelectSchema: reviewSelectSchema
          },
          userBehaviorLog: {
            InsertSchema: userBehaviorLogInsertSchema,
            SelectSchema: userBehaviorLogSelectSchema
          }
        };

export type zodSchemaType = {
        
          user: {
            InsertSchema: userInsertSchema,
            SelectSchema: userSelectSchema
          },
          book: {
            InsertSchema: bookInsertSchema,
            SelectSchema: bookSelectSchema
          },
          bookMetadataTag: {
            InsertSchema: bookMetadataTagInsertSchema,
            SelectSchema: bookMetadataTagSelectSchema
          },
          bookTagMapping: {
            InsertSchema: bookTagMappingInsertSchema,
            SelectSchema: bookTagMappingSelectSchema
          },
          userList: {
            InsertSchema: userListInsertSchema,
            SelectSchema: userListSelectSchema
          },
          userListBookMapping: {
            InsertSchema: userListBookMappingInsertSchema,
            SelectSchema: userListBookMappingSelectSchema
          },
          review: {
            InsertSchema: reviewInsertSchema,
            SelectSchema: reviewSelectSchema
          },
          userBehaviorLog: {
            InsertSchema: userBehaviorLogInsertSchema,
            SelectSchema: userBehaviorLogSelectSchema
          }
      };
