/*
  Warnings:

  - You are about to drop the `leads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "leads";

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "treatment" TEXT,
    "procedure" TEXT,
    "message" TEXT,
    "city" TEXT,
    "age" TEXT,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "source" TEXT,
    "formName" TEXT NOT NULL DEFAULT 'Website leads',
    "status" TEXT NOT NULL DEFAULT 'new',
    "telecrmSynced" BOOLEAN NOT NULL DEFAULT false,
    "telecrmId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_phone_idx" ON "Lead"("phone");

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Lead_formName_idx" ON "Lead"("formName");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");

-- CreateIndex
CREATE INDEX "Lead_telecrmSynced_idx" ON "Lead"("telecrmSynced");
