## Install

To install run `npm i lt-lazy-table`

# Documentation

Use `<lib-lazy-table></lib-lazy-tabl>` selector to insert table in your project.

###### Inputs:

| Prop             | Type     | Usage                  |
|:-----------------|:---------|:----------------------:|
| columns          | IColumn[]| display headers        |
| tableData        | [ {} ]   | display data           |
| itemsOnPage      | number   | displayed rows on page |
| withGlobalFilter | boolean  | display global filter   |
| withPagination   | boolean  | display pagination     |

`interface IColumn {
  name: string,
  field: string,
  type: 'number' | 'text' | 'date'
}`

# LazyTable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## Code scaffolding

Run `ng generate component component-name --project lazy-table` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project lazy-table`.
> Note: Don't forget to add `--project lazy-table` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build lazy-table` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build lazy-table`, go to the dist folder `cd dist/lazy-table` and run `npm publish`.

## Running unit tests

Run `ng test lazy-table` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
