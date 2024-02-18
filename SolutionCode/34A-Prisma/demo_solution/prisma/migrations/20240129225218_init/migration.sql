-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userid_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "userid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
