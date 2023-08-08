-- CreateTable
CREATE TABLE "Dicount" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "discountCode" TEXT,
    "discountName" TEXT,
    "discountPercentage" DOUBLE PRECISION,
    "endDate" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dicount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDiscount" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "isExpired" BOOLEAN,
    "isUsed" BOOLEAN,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "UserDiscount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DicountToUserDiscount" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DicountToUserDiscount_AB_unique" ON "_DicountToUserDiscount"("A", "B");

-- CreateIndex
CREATE INDEX "_DicountToUserDiscount_B_index" ON "_DicountToUserDiscount"("B");

-- AddForeignKey
ALTER TABLE "_DicountToUserDiscount" ADD CONSTRAINT "_DicountToUserDiscount_A_fkey" FOREIGN KEY ("A") REFERENCES "Dicount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DicountToUserDiscount" ADD CONSTRAINT "_DicountToUserDiscount_B_fkey" FOREIGN KEY ("B") REFERENCES "UserDiscount"("id") ON DELETE CASCADE ON UPDATE CASCADE;
