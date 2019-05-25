# Scripts
```
$ start
Runs the dev server in development mode
```
```
$ start:dev
Runs the dev server in development mode
```
```
$ start:prod
Runs the dev server in production mode
```
```
$ start:storybook
Runs storybook on port
```
```
$ build
Builds the server || output >> ./build
```
```
$ build:storybook
Builds the neccesary storybook files || output >> ./storybook-static
```
```
$ lint
Runs an interation of tslint and stylelint
```
```
$ lint:tslint
Runs an interation of tslint
```
```
$ lint:css
Runs an interation of stylelint
```
```
$ test
Runs all test suites || outputs coverage >> ./coverage
```
```
$ test:unit
Runs all Jest test suites (unless given args) || outputs coverage >> ./coverage
```
```
$ test:unit:open
Runs all Jest test suites (unless given args) || outputs coverage >> ./coverage || run again when saved
```
```
$ test:integration
Runs an interation of cypress
```
```
$ test:integration:open
Opens the cypress test environment
```
```
$ pretty
Runs prettier on the whole project
```
```
$ gen:duck
Generates a specified duck module boilerplate
```
```
$ gen:page
Generates a specified page boilerplate
```
```
$ gen:unit
Generates a specified unit module boilerplate
```
```
$ clean:build
Removes the current build using rimraf
```
```
$ clean:cover
Removes the current contents of the test coverage folder
```
```
$ reinstall:all
Removes package-lock and node-modules using rimraf and reinstalls all libraries
```