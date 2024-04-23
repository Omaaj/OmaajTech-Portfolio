import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      Page Not Found <br /> Go Back to <Link to="/">Home Page</Link>
    </div>
  );
}
