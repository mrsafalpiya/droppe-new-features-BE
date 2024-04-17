DO $$ BEGIN
 CREATE TYPE "feature_type_variant" AS ENUM('select', 'num');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "feature_type" ADD COLUMN "variant" "feature_type_variant" NOT NULL;--> statement-breakpoint
ALTER TABLE "feature_type" ADD COLUMN "extra" text;