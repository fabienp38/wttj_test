# Exercice3: Using Cypress

Now that you have completed the perfect test plan, we want to practice a first test scenario using Cypress (if you are not comfortable with this tool, solutions such as Selenium or equivalent are possible: ))

The objective is to carry out some scenarios which test the creation of candidates on the dashboard side, via this form and implicitly the correct recording of information.
 
*NB1: only the creation of a candidate, otherwise it may take a long time ...;)*
 
*NB2: don't waste too much time with the signin, just re-use your hard session information in your scenario*

## Getting Started

After cloning source code, execute following commands to install and start cypress tests. 

> Go to [Cypress Installation](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) page to install Cypress without npm.


```bash
npm install cypress --save-dev
```


Before ro run the cypress tests, you have to confgure baseurl and session_id value in cypress.json file

```bash
{
    "baseUrl": "TO_BE_COMPLETED",
    "scripts": {
      "cypress:open": "cypress open"
    },
    
    "env": {
      "SESSION_ID": "TO_BE_COMPLETED"
    }

}
```
## Usage

To run the cypress tests:

```bash
./node_modules/.bin/cypress open
```
