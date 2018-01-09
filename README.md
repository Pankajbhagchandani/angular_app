# Complete starter seed project for Angular 2

###### You can use npm, but it's recommended to use yarn as it installs a lot faster and has other benefits https://yarnpkg.com/ . 
Make sure you are using yarn version 0.16.0 or newer (check with 'yarn --version')
```bash
git clone https://github.com/Pankajbhagchandani/angular_app.git
cd angular_app
yarn
yarn start
yarn test for unit test
yarn run e2e for end to end testing.
```

## Features

* Angular
  * Async loading
  * Treeshaking
  * AOT (Ahead of Time/ Offline) Compilation
* Webpack 2
  * Webpack Dlls (Speeds up devServer builds)
  * @ngTools AOT plugin
* TypeScript 2
  * @types
* Karma/Jasmine testing
* Protractor for E2E testing

## Basic scripts

Use `yarn start` for dev server. Default dev port is `3000`.

Use 'yarn test' to start the karma unit tests.


E2E Test: 
Use `yarn run build` for production build and then yarn run e2e for test cases.

Use `yarn run server:prod` for production server and production watch. Default production port is `8088`.

Default ports and option to use proxy backend for dev server can be changed in `constants.js` file.

To create AOT version, run `yarn run build:aot`. This will compile and build script.
Then you can use `yarn run prodserver` to see to serve files.

### AOT  Don'ts

The following are some things that will make AOT compile fail.

- Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Don’t use default exports.
- Don’t use form.controls.controlName, use form.get(‘controlName’)
- Don’t use control.errors?.someError, use control.hasError(‘someError’)
- Don’t use functions in your providers, routes or declarations, export a function and then reference that function name
- Inputs, Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public

### Testing

For unit tests, use `yarn run test` for continuous testing in watch mode and use
`yarn run test:once` for single test. To view code coverage after running test, open `coverage/html/index.html` in your browser.

For e2e tests, use `yarn run e2e`. To run unit test and e2e test at the same time, use `yarn run ci`.
