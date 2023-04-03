-- CreateTable
CREATE TABLE "reviews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "movie_name" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
