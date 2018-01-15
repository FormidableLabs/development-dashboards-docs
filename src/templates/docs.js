import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../data/site-config";

class DocsTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <div className="Page-content">
        <Helmet>
          <title>{`${config.siteTitle} |  ${post.title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <article
          className="Article"
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
      </div>
    );
  }
}

DocsTemplate.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object
};

export default DocsTemplate;

export const pageQuery = graphql`
  query DocsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
