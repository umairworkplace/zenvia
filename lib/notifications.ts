export type Notification = { id: string; type: "order" | "promotion" | "system"; title: string; message: string; createdAt: string; read: boolean };
export function makeNotification(type: Notification["type"], title: string, message: string): Notification { return { id: crypto.randomUUID(), type, title, message, createdAt: new Date().toISOString(), read: false }; }
