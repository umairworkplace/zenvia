# Velnora

**The Modern Commerce Platform**

Fresh rebuild of the commerce platform under the Velnora brand.

## Architecture

- Next.js App Router + TypeScript
- PostgreSQL + Prisma
- Customer / Seller / Admin roles
- Storefront
- Seller workspace
- Admin console
- Products and variants
- Inventory
- Orders and fulfillment
- Recommendations
- Dropshipping adapters
- Analytics
- Vercel deployment

## Development rule

Build one coherent, testable layer at a time. Keep integrations behind interfaces and keep credentials in environment variables only.

## Deployment

Set Vercel Root Directory to `velnora` when deploying this clean rebuild.
