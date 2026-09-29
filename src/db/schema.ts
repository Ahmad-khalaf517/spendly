import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

// Placeholder table - replace it with the real schema.
export const example = pgTable('example', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});
