import React from "react";
import { useLocation } from "react-router-dom";
function NotMatch() {
  const location = useLocation();
  return (
    <h2>
      NOT FOUND <code>{location.pathname}</code>
    </h2>
  );
}
export default NotMatch;
