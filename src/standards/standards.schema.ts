import { subcategory } from '@/categories/categories.schema';
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const standard = pgTable('standard', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  subcategoryId: integer('subcategory_id')
    .notNull()
    .references(() => subcategory.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const standardRelations = relations(standard, ({ one, many }) => ({
  subcategory: one(subcategory, {
    fields: [standard.subcategoryId],
    references: [subcategory.id],
  }),
  versions: many(standardVersion),
}));

export const standardVersion = pgTable('standard_version', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  standardId: integer('standard_id')
    .notNull()
    .references(() => standard.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const standardVersionRelations = relations(
  standardVersion,
  ({ one, many }) => ({
    standard: one(standard, {
      fields: [standardVersion.standardId],
      references: [standard.id],
    }),
    technicalResults: many(technicalResult),
  }),
);

export const technicalResult = pgTable('technical_result', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  standardVersionId: integer('standard_version_id')
    .notNull()
    .references(() => standardVersion.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const technicalResultRelations = relations(
  technicalResult,
  ({ one }) => ({
    standardVersion: one(standardVersion, {
      fields: [technicalResult.standardVersionId],
      references: [standardVersion.id],
    }),
  }),
);
