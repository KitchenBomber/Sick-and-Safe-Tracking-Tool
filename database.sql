
-- USER is a reserved keyword with Postgres 
-- "prime-app" is what's set up
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!


--Database: "sick_and_safe"


CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "access" INT
);

CREATE TABLE "employee_profile"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT,
    "full_name" varchar(50),
    "supervisor_id" INT,
    "admin_id" INT,
    "dflt_start" date,
    "dflt_hours" INT,
    "dlft_mpls" boolean,
    "dflt_absence" int,
    "last_login" DATE,
    "failed_since_last" int,
    "notes" varchar (250)
);
--when a "user" is created I also need to make it populate this table with "user"."id" = "employee_pprofile"."user.id"