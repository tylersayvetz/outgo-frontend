# Notes:

## Errors / Discrepancies
* Account types from API not always adhering to type.
* no transaction amounts specified in type. Adjusted type.
* api hangs on responseKey 6 !

## Design Choices:
* chosen to ignore savings accounts
* decided not to make a validator layer or a data cleaning layer. UI will be robust to handle bad or incomplete data.
* spending power is the dynamic sum of accounts with checking and early_incom properties.