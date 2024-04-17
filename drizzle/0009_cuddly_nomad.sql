CREATE TABLE IF NOT EXISTS "technical_result" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"standard_version_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "technical_result" ADD CONSTRAINT "technical_result_standard_version_id_standard_version_id_fk" FOREIGN KEY ("standard_version_id") REFERENCES "standard_version"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
