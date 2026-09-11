# Circa Shop and Coupons

Circa provides one public product browsing experience at `/shop` and `/coupons`.
Search, filters, sorting, grid/list layout, counts, pagination and refresh use the
same frontend listing controls as My Account. URLs preserve all listing selectors
when opening product details, reloading or returning to results. Quick view is
read-only and loads current product details; the full detail page retains the
existing explicit purchase review and confirmation.

## Ownership and composition

The customer-owned `DefaultCircaCatalogueService` composes the configured store's
published Product discovery/detail APIs with current Waste asset descriptors.
It writes no product, price, ownership, order, wallet, reward or entitlement state.
The small supported `DefaultEWasteMarketplaceService.list` extension selects this
same catalogue for inherited eWaste purchase/bid discovery. All other marketplace
methods remain inherited. There is no second product schema or persistence store.
Commerce owns Product publication, price, checkout and coupons; Waste owns asset
state and verified descriptors. Later impact assessments do not revalue settled
rewards. The frontend uses published media only and shows an unavailable-image
placeholder if delivery fails.

## Public endpoints

- `GET /nodics/circa.ewaste/v0/catalogue?kind=ASSET|COUPON`
- `GET /nodics/circa.ewaste/v0/catalogue/:code?kind=ASSET|COUPON`

The trusted eWaste HTTP mapper supplies runtime context. Callers cannot override
the configured store, locale, owner transport or service selection. Detail reads
call the Product detail API directly and validate kind and current asset listing
state independently of any listing page. Expired coupons, invalid prices and
unlisted/inactive assets are excluded. Current owner bindings govern bid visibility.
Purchase still submits the displayed revision and a stable idempotency key to the
original eWaste purchase endpoint, which performs its owning checkout validation.

Listing selectors are `q`, `category`, `condition`, `issuer`, `minPoints`,
`maxPoints`, `validUntil`, `sort`, `page` and `pageSize`. `validUntil` means the
coupon must remain valid through the selected date. Dates, number ranges, scalar
input and page bounds are validated before reads. Sort choices are `FEATURED`,
`POINTS_ASC`, `POINTS_DESC`, `NAME`, plus coupon-only `EXPIRY`. Explicit sorts use
product code to break ties. Invalid deep links can reset their listing state.

## Reference deployment bounds

The current Product discovery contract returns page-local facets without a full
count. Circa reads its configured store in batches of 100, resolves current asset
eligibility, then derives exact kind-specific facets, totals and the requested
page on the server. No complete catalogue is downloaded by a listing/detail page.
The default page size is 12, maximum 48. `circaEWaste.catalogue.maximumProducts`
bounds this reference composition at 2,000 published products. Exceeding the bound
or observing a repeated provider page returns an explicit recoverable failure;
it never presents a truncated total as complete. There is no cross-request
catalogue cache, so ownership/price availability is re-read each time.

Larger store deployments should move complete filtered counts/facets and joined
availability into an owning Product/Search projection through the separate
Nodics contribution process rather than increasing this scan indefinitely.

## Product content

Asset detail contains published imagery, verified specifications, sourced
assessment, ownership conditions and the existing reviewed purchase flow. Coupon
detail contains offer description, partner, validity, eligibility, terms,
exclusions and redemption instructions. Optional published localized attributes
are `terms`, `eligibility`, `exclusions`, `redemptionInstructions`, and
`purchaseConditions` (strings or arrays of strings). Missing copy is explicitly
reported as not provided; the application does not invent partner terms.
Existing sample records have not been rewritten or republished by this change.

## Validation

Run `npm test` in this module. In the customer frontend run `npm run verify`,
then `node test/live/catalogue-browsing.mjs` with local services running. The live
suite covers desktop/mobile browsing, filters, sort, pagination, quick view,
independent detail reload, URL-preserved return, transient failure recovery,
cross-kind rejection and My Account controls. It opens and cancels purchase
review and asserts that no purchase POST occurs. Actual purchase confirmation
and retry keys are covered by mocked interaction tests to avoid creating orders.
