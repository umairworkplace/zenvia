export type UserRole = "customer" | "admin" | "seller";

export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
};

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function createGuestUser(): User {
  return { id: `guest-${Date.now().toString(36)}`, email: "", name: "Guest", role: "customer" };
}

export function hasRole(user: User | null, roles: UserRole[]): boolean {
  return Boolean(user && roles.includes(user.role));
}

export function requireRole(user: User | null, roles: UserRole[]): User {
  if (!hasRole(user, roles)) throw new Error("Forbidden");
  return user as User;
}
