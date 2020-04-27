# User Portal Web 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


aws cloudformation deploy --template-file template.yml --stack-name blog-web --parameter-overrides BaseUrl=accencio.com AppUrl=portal.accencio.com AcmCertArn=arn:aws:acm:us-east-1:923214416668:certificate/6c507c92-45dd-4d06-9224-1436767008d1


-- describe 
aws cloudformation describe-stacks --stack-name blog-web --query "Stacks[0].Outputs[?OutputKey==`DistributionId` || OutputKey==`AppBucket`]"


https://medium.com/@ibliskavka/aws-angular-stack-automation-b45767bda2ec