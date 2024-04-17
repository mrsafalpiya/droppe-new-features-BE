ALTER TABLE "feature_type" DROP CONSTRAINT "feature_type_category_id_category_id_fk";
--> statement-breakpoint
ALTER TABLE "feature_type" ADD COLUMN "subcategory_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "feature_type" ADD CONSTRAINT "feature_type_subcategory_id_sub_category_id_fk" FOREIGN KEY ("subcategory_id") REFERENCES "sub_category"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "feature_type" DROP COLUMN IF EXISTS "category_id";