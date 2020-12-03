/*========== import ==========*/
import React from "react";
import styled from "styled-components";
/* type */
interface Props {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/* DOM */
const Component: React.FC<Props> = (props): JSX.Element => {
  const {className: cn} = props;
  return <input type="text" name="hello" onChange={props.onChange} />;
};

/* style */
const StyledComponent = styled(Component)<Props>`
  border: solid black 1px;
`;

/* container */
const Input = StyledComponent;

/* export */
export default Input;