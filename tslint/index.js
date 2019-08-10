"use strict";

module.exports = {
  extends: ["./configs/core", "./configs/react", "./configs/sonar"],
  linterOptions: {
    exclude: ["node_modules/**"],
  },
};
