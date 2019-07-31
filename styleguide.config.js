const path = require("path");

module.exports = {
  title: "D3 Examples",
  components: "src/examples/**/*.tsx",
  // If true only components with a markdown file will be shown in Styleguidist.
  // If false every component will be listed in Styleguidist
  skipComponentsWithoutExample: true,
  // Only markdown files with similar name like component name will be shown in Styleguidist.
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, ".md");
  },
  pagePerSection: true,
  usageMode: "collapse",
  exampleMode: "collapse"
  /*   require: [path.join(__dirname, "./src/index.scss")] */
};
