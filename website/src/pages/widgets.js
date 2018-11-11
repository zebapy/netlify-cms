import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const WidgetGalleryPage = ({ data }) => (
  <Layout>
    <div className="page widgets">
      <Helmet>
        <title>Widget Gallery</title>
        <meta name="description" content="Browse widgets available on NPM for NetlifyCMS" />
      </Helmet>
      <div className="">
        <h1>Widgets</h1>
        <ul>
          {data.allNpmPackage.edges.map(({ node }) => (
            <li className="widget-list-item" key={node.id}>
              <Link to={node.slug} className="">
                {node.title}
              </Link>
              <p>{node.description}</p>
            </li>
          ))}
        </ul>
        {/* TODO: pagination */}
      </div>
    </div>
  </Layout>
);

export default WidgetGalleryPage;

export const pageQuery = graphql`
  query widgetGalleryQuery {
    allNpmPackage(filter: { name: { regex: "/widget/" } }) {
      edges {
        node {
          id
          title
          description
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
`;
