import { subcategory } from '@/categories/categories.schema';
import { relations } from 'drizzle-orm';
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const featureTypeVariantEnum = pgEnum('feature_type_variant', [
  'select',
  'num',
]);

export const featureType = pgTable('feature_type', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  variant: featureTypeVariantEnum('variant').notNull(),
  extra: text('extra'), // For variant of 'num', extra = unit
  subcategoryId: integer('subcategory_id')
    .notNull()
    .references(() => subcategory.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const featureTypeRelations = relations(featureType, ({ one, many }) => ({
  possibleValues: many(featureValue),
  subcategory: one(subcategory, {
    fields: [featureType.subcategoryId],
    references: [subcategory.id],
  }),
}));

export const featureValue = pgTable('feature_value', {
  id: serial('id').primaryKey(),
  featureTypeId: integer('feature_type_id')
    .notNull()
    .references(() => featureType.id, { onDelete: 'cascade' }),
  value: text('value').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const featureValueRelations = relations(featureValue, ({ one }) => ({
  featureType: one(featureType, {
    fields: [featureValue.featureTypeId],
    references: [featureType.id],
  }),
}));
