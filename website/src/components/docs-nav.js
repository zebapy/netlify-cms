import React from 'react';
import Link from 'gatsby-link';

const TableOfContents = ({ node }) => {
  // unescape less-than character done in gatsby-transformer-remark
  const toc = node.tableOfContents.replace(/&#x3C;/g, '<');

  return (
    <div
      className="nav-subsections"
      dangerouslySetInnerHTML={{ __html: toc }}
    />
  );
};

const DocsNav = ({ items, location }) => (
  <nav className="docs-nav" id="docs-nav">
    {items.map(item => (
      <div className="docs-nav-section" key={item.title}>
        <div className="docs-nav-section-title">{item.title}</div>
        <ul className="docs-nav-section-list">
          {item.group.edges.map(({ node }) => (
            <li className="docs-nav-item" key={node.fields.slug}>
              <Link
                to={node.fields.slug}
                className="nav-link"
                activeClassName="active"
              >
                {node.frontmatter.title}
              </Link>
              {location.pathname === node.fields.slug && (
                <TableOfContents node={node} />
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </nav>
);

export default DocsNav;
