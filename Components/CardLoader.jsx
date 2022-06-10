import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={340}
    viewBox="0 0 220 340"
    backgroundColor="#f0c2c2"
    foregroundColor="#f9a9a9"
    {...props}
  >
    <rect x="12" y="9" rx="0" ry="0" width="220" height="340" />
  </ContentLoader>
);

export default MyLoader;
