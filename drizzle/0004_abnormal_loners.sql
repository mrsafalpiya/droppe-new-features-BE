ALTER TABLE "category" DROP CONSTRAINT "category_slug_unique";--> statement-breakpoint
ALTER TABLE "sub_category" DROP CONSTRAINT "sub_category_slug_unique";--> statement-breakpoint
ALTER TABLE "feature_type" DROP CONSTRAINT "feature_type_slug_unique";--> statement-breakpoint
ALTER TABLE "feature_value" DROP CONSTRAINT "feature_value_slug_unique";--> statement-breakpoint
ALTER TABLE "category" DROP COLUMN IF EXISTS "slug";--> statement-breakpoint
ALTER TABLE "sub_category" DROP COLUMN IF EXISTS "slug";--> statement-breakpoint
ALTER TABLE "feature_type" DROP COLUMN IF EXISTS "slug";--> statement-breakpoint
ALTER TABLE "feature_value" DROP COLUMN IF EXISTS "slug";