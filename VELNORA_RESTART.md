# Velnora — Fresh Start

This repository is being restarted under the Velnora brand.

## Product
A modern commerce platform with customer storefront, seller workspace, admin console, product catalog, inventory, orders, recommendations, authentication, analytics, and a dropshipping integration layer.

## Fresh-start rules
- Do not carry forward the previous Zenvia implementation blindly.
- Prefer a small, coherent architecture over duplicated modules.
- Keep frontend, backend/API, database, authentication, seller, admin, and dropshipping boundaries explicit.
- Every milestone must be buildable before expanding scope.
- Secrets and credentials stay out of source control.

## Initial technical direction
- Next.js App Router + TypeScript
- PostgreSQL + Prisma
- Customer, seller, and admin roles
- Products, variants, inventory, orders, and order items
- Dropshipping adapters behind a stable internal interface
- Vercel deployment target

## Brand
Velnora

Tagline: The Modern Commerce Platform
