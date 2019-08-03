/// <reference types="react-scripts" />

/** Enables import of .csv files. */
declare module "*.csv";

/** Disables autoimport console when typing console.log(). */
declare module "console" {
  export = typeof import("console");
}
