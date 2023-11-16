/*
  Warnings:

  - The primary key for the `Stat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `character_id` on the `Stat` table. All the data in the column will be lost.
  - Added the required column `character_name` to the `Stat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stat" DROP CONSTRAINT "Stat_pkey",
DROP COLUMN "character_id",
ADD COLUMN     "character_name" TEXT NOT NULL,
ADD CONSTRAINT "Stat_pkey" PRIMARY KEY ("character_name");
