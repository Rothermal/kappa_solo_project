CREATE TABLE "users" (
    "id" serial,
    PRIMARY KEY ("id")
);
ALTER TABLE "users"
  ADD COLUMN "username" text,
  ADD COLUMN "password" text,
  ADD COLUMN "email" text,
  ADD UNIQUE ("username");

CREATE TABLE "public"."customers" (
      "id" serial,
      PRIMARY KEY ("id")
  );
ALTER TABLE "public"."customers"
  ADD COLUMN "first_name" text,
  ADD COLUMN "last_name" text,
  ADD COLUMN "phone_number" text,
  ADD COLUMN "email" text;
CREATE TABLE "public"."vehicles" (
    "id" serial,
    PRIMARY KEY ("id")
);
CREATE TABLE "public"."vehicles" (
    "id" serial,
    "year" integer,
    "make" text,
    "model" text,
    "engine" text,
    "transmission" text,
    "vin" text,
    PRIMARY KEY ("id")
);
CREATE TABLE "public"."repairs" (
    "id" serial,
    "type" text,
    "description" text,
    "fee" integer,
    PRIMARY KEY ("id")
);
CREATE TABLE "public"."parts" (
    "id" serial,
    "part_name" text,
    "description" text,
    "vendor" text,
    "cost" integer,
    PRIMARY KEY ("id")
);

ALTER TABLE "public"."customers"
  ADD COLUMN "vehicle_id" integer,
  ADD CONSTRAINT "vehicle_id" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id");

ALTER TABLE "public"."vehicles"
  ADD COLUMN "repair_id" integer,
  ADD CONSTRAINT "repair_id" FOREIGN KEY ("repair_id") REFERENCES "public"."repairs"("id");

ALTER TABLE "public"."repairs"
  ADD COLUMN "part_id" integer,
  ADD CONSTRAINT "parts_id" FOREIGN KEY ("part_id") REFERENCES "public"."parts"("id");

ALTER TABLE "public"."vehicles"
  ADD COLUMN "customer_id" integer,
  ADD CONSTRAINT "customer_id" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id");


ALTER TABLE "public"."repairs"
  ADD COLUMN "vehicle_id" integer,
  ADD CONSTRAINT "vehicle_id" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id");

ALTER TABLE "public"."parts"
  ADD COLUMN "repair_id" integer,
  ADD CONSTRAINT "repair_id" FOREIGN KEY ("repair_id") REFERENCES "public"."repairs"("id");




-- SAMPLE QUERY TO BRING BACK ALL PARTS INFO, INCLUDING THE REPAIR, THE VEHICLE AND CUSTOMER--
select * from parts
inner join  repairs
on repairs.id = parts.repair_id
inner join vehicles
on vehicles.id = repairs.vehicle_id
inner join customers
on customers.id = vehicles.customer_id;


