import { subcategory } from '@/categories/categories.schema';
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const label = pgTable('label', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  subcategoryId: integer('subcategory_id')
    .notNull()
    .references(() => subcategory.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const labelRelations = relations(label, ({ one }) => ({
  subcategory: one(subcategory, {
    fields: [label.subcategoryId],
    references: [subcategory.id],
  }),
}));
