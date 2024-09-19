# AdminPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

The intent of this project is to test how the following imports behave in Angular 17:
1) RouterOutlet
2) RouterLinkActive
3) RouterLink
4) Children menu options inside app.route.ts

## Table of Contents

- [Development server](#development-server)
- [Code scaffolding](#code-scaffolding)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [Further help](#further-help)

## Development server

Clone this project, open and VSCode and run command below to install dependency. 
`npm install`. 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Structure
admin-portal/
├── .angular/
│   └── cache/
│       └── 17.3.9/
│           ├── admin-portal/
│           └── vite/
├── .editorconfig
├── .gitignore
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── tasks.json
├── angular.json
├── package.json
├── README.md
├── src/
│   ├── app/
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── interfaces/
│   │   │   └── login.ts
│   │   ├── pages/
│   │   │   ├── dashboard/
│   │   │   │   ├── dashboard.component.css
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   ├── dashboard.component.ts
│   │   │   ├── employee/
│   │   │   │   ├── employee.component.css
│   │   │   │   ├── employee.component.html
│   │   │   │   ├── employee.component.spec.ts
│   │   │   │   ├── employee.component.ts
│   │   │   ├── layout/
│   │   │   │   ├── layout.component.css
│   │   │   │   ├── layout.component.html
│   │   │   │   ├── layout.component.spec.ts
│   │   │   │   ├── layout.component.ts
│   │   │   ├── login/
│   │   │   │   ├── login.component.css
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   ├── login.component.ts
│   │   │   ├── shared/
│   │   │       ├── not-found/
│   │   │           ├── not-found.component.css
│   │   │           ├── not-found.component.html
│   │   │           ├── not-found.component.spec.ts
│   │   │           ├── not-found.component.ts
│   ├── assets/
│   │   └── .gitkeep
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

## Dependencies

- Angular: ^17.3.0
- Bootstrap: ^5.3.3
- Font Awesome: ^4.7.0
- RxJS: ~7.8.0
- Zone.js: ~0.14.3

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Further help

To get more help on the Angular CLI use [`ng help`](command:_github.copilot.openSymbolFromReferences?%5B%22ng%20help%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5C03%20Capacitaciones%5C%5CAngular%5C%5Cangular17%5C%5CMyAngularProjects%5C%5Cadmin-portal%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2F03%2520Capacitaciones%2FAngular%2Fangular17%2FMyAngularProjects%2Fadmin-portal%2FREADME.md%22%2C%22path%22%3A%22%2Fd%3A%2F03%20Capacitaciones%2FAngular%2Fangular17%2FMyAngularProjects%2Fadmin-portal%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A26%2C%22character%22%3A41%7D%7D%5D%5D "Go to definition") or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.