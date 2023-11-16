-- CreateTable
CREATE TABLE "LevelCost" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "rarity" INTEGER NOT NULL,
    "dust" INTEGER NOT NULL,
    "sharpodonty" INTEGER NOT NULL,
    "insight" INTEGER NOT NULL,

    CONSTRAINT "LevelCost_pkey" PRIMARY KEY ("id")
);
