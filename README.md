# Outgo Frontend Home Screen Sample
## Installation and demo
Use this link to view the deployment.

https://codesandbox.io/p/github/tylersayvetz/outgo-frontend/main?file=%2FREADME.md

## Must read

To run this project successfully in the browser you will need to install a browser extension to allow CORS or update the API CORS policy. Currently, `(Access-Control-Allow-Origin: *)` must be added to the response headers in all requests. Here are a few extensions that will get the job done right away before the API policy can be updated:

* Chrome: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
* Edge: https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag?hl=en-US

Similar extensions can be found for other browsers.

### Before installing one of the extensions or updating the API's CORS policy, the project will show it's error state / missing data state beacuse it is receiving 400's from the API.
# Dev Notes:

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


## Holistic approach big ticket items.
* Data display
* Front end input validation
* Handling api error states
