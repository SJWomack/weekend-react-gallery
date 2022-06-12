CREATE TABLE "user-images" (
"id" SERIAL PRIMARY KEY,
"url" VARCHAR NOT NULL,
"description" VARCHAR NOT NULL,
"likes" INTEGER DEFAULT(0)
);

INSERT INTO "user-images" ( "url","description", "likes")
VALUES ('images/goat_small.jpg','Photo of a goat taken at Glacier National Park.' , 300)