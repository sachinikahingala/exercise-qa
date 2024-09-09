Harver QA Exercise - completed
========================

## Notes

- Tests are written in Typescript 

## Prequisites

You'll need **Node.JS** and **NPM** installed to run tests.


## Preconditions before run the Tests

- Go to the terminal in this directory(i.e excercise-qa) and run below command to install required node project dependancies.

`npm install`

## How to run the tests

- In the terminal run below command to run tests in all browsers mentioned in the playwright.config.ts under environments.

`npx playwright test`

- In the terminal run below command to run tests in a given browser.

e.g. : to run in firefox

`npx playwright test --project firefox`

- In the terminal run below command to run tests in headed mode.

`npx playwright test --ui`


## Bugs found in API Testing

All the bugs found during API testing is documented in the 'API Bug Report.docx' here.