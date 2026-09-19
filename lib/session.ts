import { cookies } from "next/headers";
import { db } from "./db";

export async function getCurrentUser() {
  const store = await cookies();
  const id = store.get("zenvia_session")?.value;
  if (!id) return null;
  return db.user.findUnique({ where: { id } });
}
