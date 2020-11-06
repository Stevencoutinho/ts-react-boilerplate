/* React */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';


const Nav: FC = (): JSX.Element => (
  <nav>
    <ul>
      <li><Link to="/">Top</Link></li>
      <li><Link to="/login">User</Link></li>
    </ul>
  </nav>
);

export default Nav;