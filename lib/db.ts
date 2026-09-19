import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var zenviaPrisma: PrismaClient | undefined;
}

export const db = globalThis.zenviaPrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.zenviaPrisma = db;
