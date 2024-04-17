import { featureType } from '@/product_features/product_features.schema';
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const category = pgTable('category', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const categoryRelations = relations(category, ({ many }) => ({
  subcategories: many(subcategory),
}));

export const subcategory = pgTable('sub_category', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  categoryId: integer('category_id')
    .notNull()
    .references(() => category.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const subcategoryRelations = relations(subcategory, ({ one, many }) => ({
  category: one(category, {
    fields: [subcategory.categoryId],
    references: [category.id],
  }),
  featureTypes: many(featureType),
}));
