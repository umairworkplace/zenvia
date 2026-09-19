export type Coupon = { code: string; type: "percent" | "fixed"; value: number; minSubtotal?: number };
export const coupons: Coupon[] = [
  { code: "WELCOME10", type: "percent", value: 10 },
  { code: "SAVE20", type: "fixed", value: 20, minSubtotal: 100 }
];
export function findCoupon(code: string) { return coupons.find(c => c.code === code.trim().toUpperCase()); }
export function discountFor(coupon: Coupon, subtotal: number) { if (coupon.minSubtotal && subtotal < coupon.minSubtotal) return 0; return coupon.type === "percent" ? subtotal * coupon.value / 100 : Math.min(coupon.value, subtotal); }
