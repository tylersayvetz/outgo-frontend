# Notes:

## Errors / Discrepancies
* Account types from API not always adhering to type.
* no transaction amounts specified in type. Adjusted type.
* api hangs on responseKey 6 ! (??)


## Future needs
* hide scroll bars


## Design Choices:
* chosen to ignore savings accounts
* decided not to make a validator layer or a data cleaning layer. UI will be robust to handle bad or incomplete data.
* spending power is the dynamic sum of accounts with checking and early_incom properties.

## todo
* add filtering to accounts list
* add validation to screen form input


## Holistic approach big ticket items.
* Data display
* Front end input validation
* Handling api error states
