/*
  Warnings:

  - You are about to drop the column `tenantId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_tenantId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "tenantId";

-- CreateTable
CREATE TABLE "_TentantToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TentantToUser_AB_unique" ON "_TentantToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TentantToUser_B_index" ON "_TentantToUser"("B");

-- AddForeignKey
ALTER TABLE "_TentantToUser" ADD CONSTRAINT "_TentantToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Tentant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TentantToUser" ADD CONSTRAINT "_TentantToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
