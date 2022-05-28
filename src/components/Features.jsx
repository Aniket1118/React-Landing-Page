import React from "react";
import featureiamge1 from "../images/feature_1.png";
import featureiamge2 from "../images/feature_2.png";
import featureiamge3 from "../images/feature_3.png";
import FeatureBox from "./FeatureBox";

function Features() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureiamge1} title="Development Course" />
        <FeatureBox image={featureiamge2} title="Best Schemes" />
        <FeatureBox image={featureiamge3} title="Best User Interface" />
      </div>
    </div>
  );
}

export default Features;
