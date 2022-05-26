## What problem does this library solve?

Many Angular applications depend on configuration to modify application behaviour. You may want multiple instances of the same Angular app to behave differently based on some configuration. Angular provides [a way to do this at build time](https://angular.io/guide/build#configuring-application-environments) but often this solution is not flexible enough if engineers want to configure their app after it's been built/deployed.

`ngx-runtime-env` solves this. It fetches an application environment at runtime, and then mutates the existing Angular environment accordingly