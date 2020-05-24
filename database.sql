
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
    "access" INT,
    "supervisor_id" INT,
    "admin_id" INT DEFAULT '1',
    "hire_date" DATE DEFAULT CURRENT_DATE,
    "dflt_hours" INT DEFAULT '8',
    "dflt_mpls" BOOLEAN DEFAULT 'true',
    "dflt_absence" INT DEFAULT '20',
    "last_login" DATE DEFAULT CURRENT_DATE,
    "notes" VARCHAR (500)
);


CREATE TABLE "employee_time"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT,
    "start" DATE,
    "hours" INT,
    "payroll_code" INT DEFAULT '1',
    "mpls" BOOLEAN
);

CREATE TABLE "payroll_codes"
(
    "id" SERIAL PRIMARY KEY,
    "pay_class" VARCHAR (20)
);


INSERT INTO "payroll_codes"
    ("pay_class")
VALUES
    ('Regular'),
    ('Vacation'),
    ('Sick'),
    ('FMLA'),
    ('Unexcused Non-Sick');