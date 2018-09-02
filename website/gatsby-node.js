const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const docPage = path.resolve('./src/templates/doc-page.js');
  const blogPost = path.resolve('./src/templates/blog-post.js');
  const widgetPage = path.resolve('./src/templates/widget-page.js');

  // get all markdown with a frontmatter path field and title
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 10000, filter: { fileAbsolutePath: { ne: null } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      allNpmPackage(filter: { name: { regex: "/widget/" } }) {
        edges {
          node {
            id
            title
            slug
            readme {
              id
              childMarkdownRemark {
                id
                html
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw Error(result.errors);
  }

  result.data.allNpmPackage.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: widgetPage,
      context: {
        slug: edge.node.slug,
        id: edge.node.id,
      },
    });
  });

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    let template = docPage;

    if (slug.includes('blog/')) {
      template = blogPost;
    }

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    });
  });
};

const pad = n => (n >= 10 ? n : `0${n}`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark' && getNode(node.parent).internal.type === 'File') {
    const value = createFilePath({ node, getNode });
    const { relativePath } = getNode(node.parent);

    let slug = value;

    if (relativePath.includes('blog/')) {
      const date = new Date(node.frontmatter.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const filename = path.basename(relativePath, '.md');
      slug = `/blog/${year}/${pad(month)}/${filename}`;

      createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      });
    }

    // used for doc posts
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    // used to create GitHub edit link
    createNodeField({
      node,
      name: 'path',
      value: relativePath,
    });
  }
};
