import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const path = useLocation().pathname;
  return (
    <div>
      <p>Page not found at {path}!</p>
    </div>
  );
};

export default NotFound;
