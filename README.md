# coffeeshot.com

## Adding a new data model
* add the model itself to `primsa/schema.prisma`
* push it to the db `$ npx prisma db push`
* (or if created manually `$ npx prisma db pull`)
* `prisma generate`
* create service layer at `/services/xxxApi.ts`
* add the service to the store at `/store/store.ts`
* add data layer to `/data/xxx/ts`
* add api routes to `/app/api/xxx/route.ts`
* create frontend routes `/app/xxx/page.tsx`


