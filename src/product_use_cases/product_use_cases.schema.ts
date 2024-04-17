import { subcategory } from '@/categories/categories.schema';
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const useCase = pgTable('use_case', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  subcategoryId: integer('subcategory_id')
    .notNull()
    .references(() => subcategory.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const useCaseRelations = relations(useCase, ({ one }) => ({
  subcategory: one(subcategory, {
    fields: [useCase.subcategoryId],
    references: [subcategory.id],
  }),
}));
