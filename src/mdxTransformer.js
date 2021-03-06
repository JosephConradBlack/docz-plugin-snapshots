const createMdxTransformer = require("jest-mdx-loader/src/createTransformer");

const preProcess = function(src) {
  return src
    .replace(/<Playground>/g, "<React.Fragment>")
    .replace(/<\/Playground>/g, "</React.Fragment>");
};

module.exports = {
  process: createMdxTransformer(preProcess)
};
