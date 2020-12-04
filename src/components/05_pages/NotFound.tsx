import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = (): JSX.Element => (
  <>
    <h1>NotFound</h1>
    <p><Link to="/">return  top</Link></p>
  </>
);

export default NotFound;