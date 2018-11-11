import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const WidgetPage = ({ data }) => {
  const { name, description, readme, lastPublisher } = data.npmPackage;

  return (
    <Layout>
      <div className="page page-widget-view">
        <Helmet>
          <title>{name}</title>
        </Helmet>
        <div className="container">
          <article className="widget-page-content">
            <div className="widget-page-header">
              <h1>{name}</h1>
              <p className="widget-page-info">by {lastPublisher.name}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: readme.childMarkdownRemark.html }} />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default WidgetPage;

export const pageQuery = graphql`
  query widgetPageQuery($slug: String!) {
    # markdownRemark(fields: { slug: { eq: $slug } }) {
    #   html
    # }
    npmPackage(slug: { eq: $slug }) {
      name
      description
      keywords
      lastPublisher {
        name
        avatar
      }
      repository {
        url
      }
      readme {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`;
