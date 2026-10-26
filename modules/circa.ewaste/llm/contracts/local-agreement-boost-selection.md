# Local agreement and discovery visibility selection

`test/fixtures/circaAgreementBoostOperationalSelection.json` contains reviewed
Local command inputs for two new service Products, two zero-AED PriceRows, and
FIXED_PRICE / SUBSCRIPTION agreements. It is a non-importable `sample-v001`
operational selection, not a release, installed receipt or automatic seed.
Do not add an Agreement import header: Agreement history admits only its owner
record command. No existing release, package, price, purchase or coupon issuance
is overwritten or repeated.

The existing `circaLocalGreenPerksAed` PriceBook belongs to GREENPERKS_RETAIL.
Read its exact current active AED version through Pricing and bind that version
to each price-create command. Product and PriceRow create commands allocate
version zero; independently read back both exact new identities before using
the selected zero-version Agreement references. Reconcile an existing identity
or unknown outcome; never turn create into overwrite or change the pinned version
to whichever record happens to be current.

Product's ordinary root contract intentionally has no product-type enum. These
Local roots select SERVICE / SERVICE and omit coupon delivery/fulfilment data.
They describe visibility service packages, while the retained E07 coupons are
only the existing eligible boost targets. The synthetic terms explicitly state
zero AED, no automatic charge or renewal, and no financial evidence. PREPAID
is a descriptive vocabulary selection, not a claim of a payment transaction.

Use the existing Native Admin for targeted Product/Pricing authoring on Staged
and Agreement/Search management on operational Commerce. Its signed Enterprise
stays unchanged; `targetEnterpriseCode` and the Agreement Enterprise are reviewed
business selectors enforced by their owners. No new profile, grant or funding
is selected. Local operational Commerce selects REMOTE catalogue references;
the framework owner forwards the same admitted human bearer to exact generated
Staged Product/PriceRow reads. Profile Enterprise identity remains Profile-owned.

Agreement's contract pins authored versions; it does not require publishing a
package as a purchasable customer listing. Do not invent package checkout or
publish the package merely to copy raw source records into Online. Actual sales
would require the existing Product/Pricing publication lifecycle separately.
The E10 rules do use the existing Search publication command, which validates
Agreement coverage and stores immutable rule history plus operational/index
projections. There is no direct projection write.

For native acceptance, retain one unchanged customer query before publication,
after the PACKAGE_INCLUDED rule, and after the ADD_ON rule. Both selected E07
coupons must already be eligible in that query. Capture the actual rank of each
and stable candidate identities. Publication success alone is insufficient:
require an observed ranking change for each benefit, and an unchanged explicit
customer-sort result. A missing candidate or no rank movement is unconfirmed,
not a passed boost. Do not acquire/redeem coupons to manufacture candidates.

Keep native execution receipts in the acceptance workspace. Source contract
tests use synthetic readback and persistence and never claim live success.
