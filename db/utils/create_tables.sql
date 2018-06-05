CREATE TABLE "users" (
	"_id" serial NOT NULL,
	"username" varchar UNIQUE,
	"password" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"join_timestamp" timestamp with time zone NOT NULL,
	"last_login_timestamp" timestamp with time zone NOT NULL,
) WITH (OIDS=FALSE);
