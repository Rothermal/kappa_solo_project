
-- users ---
CREATE TABLE "public"."users" (
    "id" serial,
    "user_name" text,
    "password" text,
    "email" text,
    PRIMARY KEY ("id"),
    UNIQUE ("user_name")
);


-- customers ---


CREATE TABLE "public"."customers" (
    "id" serial,
    "first_name" text,
    "last_name" text,
    "phone_number" text,
    "email" text,
    "vehicle_id" text,
    PRIMARY KEY ("id"),
    CONSTRAINT "vehicles.id" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id")
);

-- vehicles ----


CREATE TABLE "public"."vehicles" (
    "id" serial,
    "year" integer,
    "make" text,
    "model" text,
    "engine" float,
    "transmission" text,
    "vin" text,
    "repair_id" integer,
    "customer_id" integer,
    PRIMARY KEY ("id"),
    CONSTRAINT "repairs.id" FOREIGN KEY ("repair_id") REFERENCES "public"."repairs"("id"),
    CONSTRAINT "customers.id" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id")
);

-- repairs ---


CREATE TABLE "public"."repairs" (
    "id" serial,
    "type" text,
    "description" text,
    "date" date,
    "fee" integer,
    "part_id" text,
    "vehicle_id" text,
    PRIMARY KEY ("id"),
    CONSTRAINT "parts.id" FOREIGN KEY ("part_id") REFERENCES "public"."parts"("id"),
    CONSTRAINT "vehicles.id" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id")
);


-- parts --

CREATE TABLE "public"."parts" (
    "id" serial,
    "part_name" text,
    "description" text,
    "vendor" text,
    "cost" float,
    "repair_id" text,
    PRIMARY KEY ("id"),
    CONSTRAINT "repairs.id" FOREIGN KEY ("repair_id") REFERENCES "public"."repairs"("id")
);


-- SAMPLE QUERY TO BRING BACK ALL PARTS INFO, INCLUDING THE REPAIR, THE VEHICLE AND CUSTOMER--
select * from parts
inner join  repairs
on repairs.id = parts.repair_id
inner join vehicles
on vehicles.id = repairs.vehicle_id
inner join customers
on customers.id = vehicles.customer_id;


