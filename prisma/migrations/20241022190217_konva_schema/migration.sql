-- CreateEnum
CREATE TYPE "TemplateType" AS ENUM ('DIGITAL_PASS', 'DIGITAL_INVITATION', 'TABLE_DISTRIBUTION');

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isInvitationSent" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Template" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "config" JSONB,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "TemplateType" NOT NULL,
    "eventHallId" TEXT NOT NULL,

    CONSTRAINT "Template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigitalPass" (
    "id" TEXT NOT NULL,
    "config" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "eventId" TEXT,

    CONSTRAINT "DigitalPass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigitalInvitation" (
    "id" TEXT NOT NULL,
    "config" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "eventId" TEXT,

    CONSTRAINT "DigitalInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableDistribution" (
    "id" TEXT NOT NULL,
    "config" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "eventId" TEXT,

    CONSTRAINT "TableDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KonvaNode" (
    "id" TEXT NOT NULL,
    "config" JSONB,
    "coordinateX" INTEGER,
    "coordinateY" INTEGER,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "templateId" TEXT,
    "digitalPassId" TEXT,
    "digitalInvitationId" TEXT,
    "tableDistributionId" TEXT,

    CONSTRAINT "KonvaNode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DigitalPass_eventId_key" ON "DigitalPass"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalInvitation_eventId_key" ON "DigitalInvitation"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "TableDistribution_eventId_key" ON "TableDistribution"("eventId");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_eventHallId_fkey" FOREIGN KEY ("eventHallId") REFERENCES "EventHall"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DigitalPass" ADD CONSTRAINT "DigitalPass_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DigitalInvitation" ADD CONSTRAINT "DigitalInvitation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TableDistribution" ADD CONSTRAINT "TableDistribution_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KonvaNode" ADD CONSTRAINT "KonvaNode_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KonvaNode" ADD CONSTRAINT "KonvaNode_digitalPassId_fkey" FOREIGN KEY ("digitalPassId") REFERENCES "DigitalPass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KonvaNode" ADD CONSTRAINT "KonvaNode_digitalInvitationId_fkey" FOREIGN KEY ("digitalInvitationId") REFERENCES "DigitalInvitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KonvaNode" ADD CONSTRAINT "KonvaNode_tableDistributionId_fkey" FOREIGN KEY ("tableDistributionId") REFERENCES "TableDistribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
