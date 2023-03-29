/*
  Warnings:

  - A unique constraint covering the columns `[ID_ACCOUNT]` on the table `account` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `account_ID_ACCOUNT_key` ON `account`(`ID_ACCOUNT`);
