import {
  pgTable,
  text,
  timestamp,
  real,
  integer,
  primaryKey,
  index,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// USER Table
export const user = pgTable('user', {
  userId: integer('user_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  emailIdx: index('email_idx').on(table.email), // Index for login and user lookup
  roleIdx: index('role_idx').on(table.role), // Index for filtering users by role
}));

// BOOK Table
export const book = pgTable('book', {
  bookId: integer('book_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  title: text('title').notNull(),
  genre: text('genre').array().notNull(),
  author: text('author').notNull(),
  synopsis: text('synopsis').notNull(),
  rating: real('rating').notNull(),
  popularityScore: real('popularity_score').notNull(),
  coverImageUrl: text('cover_image_url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
}, (table) => ({
  titleIdx: index('title_idx').on(table.title), // Index for searching books by title
  authorIdx: index('author_idx').on(table.author), // Index for filtering books by author
  genreIdx: index('genre_idx').on(table.genre), // Index for filtering books by genre
  ratingIdx: index('rating_idx').on(table.rating), // Index for sorting books by rating
  popularityIdx: index('popularity_idx').on(table.popularityScore), // Index for sorting books by popularity
  createdAtIdx: index('created_at_idx').on(table.createdAt), // Index for sorting by latest releases
}));

// BOOKMETADATATAG Table
export const bookMetadataTag = pgTable('bookmetadatatag', {
  tagId: integer('tag_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  tagName: text('tag_name').notNull(),
}, (table) => ({
  tagNameIdx: index('tag_name_idx').on(table.tagName), // Index for searching tags by name
}));

// BOOKTAGMAPPING Table
export const bookTagMapping = pgTable('booktagmapping', {
  bookTagId: integer('book_tag_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  bookId: integer('book_id').references(() => book.bookId),
  tagId: integer('tag_id').references(() => bookMetadataTag.tagId),
}, (table) => ({
  bookIdIdx: index('book_id_idx').on(table.bookId), // Index for JOINs with BOOK table
  tagIdIdx: index('tag_id_idx').on(table.tagId), // Index for JOINs with BOOKMETADATATAG table
}));

// USERLIST Table
export const userList = pgTable('userlist', {
  listId: integer('list_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  userId: integer('user_id').references(() => user.userId),
  listName: text('list_name').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('user_id_idx').on(table.userId), // Index for filtering lists by user
  listNameIdx: index('list_name_idx').on(table.listName), // Index for searching lists by name
}));

// USERLISTBOOKMAPPING Table
export const userListBookMapping = pgTable('userlistbookmapping', {
  listBookId: integer('list_book_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  listId: integer('list_id').references(() => userList.listId),
  bookId: integer('book_id').references(() => book.bookId),
}, (table) => ({
  listIdIdx: index('list_id_idx').on(table.listId), // Index for JOINs with USERLIST table
  bookIdIdx: index('book_id_idx').on(table.bookId), // Index for JOINs with BOOK table
}));

// REVIEW Table
export const review = pgTable('review', {
  reviewId: integer('review_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  userId: integer('user_id').references(() => user.userId),
  bookId: integer('book_id').references(() => book.bookId),
  rating: real('rating').notNull(),
  comment: text('comment').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('user_id_idx').on(table.userId), // Index for filtering reviews by user
  bookIdIdx: index('book_id_idx').on(table.bookId), // Index for filtering reviews by book
  ratingIdx: index('rating_idx').on(table.rating), // Index for sorting reviews by rating
  createdAtIdx: index('created_at_idx').on(table.createdAt), // Index for sorting reviews by date
}));

// USERBEHAVIORLOG Table
export const userBehaviorLog = pgTable('userbehaviorlog', {
  logId: integer('log_id').generatedAlwaysAsIdentity({ startWith: 0 }).primaryKey(),
  userId: integer('user_id').references(() => user.userId),
  bookId: integer('book_id').references(() => book.bookId),
  action: text('action').notNull(),
  timestamp: timestamp('timestamp').defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index('user_id_idx').on(table.userId), // Index for filtering logs by user
  bookIdIdx: index('book_id_idx').on(table.bookId), // Index for filtering logs by book
  actionIdx: index('action_idx').on(table.action), // Index for filtering logs by action
  timestampIdx: index('timestamp_idx').on(table.timestamp), // Index for sorting logs by timestamp
}));