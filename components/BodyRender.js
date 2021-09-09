import React from "react";
import Components from "./index";

const BodyRender = ({ blok }) => {
   return <>{blok.attrs.body.map((childBlok, index) => React.createElement(Components(childBlok.component), { key: `childBlock-${index}`, blok: childBlok }))}</>;
};

export default BodyRender;