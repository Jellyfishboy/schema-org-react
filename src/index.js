import React from "react";
import PropTypes from "prop-types";

const SchemaOrg = ({ type, id, url, name, additionalProps = {} }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": id,
    url: url,
    name: name,
    ...additionalProps,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

SchemaOrg.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  additionalProps: PropTypes.object,
};

export default SchemaOrg;
