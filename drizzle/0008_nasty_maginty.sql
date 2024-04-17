CREATE TABLE IF NOT EXISTS "standard_version" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"standard_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "standard_version" ADD CONSTRAINT "standard_version_standard_id_standard_id_fk" FOREIGN KEY ("standard_id") REFERENCES "standard"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
