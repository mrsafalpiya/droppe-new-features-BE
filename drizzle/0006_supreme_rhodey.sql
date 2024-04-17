CREATE TABLE IF NOT EXISTS "label" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"subcategory_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "use_case" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"subcategory_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "label" ADD CONSTRAINT "label_subcategory_id_sub_category_id_fk" FOREIGN KEY ("subcategory_id") REFERENCES "sub_category"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "use_case" ADD CONSTRAINT "use_case_subcategory_id_sub_category_id_fk" FOREIGN KEY ("subcategory_id") REFERENCES "sub_category"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
