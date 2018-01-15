const path = require("path");
const _ = require("lodash");

exports.modifyWebpackConfig = ({ config }) => {
  // Do not transform SVG into data-uris
  config.loader("url-loader", {
    test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: "url",
    query: {
      limit: 10000,
      name: "static/[name].[hash:8].[ext]"
    }
  });

  // Instead load <svg> elements directly into the DOM
  config.loader("raw-loader", {
    test: /\.(svg)(\?.*)?$/,
    loader: "raw"
  });
};

// Add custom url pathname for blog posts.
// eslint-disable-next-line max-statements
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    const configName = fileNode.sourceInstanceName;

    // create slug
    if (
      fileNode.name !== "README" &&
      parsedFilePath.name !== "index" &&
      parsedFilePath.dir !== ""
    ) {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (fileNode.name === "README") {
      slug = `/${parsedFilePath.dir}`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // Prefix slug with options.name set in config (for markdown files pulled from node_modules)
    if (configName !== "pages") {
      slug = `/${configName}${slug}`;
    }

    // manually overriding slug in frontmatter
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });

    // Separate /docs from /guides for <Sidebar />
    createNodeField({ node, name: "type", value: parsedFilePath.dir });

    const useSidebar = parsedFilePath.dir === "docs" || parsedFilePath.dir === "guides";
    createNodeField({ node, name: "sidebar", value: useSidebar });
  }
};

// Implement the Gatsby API `createPages`.
// This is called after the Gatsby bootstrap is finished
// so you have access to any information necessary to
// programatically create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const docsTemplate = path.resolve("src/templates/docs.js");

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                  }
                  headings {
                    depth
                    value
                  }
                  fields {
                    slug
                    type
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          /* eslint no-console: "off"*/
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach((edge) => {
          createPage({
            path: edge.node.fields.slug, // required
            component: docsTemplate,
            context: {
              slug: edge.node.fields.slug
            },
            layout: "index"
          });
        });
      })
    );
  });
};
