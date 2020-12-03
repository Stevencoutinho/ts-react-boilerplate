/*========== import ==========*/
import React from "react";
import styled from "styled-components";
/* type */
interface Props {
  className?: string;
};

/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const {className: cn} = props;
  return <footer>footer</footer>;
};

/* style */
const StyledComponent = styled(Component)<Props>`
  color: red;
`;

/* container */
const Footer = StyledComponent;

/* export */
export default Footer;