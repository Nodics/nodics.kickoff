# agora.apparel examples

## Bind an existing reward-checkout fixture

Run from the Kickoff root with local PLATFORM, COMMERCE and LOYALTY runtimes
already available and the Apparel composition active. The shell variables below
must come from your authorized test setup or secret store; no example invents
customer IDs, contact details or a spending ceiling. Required-value expressions
stop before execution when any prerequisite has not been supplied.

```sh
NODICS_LOYALTY_CHECKOUT_CUSTOMER_CODE="${TEST_CUSTOMER_CODE:?existing Profile customer code required}" \
NODICS_LOYALTY_CHECKOUT_WALLET_CODE="${TEST_WALLET_CODE:?existing funded customer wallet required}" \
NODICS_LOYALTY_CHECKOUT_MAXIMUM_REWARD_AMOUNT="${APPROVED_TEST_REWARD_LIMIT:?explicit positive decimal spending limit required}" \
NODICS_LOYALTY_CHECKOUT_CUSTOMER_EMAIL="${TEST_CUSTOMER_EMAIL:?required}" \
NODICS_LOYALTY_CHECKOUT_CUSTOMER_FIRST_NAME="${TEST_CUSTOMER_FIRST_NAME:?required}" \
NODICS_LOYALTY_CHECKOUT_CUSTOMER_LAST_NAME="${TEST_CUSTOMER_LAST_NAME:?required}" \
NODICS_LOYALTY_CHECKOUT_ADDRESS_LINE1="${TEST_ADDRESS_LINE1:?required}" \
NODICS_LOYALTY_CHECKOUT_ADDRESS_CITY="${TEST_ADDRESS_CITY:?required}" \
NODICS_LOYALTY_CHECKOUT_ADDRESS_REGION="${TEST_ADDRESS_REGION:?required}" \
NODICS_LOYALTY_CHECKOUT_ADDRESS_POSTAL_CODE="${TEST_ADDRESS_POSTAL_CODE:?required}" \
NODICS_LOYALTY_CHECKOUT_ADDRESS_COUNTRY="${TEST_ADDRESS_COUNTRY:?required}" \
NODICS_LOYALTY_CHECKOUT_CUSTOMER_TOKEN="${TEST_CUSTOMER_TOKEN:?authorized customer token required}" \
NODICS_LOYALTY_ACCEPTANCE_SERVICE_TOKEN="${TEST_LOYALTY_READ_TOKEN:?authorized Loyalty service token required}" \
AXIS_AUTH_TOKEN="${TEST_EMPLOYEE_TOKEN:?authorized employee token required}" \
npm run acceptance:loyalty-reward-checkout -- --execute
```

The limit remains an exact decimal string; do not use shell arithmetic or infer it
from the product name. Customer login/password inputs are an alternative to an
already-issued customer token, as documented by the framework suite. nTooling
resolves the selected environment and semantic runtime roles normally; this
example introduces no endpoint catalogue or credentials into project properties.

Use `npm run acceptance:loyalty-reward-checkout -- --help` for inert help.
Exit 1 means failure/prerequisite rejection. Exit 2 means API checks passed but
the documented independent-record/persistence evidence gaps remain; it is not
full qualification. No automatic rerun, permission repair or wallet cleanup is
authorized by either result.
