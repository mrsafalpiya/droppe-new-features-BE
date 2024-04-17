import { subcategory } from '@/categories/categories.schema';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const post = pgTable('product', {
  id: serial('id').primaryKey(),
  sku: text('sku').notNull().unique(),
  link: text('link').notNull().unique(),

  // Details about the product
  subcategoryId: integer('subcategory_id')
    .notNull()
    .references(() => subcategory.id, { onDelete: 'cascade' }),

  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});
