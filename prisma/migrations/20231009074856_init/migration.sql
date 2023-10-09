/*
  Warnings:

  - You are about to drop the column `password` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - Added the required column `hashedpassword` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashedpassword` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "password",
ADD COLUMN     "hashedpassword" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "password",
ADD COLUMN     "hashedpassword" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
