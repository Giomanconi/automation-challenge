# <a name="project">Automation Challenge</a>

Basic automation framework made with cypress/js for e2e testing


Appart from the files saved from cypress after tests runs I added a reporting plugin named cypress-mochawesome-reporter.
Report file is saved inside a folder named 'reports', just open the index.html file to see the complete report


## <a name="installation">Getting Started</a>
### <a name="prerequisites">Prerequisites</a>


Required
* NodeJS 
* IDE


### <a name="install-project">Project Setup</a>
Use the node package manager [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the app.

```bash
npm install
```

### <a name="#run-server">Run Tests</a>

```bash
npx cypress run 
```

if you want to run the tests in a specific browser just add the following to the previous command
```bash
--browser chrome
--browser edge
--browser electron
```


### <a name="#optional">Other option to run Tests</a>
this will open cypress dashboard and you will have to chose which spec file you want to run, but have in mind that this is made for development proposes and tests may fail randomly

```bash
npx cypress open 
```
