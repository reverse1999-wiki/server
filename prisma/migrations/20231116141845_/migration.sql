-- CreateTable
CREATE TABLE "Stat" (
    "character_id" TEXT NOT NULL,
    "atk" DOUBLE PRECISION NOT NULL,
    "hp" DOUBLE PRECISION NOT NULL,
    "reality_def" DOUBLE PRECISION NOT NULL,
    "mental_def" DOUBLE PRECISION NOT NULL,
    "critical_technique" DOUBLE PRECISION NOT NULL,
    "critical_rate" DOUBLE PRECISION NOT NULL,
    "critical_damage" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stat_pkey" PRIMARY KEY ("character_id")
);

-- CreateTable
CREATE TABLE "Character" (
    "character_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "afflatus" TEXT NOT NULL,
    "rarity" INTEGER NOT NULL,
    "damage_type" TEXT NOT NULL,
    "position" TEXT[],

    CONSTRAINT "Character_pkey" PRIMARY KEY ("character_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
