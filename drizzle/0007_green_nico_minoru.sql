CREATE TABLE IF NOT EXISTS "standard" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"subcategory_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "standard" ADD CONSTRAINT "standard_subcategory_id_sub_category_id_fk" FOREIGN KEY ("subcategory_id") REFERENCES "sub_category"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
