/*
  Warnings:

  - You are about to drop the column `date` on the `Meal` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "onDiet" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Meal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Meal" ("description", "id", "onDiet", "title", "userId") SELECT "description", "id", "onDiet", "title", "userId" FROM "Meal";
DROP TABLE "Meal";
ALTER TABLE "new_Meal" RENAME TO "Meal";
PRAGMA foreign_key_check("Meal");
PRAGMA foreign_keys=ON;
